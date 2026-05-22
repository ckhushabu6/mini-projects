import Header from '../../components/common/Header/Header';

import Card from '../../components/common/Card/Card';

import EmptyState from '../../components/common/EmptyState/EmptyState';

import ScreenContainer from '../../components/common/ScreenContainer/ScreenContainer';

import DonutChart from '../../components/analytics/DonutChart';

import TrendChart from '../../components/analytics/TrendChart';

import useAnalytics from '../../hooks/useAnalytics';

import formatCurrency from '../../utils/formatCurrency';

import styles from './Analytics.module.css';

function Analytics() {
  const {
    totalExpenses,
    categoryData,
    trendData,
  } = useAnalytics();

  const hasAnalytics =
    categoryData.length > 0;

  return (
    <ScreenContainer>
      <Header
        title="Analytics"
        subtitle="Understand your spending"
      />

      {!hasAnalytics ? (
        <EmptyState
          title="No Analytics Available"
          description="Add expense transactions to view analytics."
        />
      ) : (
        <>
          <div className={styles.statsGrid}>
            <Card
              className={
                styles.statCard
              }
            >
              <p>Total Expenses</p>

              <h2
                className={`${styles.statValue} text-danger`}
              >
                {formatCurrency(
                  totalExpenses
                )}
              </h2>
            </Card>

            <Card
              className={
                styles.statCard
              }
            >
              <p>Categories</p>

              <h2
                className={
                  styles.statValue
                }
              >
                {categoryData.length}
              </h2>
            </Card>
          </div>

          <section
            className={styles.section}
          >
            <h3
              className={
                styles.sectionTitle
              }
            >
              Expense Breakdown
            </h3>

            <Card>
              <DonutChart
                data={categoryData}
              />
            </Card>
          </section>

          <section
            className={styles.section}
          >
            <h3
              className={
                styles.sectionTitle
              }
            >
              Monthly Trend
            </h3>

            <Card>
              <TrendChart
                data={trendData}
              />
            </Card>
          </section>

          <section
            className={styles.section}
          >
            <h3
              className={
                styles.sectionTitle
              }
            >
              Category Breakdown
            </h3>

            <div
              className={
                styles.breakdownList
              }
            >
              {categoryData.map(
                (item) => (
                  <div
                    key={item.category}
                    className={
                      styles.breakdownItem
                    }
                  >
                    <div
                      className={
                        styles.breakdownLeft
                      }
                    >
                      <h4
                        className={
                          styles.categoryName
                        }
                      >
                        {item.category}
                      </h4>

                      <p
                        className={
                          styles.categoryPercentage
                        }
                      >
                        {
                          item.percentage
                        }
                        % of expenses
                      </p>
                    </div>

                    <h4>
                      {formatCurrency(
                        item.amount
                      )}
                    </h4>
                  </div>
                )
              )}
            </div>
          </section>
        </>
      )}
    </ScreenContainer>
  );
}

export default Analytics;