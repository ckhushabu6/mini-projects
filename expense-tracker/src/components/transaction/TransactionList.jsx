import TransactionCard from './TransactionCard';

import styles from './TransactionList.module.css';

function TransactionList({
  transactions,
  onDelete,
  onEdit,
}) {
  return (
    <div className={styles.list}>
      {transactions.map(
        (transaction) => (
          <TransactionCard
            key={transaction.id}
            transaction={transaction}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        )
      )}
    </div>
  );
}

export default TransactionList;