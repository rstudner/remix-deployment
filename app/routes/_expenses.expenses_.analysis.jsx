//expenses/analysis
import ExpenseStatistics from '~/components/expenses/ExpenseStatistics';
import Chart from '~/components/expenses/Chart';
import { getExpenses } from '~/data/expenses.server';
import { useLoaderData } from '@remix-run/react';
import { authenticator } from '../services/auth.server';

export default function ExpensesAnalysisPage() {
  const expenses = useLoaderData();

  return (
    <main>
      <Chart expenses={expenses} />
      <ExpenseStatistics expenses={expenses} />
    </main>
  );
}

export async function loader({ request }) {
  let user = await authenticator.isAuthenticated(request, {
    failureRedirect: '/auth',
  });
  const userId = user?.id;
  return await getExpenses(userId);
}

export function headers({ parentHeaders }) {
  return {
    'Cache-Control': parentHeaders.get('Cache-Control'),
  };
}
