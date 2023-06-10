import { GoogleStrategy } from "remix-auth-google";
import { Authenticator } from "remix-auth";
import { sessionStorage } from "~/services/session.server";
import { prisma } from "~/data/database.server";
import { redirect } from "@remix-run/node";
import type {User} from "@prisma/client";


// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export let authenticator = new Authenticator<User>(sessionStorage);

const CLIENT_ID: string = process.env.CLIENT_ID as string;
const CLIENT_SECRET: string = process.env.CLIENT_SECRET as string;

let googleStrategy:GoogleStrategy<User> = new GoogleStrategy(
  {
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: "http://localwebapp.example.com:3000/auth/google/callback",
  },
  async ({ accessToken, refreshToken, extraParams, profile }) => {
    // Get the user data from your DB or API using the tokens and profile
    const email = profile.emails[0].value;
    const existingUser:User|null = await prisma.user.findFirst({ where: { email } });
    if (existingUser) {
      return existingUser;
    }
    const newUser:User = await prisma.user.create({
      data: { email },
    });
    return newUser;
  }
);

authenticator.use(googleStrategy);

export async function getUserFromSession(request: any):Promise<User> {
  console.log('getUserFromSession');

  let user:User = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  console.log('User:');
  console.log(user);

  return user;
}

export async function getUserIdFromSession(request: any):Promise<string> {
  console.log('getUserIdFromSession');
  const user:User = await getUserFromSession(request);
  console.log('User: ');
  const userId:string = user.id;
  console.log(`userId: ${userId}`);
  return user.id;
}


export async function destroyUserSession(request: any) {
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );

  if (!session) {
    return null;
  }
  return redirect("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
}


