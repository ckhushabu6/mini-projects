const STORAGE_KEY = 'expense-tracker-transactions';

export const storageService = {
  getTransactions() {
    try {
      const transactions = localStorage.getItem(STORAGE_KEY);

      return transactions ? JSON.parse(transactions) : [];
    } catch (error) {
      console.error('Failed to get transactions:', error);

      return [];
    }
  },

  saveTransactions(transactions) {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(transactions)
      );
    } catch (error) {
      console.error('Failed to save transactions:', error);
    }
  },

  clearTransactions() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Failed to clear transactions:', error);
    }
  },
};