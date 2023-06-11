import { json } from '@remix-run/node';
import { authenticator } from '../services/auth.server';

export async function action({ request }) {
  if (request.method !== 'POST') {
    throw json('Invalid request method', { status: 400 });
  }
  return await authenticator.logout(request, { redirectTo: '/auth' });
}
