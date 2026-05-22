import { useMemo } from 'react';

import useTransactions from './useTransactions';

function useTransactionSelectors() {
  const { transactions } = useTransactions();

  const selectors = useMemo(() => {
    const totalIncome = transactions
      .filter(transaction => transaction.type === 'income')
      .reduce(
        (total, transaction) =>
          total + transaction.amount,
        0
      );

    const totalExpense = transactions
      .filter(transaction => transaction.type === 'expense')
      .reduce(
        (total, transaction) =>
          total + transaction.amount,
        0
      );

    const totalBalance =
      totalIncome - totalExpense;

    const expenseTransactions =
      transactions.filter(
        transaction => transaction.type === 'expense'
      );

    const incomeTransactions =
      transactions.filter(
        transaction => transaction.type === 'income'
      );

    return {
      totalIncome,

      totalExpense,

      totalBalance,

      expenseTransactions,

      incomeTransactions,
    };
  }, [transactions]);

  return selectors;
}

export default useTransactionSelectors;