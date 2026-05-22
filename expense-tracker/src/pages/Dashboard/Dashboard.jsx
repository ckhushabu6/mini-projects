import { useNavigate } from 'react-router-dom';

import Header from '../../components/common/Header/Header';

import Card from '../../components/common/Card/Card';

import Button from '../../components/common/Button/Button';

import EmptyState from '../../components/common/EmptyState/EmptyState';

import ScreenContainer from '../../components/common/ScreenContainer/ScreenContainer';

import TransactionList from '../../components/transaction/TransactionList';

import useTransactions from '../../hooks/useTransactions';

import formatCurrency from '../../utils/formatCurrency';

import styles from './Dashboard.module.css';

function Dashboard() {
  const navigate = useNavigate();

  const { totals, transactions } =
    useTransactions();

  const recentTransactions =
    transactions.slice(0, 5);

  return (
    <ScreenContainer>
      <Header
        title="Dashboard"
        subtitle="Track your financial activity"
      />

      <Card
        className={styles.balanceCard}
      >
        <p className={styles.balanceTitle}>
          Total Balance
        </p>

        <h1
          className={styles.balanceAmount}
        >
          {formatCurrency(
            totals.balance
          )}
        </h1>

        <p className={styles.balanceFooter}>
          Updated in real-time
        </p>
      </Card>

      <div className={styles.summaryGrid}>
        <Card>
          <p>Income</p>

          <h3
            className={`${styles.summaryAmount} text-success`}
          >
            {formatCurrency(
              totals.income
            )}
          </h3>
        </Card>

        <Card>
          <p>Expense</p>

          <h3
            className={`${styles.summaryAmount} text-danger`}
          >
            {formatCurrency(
              totals.expense
            )}
          </h3>
        </Card>
      </div>

      <Card
        className={
          styles.analyticsBanner
        }
      >
        <h3
          className={
            styles.analyticsTitle
          }
        >
          Spend Analytics
        </h3>

        <p className={styles.analyticsText}>
          Analyze your spending trends
          and understand where your
          money goes every month.
        </p>

        <Button
          onClick={() =>
            navigate('/analytics')
          }
        >
          View Analytics
        </Button>
      </Card>

      <section>
        <div
          className={
            styles.sectionHeader
          }
        >
          <h3
            className={
              styles.sectionTitle
            }
          >
            Recent Transactions
          </h3>

          <Button
            variant="outline"
            onClick={() =>
              navigate(
                '/transactions'
              )
            }
          >
            View All
          </Button>
        </div>

        {recentTransactions.length ===
        0 ? (
          <EmptyState
            title="No Transactions Yet"
            description="Start by adding your first transaction."
          />
        ) : (
          <TransactionList
            transactions={
              recentTransactions
            }
          />
        )}
      </section>
    </ScreenContainer>
  );
}

export default Dashboard;