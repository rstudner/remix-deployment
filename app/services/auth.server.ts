import { GoogleStrategy } from "remix-auth-google";
import { Authenticator } from "remix-auth";
import { sessionStorage } from "~/services/session.server";
import { prisma } from "~/data/database.server";
import { redirect } from "@remix-run/node";
import type { User } from "@prisma/client";
import { FormStrategy } from "remix-auth-form";
import {hash, compare, genSalt} from 'bcryptjs';

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export let authenticator = new Authenticator<User>(sessionStorage);

const CLIENT_ID: string = process.env.CLIENT_ID as string;
const CLIENT_SECRET: string = process.env.CLIENT_SECRET as string;

let googleStrategy: GoogleStrategy<User> = new GoogleStrategy(
    {
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      callbackURL: "http://localwebapp.example.com:3000/auth/google/callback",
    },
    async ({ accessToken, refreshToken, extraParams, profile }) => {
      // Get the user data from your DB or API using the tokens and profile
      console.log("GOOGLE STRATEGY");
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
    }
);

let formStrategy = new FormStrategy(async ({ form, context }) => {
  // Here you can use `form` to access and input values from the form.
  // and also use `context` to access more things from the server
  let username = form.get("email") as string; // or email... etc
  let password = form.get("password") as string;

  console.log('in form strategy');
  console.log(username);
  console.log(password);
  let existingUser:User = await login({email: username, password});
  console.log('existingUser?');
  console.log(existingUser);
  if (existingUser) {
    console.log('have existing user, return it');
    return existingUser;
  }

  // And if you have a password you should hash it
  const salt = await genSalt(12);
  let hashedPassword = await hash(password, salt);

  // And finally, you can find, or create, the user
  let user = await findOrCreateUser(username, hashedPassword);
  console.log('user?');
  console.log(user);

  // And return the user as the Authenticator expects it
  return user;
})

authenticator.use(googleStrategy, "google");
authenticator.use(formStrategy, 'form');

export async function getUserFromSession(request:any): Promise<User> {
  console.log("getUserFromSession");

  let user: any = await authenticator.isAuthenticated(request);

  console.log("User:");
  console.log(user);

  return user?.id || null;
}

export async function destroyUserSession(request: any) {
  const session = await sessionStorage.getSession(
      request.headers.get("Cookie")
  );

  if (!session) {
    return null;
  }
  const destroyedCookie = await sessionStorage.destroySession(session);
  return redirect("/", {
    headers: {
      "Set-Cookie": destroyedCookie,
    },
  });
}

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

export async function login({ email, password }: { email: string, password: string}) {
  console.log('login method');
  console.log(email);
  console.log(password);
  const existingUser = await prisma.user.findFirst({ where: { email } });
  console.log('existingUser:');
  console.log(existingUser);
  if (!existingUser) {
    const error:any = new Error(
        'Could not log you in, please check the provided credentials',
    );
    error.status = 401;
    throw error;
  }

  const passwordCorrect = await compare(password, existingUser.password as string);

  if (!passwordCorrect) {
    const error:any = new Error(
        'Could not log you in, please check the provided credentials',
    );
    error.status = 401;
    throw error;
  }

  console.log('made it to the end');
  return existingUser;
}

export async function signup({ email, password }: { email: string, password: string}) {
  const existingUser = await prisma.user.findFirst({ where: { email } });
  if (existingUser) {
    const error:any = new Error('A user with the provided email address exists');
    error.status = 422;
    throw error; // this triggers error boundary, not catch boundary, since not an Error Response
  }
  const passwordHash = await hash(password, 12);
  const user = await prisma.user.create({
    data: { email, password: passwordHash },
  });

  return user
  //return createUserSession(user.id, '/expenses');
}
