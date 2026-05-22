import TransactionList from './TransactionList';

import styles from './TransactionGroup.module.css';

function TransactionGroup({
  title,
  transactions,
  onDelete,
  onEdit,
}) {
  return (
    <section className={styles.group}>
      <h3 className={styles.title}>
        {title}
      </h3>

      <TransactionList
        transactions={transactions}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    </section>
  );
}

export default TransactionGroup;