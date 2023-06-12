import { prisma } from './database.server';

interface ExpenseData {
  title: string
  amount: string
  date: string
}

export async function addExpense(expenseData: ExpenseData, userId: string) {
  try {
    return await prisma.expense.create({
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date),
        User: { connect: { id: userId } },
      },
    });
  } catch (error) {
    throw new Error('Failed to get expenses');
  }
}

export async function getExpenses(userId:string) {
  try {
    return await prisma.expense.findMany({
      where: { userId },
      orderBy: { date: 'desc' },
    });
  } catch (error) {
    throw new Error('Failed to get expense');
  }
}

export async function updateExpense(id: string, expenseData: ExpenseData) {
  try {
    return await prisma.expense.update({
      where: { id },
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date),
      },
    });
  } catch (error) {
    throw new Error('Failed to update expense');
  }
}

export async function deleteExpense(id:string) {
  try {
    return await prisma.expense.delete({
      where: { id },
    });
  } catch (error) {
    throw new Error('Failed to delete expense');
  }
}

export async function getExpense(userId:string) {
  if (!userId) {
    throw new Error('Failed to get expenses.');
  }
  try {
    return await prisma.expense.findFirst({ where: { id: userId } });
  } catch (error) {
    throw new Error('Failed to get expenses.');
  }
}
