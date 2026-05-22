import { useMemo, useState } from 'react';

import Header from '../../components/common/Header/Header';

import EmptyState from '../../components/common/EmptyState/EmptyState';

import ScreenContainer from '../../components/common/ScreenContainer/ScreenContainer';

import TransactionGroup from '../../components/transaction/TransactionGroup';

import useTransactions from '../../hooks/useTransactions';

import groupTransactions from '../../utils/groupTransactions';

import { categories } from '../../data/categories';

import styles from './Transactions.module.css';

function Transactions() {
  const {
    transactions,
    deleteTransaction,
  } = useTransactions();

  const [search, setSearch] =
    useState('');

  const [selectedCategory, setSelectedCategory] =
    useState('All');

  const filteredTransactions =
    useMemo(() => {
      return transactions.filter(
        (transaction) => {
          const matchesSearch =
            transaction.title
              .toLowerCase()
              .includes(
                search.toLowerCase()
              );

          const matchesCategory =
            selectedCategory ===
              'All' ||
            transaction.category ===
              selectedCategory;

          return (
            matchesSearch &&
            matchesCategory
          );
        }
      );
    }, [
      transactions,
      search,
      selectedCategory,
    ]);

  const groupedTransactions =
    groupTransactions(
      filteredTransactions
    );

  return (
    <ScreenContainer>
      <Header
        title="Transactions"
        subtitle="Manage your expenses"
      />

      <div className={styles.searchWrapper}>
        <input
          type="text"
          placeholder="Search transactions..."
          value={search}
          onChange={(event) =>
            setSearch(
              event.target.value
            )
          }
          className={
            styles.searchInput
          }
        />
      </div>

      <div className={styles.filters}>
        <button
          className={`${styles.filterButton} ${
            selectedCategory ===
            'All'
              ? styles.activeFilter
              : ''
          }`}
          onClick={() =>
            setSelectedCategory(
              'All'
            )
          }
        >
          All
        </button>

        {categories.map(
          (category) => (
            <button
              key={category.id}
              className={`${styles.filterButton} ${
                selectedCategory ===
                category.value
                  ? styles.activeFilter
                  : ''
              }`}
              onClick={() =>
                setSelectedCategory(
                  category.value
                )
              }
            >
              {category.label}
            </button>
          )
        )}
      </div>

      {filteredTransactions.length ===
      0 ? (
        <EmptyState
          title="No Transactions Found"
          description="Try changing search or filters."
        />
      ) : (
        <div className={styles.groups}>
          {Object.entries(
            groupedTransactions
          ).map(
            ([
              groupTitle,
              groupItems,
            ]) => (
              <TransactionGroup
                key={groupTitle}
                title={groupTitle}
                transactions={
                  groupItems
                }
                onDelete={
                  deleteTransaction
                }
              />
            )
          )}
        </div>
      )}
    </ScreenContainer>
  );
}

export default Transactions;