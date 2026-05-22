import { NavLink } from 'react-router-dom';

import {
  FaHome,
  FaChartPie,
  FaPlus,
  FaList,
} from 'react-icons/fa';

import styles from './BottomNavigation.module.css';

function BottomNavigation() {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `${styles.link} ${
            isActive
              ? styles.active
              : ''
          }`
        }
      >
        <FaHome />
      </NavLink>

      <NavLink
        to="/transactions"
        className={({ isActive }) =>
          `${styles.link} ${
            isActive
              ? styles.active
              : ''
          }`
        }
      >
        <FaList />
      </NavLink>

      <NavLink
        to="/add"
        className={({ isActive }) =>
          `${styles.link} ${
            isActive
              ? styles.active
              : ''
          }`
        }
      >
        <FaPlus />
      </NavLink>

      <NavLink
        to="/analytics"
        className={({ isActive }) =>
          `${styles.link} ${
            isActive
              ? styles.active
              : ''
          }`
        }
      >
        <FaChartPie />
      </NavLink>
    </nav>
  );
}

export default BottomNavigation;