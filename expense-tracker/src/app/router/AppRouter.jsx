import {
  Routes,
  Route,
} from 'react-router-dom';

import MainLayout from '../layout/MainLayout';

import Dashboard from '../../pages/Dashboard/Dashboard';

import Transactions from '../../pages/Transactions/Transactions';

import AddTransaction from '../../pages/AddTransaction/AddTransaction';

import Analytics from '../../pages/Analytics/Analytics';

function AppRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={<MainLayout />}
      >
        <Route
          index
          element={<Dashboard />}
        />

        <Route
          path="transactions"
          element={<Transactions />}
        />

        <Route
          path="add"
          element={<AddTransaction />}
        />

        <Route
          path="analytics"
          element={<Analytics />}
        />
      </Route>
    </Routes>
  );
}

export default AppRouter;