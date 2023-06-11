// /expenses/raw

import { getExpenses } from '~/data/expenses.server';
import { authenticator } from '../services/auth.server';

export async function loader({ request }) {
  await authenticator.isAuthenticated(request, {
    failureRedirect: '/auth',
  });
  return getExpenses();
}
