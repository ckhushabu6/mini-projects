function formatDate(date) {
  const transactionDate = new Date(date);

  const today = new Date();

  const yesterday = new Date();

  yesterday.setDate(
    today.getDate() - 1
  );

  const isToday =
    transactionDate.toDateString() ===
    today.toDateString();

  const isYesterday =
    transactionDate.toDateString() ===
    yesterday.toDateString();

  if (isToday) {
    return 'Today';
  }

  if (isYesterday) {
    return 'Yesterday';
  }

  return transactionDate.toLocaleDateString(
    'en-IN',
    {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }
  );
}

export default formatDate;