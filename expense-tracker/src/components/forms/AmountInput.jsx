import styles from './TransactionForm.module.css';

function AmountInput({
  value,
  onChange,
}) {
  return (
    <div className={styles.amountWrapper}>
      <span className={styles.currency}>
        ₹
      </span>

      <input
        type="number"
        placeholder="0"
        value={value}
        onChange={onChange}
        className={styles.amountInput}
      />
    </div>
  );
}

export default AmountInput;