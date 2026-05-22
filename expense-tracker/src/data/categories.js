import {
  FaUtensils,
  FaCar,
  FaHeartbeat,
  FaShoppingBag,
  FaGamepad,
  FaMoneyBillWave,
} from 'react-icons/fa';

import {
  MdHome,
  MdSchool,
} from 'react-icons/md';

export const categories = [
  {
    id: 1,
    label: 'Food',
    value: 'Food',
    icon: FaUtensils,
  },

  {
    id: 2,
    label: 'Transport',
    value: 'Transport',
    icon: FaCar,
  },

  {
    id: 3,
    label: 'Health',
    value: 'Health',
    icon: FaHeartbeat,
  },

  {
    id: 4,
    label: 'Shopping',
    value: 'Shopping',
    icon: FaShoppingBag,
  },

  {
    id: 5,
    label: 'Entertainment',
    value: 'Entertainment',
    icon: FaGamepad,
  },

  {
    id: 6,
    label: 'Bills',
    value: 'Bills',
    icon: MdHome,
  },

  {
    id: 7,
    label: 'Education',
    value: 'Education',
    icon: MdSchool,
  },

  {
    id: 8,
    label: 'Salary',
    value: 'Salary',
    icon: FaMoneyBillWave,
  },
];