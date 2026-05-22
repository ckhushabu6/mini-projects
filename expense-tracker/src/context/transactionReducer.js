import { TRANSACTION_ACTIONS } from '../utils/constants';

export function transactionReducer(
  state,
  action
) {
  switch (action.type) {
    case TRANSACTION_ACTIONS.ADD_TRANSACTION:
      return [
        action.payload,
        ...state,
      ];

    case TRANSACTION_ACTIONS.UPDATE_TRANSACTION:
      return state.map((transaction) =>
        transaction.id === action.payload.id
          ? action.payload
          : transaction
      );

    case TRANSACTION_ACTIONS.DELETE_TRANSACTION:
      return state.filter(
        (transaction) =>
          transaction.id !== action.payload
      );

    default:
      return state;
  }
}