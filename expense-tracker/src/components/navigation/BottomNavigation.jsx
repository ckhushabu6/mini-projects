import {
  HiHome,
  HiOutlineHome,
  HiChartPie,
  HiOutlineChartPie,
} from 'react-icons/hi';

import {
  MdAddCircle,
  MdOutlineAddCircle,
} from 'react-icons/md';

import {
  RiExchangeDollarLine,
  RiExchangeDollarFill,
} from 'react-icons/ri';

import { NavLink } from 'react-router-dom';

import styles from './BottomNavigation.module.css';

function BottomNavigation() {
  const navItems = [
    {
      path: '/',
      label: 'Home',
      activeIcon: <HiHome />,
      inactiveIcon: <HiOutlineHome />,
    },

    {
      path: '/transactions',
      label: 'Transactions',
      activeIcon: <RiExchangeDollarFill />,
      inactiveIcon: <RiExchangeDollarLine />,
    },

    {
      path: '/add-transaction',
      label: 'Add',
      activeIcon: <MdAddCircle />,
      inactiveIcon: <MdOutlineAddCircle />,
    },

    {
      path: '/analytics',
      label: 'Analytics',
      activeIcon: <HiChartPie />,
      inactiveIcon: <HiOutlineChartPie />,
    },
  ];

  return (
    <nav className={styles.navigation}>
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            isActive
              ? `${styles.navItem} ${styles.active}`
              : styles.navItem
          }
        >
          {({ isActive }) => (
            <>
              <span className={styles.icon}>
                {isActive
                  ? item.activeIcon
                  : item.inactiveIcon}
              </span>

              <span className={styles.label}>
                {item.label}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}

export default BottomNavigation;