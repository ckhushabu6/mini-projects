import { useEffect, useMemo, useReducer } from 'react';

import TransactionContext from './TransactionContext';

import {
  initialTransactionState,
  transactionReducer,
} from './transactionReducer';

import { TRANSACTION_ACTIONS } from './transactionActions';

import { storageService } from '../services/storage.service';

function TransactionProvider({ children }) {
  const [state, dispatch] = useReducer(
    transactionReducer,
    initialTransactionState
  );

  useEffect(() => {
    const storedTransactions =
      storageService.getTransactions();

    dispatch({
      type: TRANSACTION_ACTIONS.INITIALIZE_TRANSACTIONS,
      payload: storedTransactions,
    });
  }, []);

  useEffect(() => {
    storageService.saveTransactions(
      state.transactions
    );
  }, [state.transactions]);

  const addTransaction = transaction => {
    dispatch({
      type: TRANSACTION_ACTIONS.ADD_TRANSACTION,
      payload: transaction,
    });
  };

  const updateTransaction = transaction => {
    dispatch({
      type: TRANSACTION_ACTIONS.UPDATE_TRANSACTION,
      payload: transaction,
    });
  };

  const deleteTransaction = transactionId => {
    dispatch({
      type: TRANSACTION_ACTIONS.DELETE_TRANSACTION,
      payload: transactionId,
    });
  };

  const clearTransactions = () => {
    dispatch({
      type: TRANSACTION_ACTIONS.CLEAR_TRANSACTIONS,
    });
  };

  const value = useMemo(
    () => ({
      transactions: state.transactions,

      addTransaction,

      updateTransaction,

      deleteTransaction,

      clearTransactions,
    }),
    [state.transactions]
  );

  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  );
}

export default TransactionProvider;