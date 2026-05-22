import Header from '../../components/common/Header/Header';

import Card from '../../components/common/Card/Card';

import Button from '../../components/common/Button/Button';

import ScreenContainer from '../../components/common/ScreenContainer/ScreenContainer';

function Dashboard() {
  return (
    <ScreenContainer>
      <Header
        title="Expense Tracker"
        subtitle="Track your finances easily"
      />

      <Card>
        <h3>Total Balance</h3>

        <h1 className="mt-3">
          ₹24,500
        </h1>

        <p className="mt-2">
          Updated just now
        </p>
      </Card>

      <Button fullWidth>
        Add Transaction
      </Button>
    </ScreenContainer>
  );
}

export default Dashboard;