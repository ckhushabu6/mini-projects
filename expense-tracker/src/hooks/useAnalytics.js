import useTransactions from './useTransactions';

import {
  getCategoryPercentages,
  getMonthlyTrendData,
  getTotalExpenses,
} from '../utils/analyticsHelpers';

function useAnalytics() {
  const { transactions } =
    useTransactions();

  const totalExpenses =
    getTotalExpenses(
      transactions
    );

  const categoryData =
    getCategoryPercentages(
      transactions
    );

  const trendData =
    getMonthlyTrendData(
      transactions
    );

  return {
    totalExpenses,
    categoryData,
    trendData,
  };
}

export default useAnalytics;