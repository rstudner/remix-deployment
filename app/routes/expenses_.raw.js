// /expenses/raw

import { getExpenses } from '~/data/expenses.server';
import { getUserFromSession } from '~/services/auth.server';

export async function loader({ request }) {
  await getUserFromSession(request);
  return getExpenses();
}
