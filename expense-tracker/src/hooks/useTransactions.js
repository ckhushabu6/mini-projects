import { useContext } from 'react';

import TransactionContext  from '../context/TransactionContext';

function useTransactions() {
  const context =
    useContext(TransactionContext);

  if (!context) {
    throw new Error(
      'useTransactions must be used within TransactionProvider'
    );
  }

  return context;
}

export default useTransactions;