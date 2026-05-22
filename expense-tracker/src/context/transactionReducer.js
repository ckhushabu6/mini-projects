import { TRANSACTION_ACTIONS } from './transactionActions';

export const initialTransactionState = {
  transactions: [],
};

export const transactionReducer = (state, action) => {
  switch (action.type) {
    case TRANSACTION_ACTIONS.INITIALIZE_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };

    case TRANSACTION_ACTIONS.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    case TRANSACTION_ACTIONS.UPDATE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.map(transaction =>
          transaction.id === action.payload.id
            ? action.payload
            : transaction
        ),
      };

    case TRANSACTION_ACTIONS.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction.id !== action.payload
        ),
      };

    case TRANSACTION_ACTIONS.CLEAR_TRANSACTIONS:
      return {
        ...state,
        transactions: [],
      };

    default:
      return state;
  }
};