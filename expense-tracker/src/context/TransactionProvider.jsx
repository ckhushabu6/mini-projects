import {
  useEffect,
  useMemo,
  useReducer,
} from 'react';

import { v4 as uuidv4 } from 'uuid';

import TransactionContext from './TransactionContext';

import { transactionReducer } from './transactionReducer';

import useLocalStorage from '../hooks/useLocalStorage';

import {
  LOCAL_STORAGE_KEYS,
  TRANSACTION_ACTIONS,
} from '../utils/constants';

const initialDummyData = [
  {
    id: uuidv4(),
    title: 'Salary',
    amount: 50000,
    type: 'income',
    category: 'Salary',
    date: new Date().toISOString(),
    note: 'Monthly salary',
  },

  {
    id: uuidv4(),
    title: 'Groceries',
    amount: 2500,
    type: 'expense',
    category: 'Food',
    date: new Date().toISOString(),
    note: 'Weekly grocery shopping',
  },
];

function TransactionProvider({
  children,
}) {
  const [
    persistedTransactions,
    setPersistedTransactions,
  ] = useLocalStorage(
    LOCAL_STORAGE_KEYS.TRANSACTIONS,
    initialDummyData
  );

  const [transactions, dispatch] =
    useReducer(
      transactionReducer,
      persistedTransactions
    );

  useEffect(() => {
    setPersistedTransactions(
      transactions
    );
  }, [
    transactions,
    setPersistedTransactions,
  ]);

  const addTransaction = (
    transactionData
  ) => {
    const newTransaction = {
      id: uuidv4(),
      ...transactionData,
    };

    dispatch({
      type:
        TRANSACTION_ACTIONS.ADD_TRANSACTION,
      payload: newTransaction,
    });
  };

  const updateTransaction = (
    updatedTransaction
  ) => {
    dispatch({
      type:
        TRANSACTION_ACTIONS.UPDATE_TRANSACTION,
      payload: updatedTransaction,
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type:
        TRANSACTION_ACTIONS.DELETE_TRANSACTION,
      payload: id,
    });
  };

  const totals = useMemo(() => {
    const income = transactions
      .filter(
        (transaction) =>
          transaction.type === 'income'
      )
      .reduce(
        (sum, transaction) =>
          sum + transaction.amount,
        0
      );

    const expense = transactions
      .filter(
        (transaction) =>
          transaction.type === 'expense'
      )
      .reduce(
        (sum, transaction) =>
          sum + transaction.amount,
        0
      );

    return {
      income,
      expense,
      balance: income - expense,
    };
  }, [transactions]);

  const value = {
    transactions,
    totals,

    addTransaction,
    updateTransaction,
    deleteTransaction,
  };

  return (
    <TransactionContext.Provider
      value={value}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export default TransactionProvider;