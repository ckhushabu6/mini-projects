import formatDate from './formatDate';

function groupTransactions(
  transactions = []
) {
  return transactions.reduce(
    (groups, transaction) => {
      const dateGroup = formatDate(
        transaction.date
      );

      if (!groups[dateGroup]) {
        groups[dateGroup] = [];
      }

      groups[dateGroup].push(
        transaction
      );

      return groups;
    },
    {}
  );
}

export default groupTransactions;