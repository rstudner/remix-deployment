import { GoogleStrategy } from 'remix-auth-google';
import { Authenticator } from 'remix-auth';
import { sessionStorage } from '~/services/session.server';
import { prisma } from '~/data/database.server';
import type { User } from '@prisma/client';
import { FormStrategy } from 'remix-auth-form';
import { compare, genSalt, hash } from 'bcryptjs';

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export let authenticator = new Authenticator<User>(sessionStorage);

const CLIENT_ID: string = process.env.CLIENT_ID as string;
const CLIENT_SECRET: string = process.env.CLIENT_SECRET as string;
const CALLBACK_URL: string = process.env.CALLBACK_URL as string;

let googleStrategy: GoogleStrategy<User> = new GoogleStrategy(
  {
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
  },
  async ({ accessToken, refreshToken, extraParams, profile }) => {
    // Get the user data from your DB or API using the tokens and profile
    const email = profile.emails[0].value;
    const existingUser: User | null = await prisma.user.findFirst({
      where: { email },
    });
    if (existingUser) {
      return existingUser;
    }
    const newUser: User = await prisma.user.create({
      data: { email },
    });
    return newUser;
  },
);

let formStrategy = new FormStrategy(async ({ form, context }) => {
  let username = form.get('email') as string; // or email... etc
  let password = form.get('password') as string;
  if (context && context?.authMode === 'signup') {
    const salt = await genSalt(12);
    let hashedPassword = await hash(password, salt);
    return await signup({ email: username, password: hashedPassword });
  }

  let existingUser: User = await login({ email: username, password });
  return existingUser;
});

authenticator.use(googleStrategy, 'google');
authenticator.use(formStrategy, 'user-pass');

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const existingUser = await prisma.user.findFirst({ where: { email } });
  if (!existingUser) {
    const error: any = new Error(
      'Could not log you in, please check the provided credentials',
    );
    error.status = 401;
    throw error;
  }

  const passwordCorrect = await compare(
    password,
    existingUser.password as string,
  );

  if (!passwordCorrect) {
    const error: any = new Error(
      'Could not log you in, please check the provided credentials',
    );
    error.status = 401;
    throw error;
  }

  return existingUser;
}

export async function signup({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const existingUser = await prisma.user.findFirst({ where: { email } });
  if (existingUser) {
    const error: any = new Error(
      'A user with the provided email address exists',
    );
    error.status = 422;
    throw error; // this triggers error boundary, not catch boundary, since not an Error Response
  }
  const passwordHash = await hash(password, 12);
  const user = await prisma.user.create({
    data: { email, password: passwordHash },
  });

  return user;
}

/*
async function findOrCreateUser(email: string, hashedPassword: string) {
  const existingUser: User | null = await prisma.user.findFirst({
    where: { email },
  });
  if (existingUser) {
    return existingUser;
  }

  let newUser: User;
  if (!hashedPassword) {
    newUser = await prisma.user.create({
      data: { email },
    });
  } else {
    newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword
      }
    });
  }

  return newUser;
}
 */
