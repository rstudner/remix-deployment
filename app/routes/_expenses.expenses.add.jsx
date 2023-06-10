import { useNavigate } from '@remix-run/react';

import ExpenseForm from '~/components/expenses/ExpenseForm';
import Modal from '~/components/util/Modal';
import { addExpense } from '~/data/expenses.server';
import { redirect } from '@remix-run/node';
import { validateExpenseInput } from '~/data/validation.server';
import { getUserIdFromSession } from '~/services/auth.server';

export default function AddExpensePage() {
  const navigate = useNavigate();

  function closeHandler() {
    //navigate programmatically
    navigate('..');
  }

  return (
    <Modal onClose={closeHandler}>
      <ExpenseForm />
    </Modal>
  );
}

export async function action({ request }) {
  const userId = await getUserIdFromSession(request);
  const formData = await request.formData();
  const expenseData = Object.fromEntries(formData);

  try {
    validateExpenseInput(expenseData);
  } catch (error) {
    return error; // this is a response
  }

  await addExpense(expenseData, userId);
  return redirect('/expenses'); // this is a response
}

export function headers({ parentHeaders }) {
  return {
    'Cache-Control': parentHeaders.get('Cache-Control'),
  };
}
