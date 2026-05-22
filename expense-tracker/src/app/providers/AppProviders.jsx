import TransactionProvider from '../../context/TransactionProvider';

function AppProviders({ children }) {
  return (
    <TransactionProvider>
      {children}
    </TransactionProvider>
  );
}

export default AppProviders;