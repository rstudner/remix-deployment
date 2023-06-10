// /expenses/raw

import { getExpenses } from '~/data/expenses.server';
import { getUserIdFromSession } from '~/services/auth.server';

export async function loader({ request }) {
  await getUserIdFromSession(request);
  return getExpenses();
}
