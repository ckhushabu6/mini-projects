export function getExpenseTransactions(
  transactions
) {
  return transactions.filter(
    (transaction) =>
      transaction.type === 'expense'
  );
}

export function getCategoryTotals(
  transactions
) {
  const expenseTransactions =
    getExpenseTransactions(
      transactions
    );

  const categoryMap = {};

  expenseTransactions.forEach(
    (transaction) => {
      if (
        categoryMap[transaction.category]
      ) {
        categoryMap[
          transaction.category
        ] += transaction.amount;
      } else {
        categoryMap[
          transaction.category
        ] = transaction.amount;
      }
    }
  );

  return Object.entries(categoryMap).map(
    ([category, amount]) => ({
      category,
      amount,
    })
  );
}

export function getTotalExpenses(
  transactions
) {
  return getExpenseTransactions(
    transactions
  ).reduce(
    (sum, transaction) =>
      sum + transaction.amount,
    0
  );
}

export function getCategoryPercentages(
  transactions
) {
  const totalExpenses =
    getTotalExpenses(transactions);

  const categoryTotals =
    getCategoryTotals(transactions);

  return categoryTotals.map(
    (item) => ({
      ...item,

      percentage:
        totalExpenses > 0
          ? Math.round(
              (item.amount /
                totalExpenses) *
                100
            )
          : 0,
    })
  );
}

export function getMonthlyTrendData(
  transactions
) {
  const monthlyData = {};

  transactions.forEach(
    (transaction) => {
      const date = new Date(
        transaction.date
      );

      const month =
        date.toLocaleDateString(
          'en-IN',
          {
            month: 'short',
          }
        );

      if (!monthlyData[month]) {
        monthlyData[month] = 0;
      }

      if (
        transaction.type === 'expense'
      ) {
        monthlyData[month] +=
          transaction.amount;
      }
    }
  );

  return Object.entries(monthlyData).map(
    ([month, amount]) => ({
      month,
      amount,
    })
  );
}