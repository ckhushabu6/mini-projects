import { v4 as uuidv4 } from 'uuid';

export const seedTransactions = [
  {
    id: uuidv4(),

    type: 'expense',

    amount: 450,

    category: 'Food',

    note: 'Burger and coffee',

    date: '2026-05-21',

    createdAt: Date.now(),
  },

  {
    id: uuidv4(),

    type: 'income',

    amount: 50000,

    category: 'Salary',

    note: 'Monthly salary',

    date: '2026-05-20',

    createdAt: Date.now(),
  },
];