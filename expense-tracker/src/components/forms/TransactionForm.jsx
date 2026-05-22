import { useState } from 'react';

import Button from '../common/Button/Button';

import AmountInput from './AmountInput';

import CategoryGrid from './CategoryGrid';

import styles from './TransactionForm.module.css';

function TransactionForm({
  onSubmit,
}) {
  const [formData, setFormData] =
    useState({
      title: '',
      amount: '',
      type: 'expense',
      category: '',
      note: '',
      date: new Date()
        .toISOString()
        .split('T')[0],
    });

  const [errors, setErrors] =
    useState({});

  const handleChange = (
    field,
    value
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title =
        'Title is required';
    }

    if (!formData.amount) {
      newErrors.amount =
        'Amount is required';
    }

    if (!formData.category) {
      newErrors.category =
        'Select a category';
    }

    setErrors(newErrors);

    return (
      Object.keys(newErrors)
        .length === 0
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    onSubmit({
      ...formData,
      amount: Number(
        formData.amount
      ),
    });

    setFormData({
      title: '',
      amount: '',
      type: 'expense',
      category: '',
      note: '',
      date: new Date()
        .toISOString()
        .split('T')[0],
    });
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <div className={styles.typeToggle}>
        <button
          type="button"
          className={`${styles.toggleButton} ${
            formData.type ===
            'income'
              ? styles.activeIncome
              : ''
          }`}
          onClick={() =>
            handleChange(
              'type',
              'income'
            )
          }
        >
          Income
        </button>

        <button
          type="button"
          className={`${styles.toggleButton} ${
            formData.type ===
            'expense'
              ? styles.activeExpense
              : ''
          }`}
          onClick={() =>
            handleChange(
              'type',
              'expense'
            )
          }
        >
          Expense
        </button>
      </div>

      <div>
        <AmountInput
          value={formData.amount}
          onChange={(event) =>
            handleChange(
              'amount',
              event.target.value
            )
          }
        />

        {errors.amount && (
          <p className={styles.error}>
            {errors.amount}
          </p>
        )}
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>
          Title
        </label>

        <input
          type="text"
          placeholder="Enter title"
          value={formData.title}
          onChange={(event) =>
            handleChange(
              'title',
              event.target.value
            )
          }
          className={styles.input}
        />

        {errors.title && (
          <p className={styles.error}>
            {errors.title}
          </p>
        )}
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>
          Date
        </label>

        <input
          type="date"
          value={formData.date}
          onChange={(event) =>
            handleChange(
              'date',
              event.target.value
            )
          }
          className={styles.input}
        />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>
          Category
        </label>

        <CategoryGrid
          selectedCategory={
            formData.category
          }
          onSelect={(category) =>
            handleChange(
              'category',
              category
            )
          }
        />

        {errors.category && (
          <p className={styles.error}>
            {errors.category}
          </p>
        )}
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>
          Notes
        </label>

        <textarea
          placeholder="Add notes..."
          value={formData.note}
          onChange={(event) =>
            handleChange(
              'note',
              event.target.value
            )
          }
          className={styles.textarea}
        />
      </div>

      <Button
        type="submit"
        fullWidth
      >
        Save Transaction
      </Button>
    </form>
  );
}

export default TransactionForm;