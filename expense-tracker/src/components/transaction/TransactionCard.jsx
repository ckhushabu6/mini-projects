import {
  FaArrowDown,
  FaArrowUp,
  FaTrash,
  FaEdit,
} from 'react-icons/fa';

import Card from '../common/Card/Card';

import formatCurrency from '../../utils/formatCurrency';

import formatDate from '../../utils/formatDate';

import styles from './TransactionCard.module.css';

function TransactionCard({
  transaction,
  onDelete,
  onEdit,
}) {
  const isIncome =
    transaction.type === 'income';

  return (
    <Card className={styles.card}>
      <div className={styles.left}>
        <div
          className={`${styles.iconWrapper} ${
            isIncome
              ? styles.income
              : styles.expense
          }`}
        >
          {isIncome ? (
            <FaArrowDown />
          ) : (
            <FaArrowUp />
          )}
        </div>

        <div>
          <h4 className={styles.title}>
            {transaction.title}
          </h4>

          <p className={styles.category}>
            {transaction.category}
          </p>

          {transaction.note && (
            <p className={styles.note}>
              {transaction.note}
            </p>
          )}
        </div>
      </div>

      <div className={styles.right}>
        <h4
          className={
            isIncome
              ? 'text-success'
              : 'text-danger'
          }
        >
          {isIncome ? '+' : '-'}
          {formatCurrency(
            transaction.amount
          )}
        </h4>

        <p className={styles.date}>
          {formatDate(
            transaction.date
          )}
        </p>

        <div className={styles.actions}>
          <button
            className={styles.editButton}
            onClick={() =>
              onEdit?.(transaction)
            }
          >
            <FaEdit />
          </button>

          <button
            className={
              styles.deleteButton
            }
            onClick={() =>
              onDelete?.(
                transaction.id
              )
            }
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </Card>
  );
}

export default TransactionCard;