import { useNavigate } from 'react-router-dom';

import Header from '../../components/common/Header/Header';

import ScreenContainer from '../../components/common/ScreenContainer/ScreenContainer';

import TransactionForm from '../../components/forms/TransactionForm';

import useTransactions from '../../hooks/useTransactions';

function AddTransaction() {
  const navigate = useNavigate();

  const { addTransaction } =
    useTransactions();

  const handleAddTransaction = (
    transactionData
  ) => {
    addTransaction(transactionData);

    navigate('/');
  };

  return (
    <ScreenContainer>
      <Header
        title="Add Transaction"
        subtitle="Track your money flow"
      />

      <TransactionForm
        onSubmit={
          handleAddTransaction
        }
      />
    </ScreenContainer>
  );
}

export default AddTransaction;