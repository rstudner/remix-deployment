import AuthForm from '~/components/auth/AuthForm';
import authStyles from '~/styles/auth.css';
import type { ActionArgs } from '@remix-run/node';
import { authenticator, login } from '~/services/auth.server';

// interface AuthFormData {
//   email: string;
//   password: string;
// }
export default function Index() {
  return <AuthForm />;
}

export async function action({ request }: ActionArgs) {
  const searchParams = new URL(request.url).searchParams;
  const authMode = searchParams.get('mode') || 'login';
  return await authenticator.authenticate('user-pass', request, {
    successRedirect: '/expenses',
    // failureRedirect: "/auth",
    context: { authMode },
  });
}

export const meta = () => ({
  title: 'New Auth',
});

export function links() {
  return [{ rel: 'stylesheet', href: authStyles }];
}
