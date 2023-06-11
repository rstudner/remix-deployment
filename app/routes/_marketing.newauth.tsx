import AuthForm from '~/components/auth/AuthForm';
import authStyles from '~/styles/auth.css';
import type { ActionArgs } from '@remix-run/node';
import { validateCredentials } from '~/data/validation.server';
//import { login, signup } from '~/data/auth.server';
import {authenticator, login, signup} from '~/services/auth.server';

// interface AuthFormData {
//   email: string;
//   password: string;
// }
export default function Index() {
  return <AuthForm />;
}

export async function action({ request }: ActionArgs) {
  console.log('marketing new auth action');
  return await authenticator.authenticate("form", request, {
    successRedirect: "/expenses",
    failureRedirect: "/newauth",
  });
}

export const meta = () => ({
  title: 'New Auth',
});

export function links() {
  return [{ rel: 'stylesheet', href: authStyles }];
}
