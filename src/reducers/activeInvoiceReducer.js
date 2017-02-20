import { TOGGLE_INVOICE } from '../constants/ActionTypes';
const initialState = 0;

export default function activeInvoice(state = initialState, action) {
  switch (action.type) {
  case TOGGLE_INVOICE:
    return action.invoice;

  default:
    return state;
  }
}

