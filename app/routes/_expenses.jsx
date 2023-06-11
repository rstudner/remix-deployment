import { Outlet } from '@remix-run/react';
import ExpensesHeader from '~/components/navigation/ExpensesHeader';
import expensesStyles from '~/styles/expenses.css';
import { authenticator } from '../services/auth.server';

export default function ExpensesLayout() {
  return (
    <>
      <ExpensesHeader />
      <Outlet />
    </>
  );
}

export async function loader({ request }) {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: '/auth',
  });
}

export function links() {
  return [{ rel: 'stylesheet', href: expensesStyles }];
}

export function headers() {
  return {
    'Cache-Control': 'max-age-3600', // 60 minutes
  };
}
