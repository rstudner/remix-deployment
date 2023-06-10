import { json } from '@remix-run/node';
import { destroyUserSession } from "~/services/auth.server";

export async function action({ request }) {
  console.log('logout Action');
  if (request.method !== 'POST') {
    throw json('Invalid request method', { status: 400 });
  }
  return await destroyUserSession(request);
}
