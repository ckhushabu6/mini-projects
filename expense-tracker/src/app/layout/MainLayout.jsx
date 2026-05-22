import { Outlet } from 'react-router-dom';

import BottomNavigation from '../../components/navigation/BottomNavigation';

import styles from './MainLayout.module.css';

function MainLayout() {
  return (
    <div className={styles.layout}>
      <main className={styles.main}>
        <Outlet />
      </main>

      <BottomNavigation />
    </div>
  );
}

export default MainLayout;