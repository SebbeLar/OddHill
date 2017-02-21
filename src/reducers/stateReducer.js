import { TOGGLE_FILTER } from '../constants/ActionTypes';
import initialState from '../static/data/dummyData';

export default function invoices(state = initialState, action) {
  switch (action.type) {

  case TOGGLE_FILTER:
    const newState = state.slice();
    if(action.filter === 'currency') {
      return newState;
    }
    if(action.filter !== 'balance') {
      newState.sort((a, b) => {
        if(a[action.filter] < b[action.filter]) {
          return -1;
        }
        if(a[action.filter] > b[action.filter]) {
          return 1;
        }
        return 0;
      });
    } else {
      newState.sort((a, b) => {
        const invoiceA = parseFloat(a[action.filter].substring(1).replace(',', ''));
        const invoiceB = parseFloat(b[action.filter].substring(1).replace(',', ''));
        return invoiceA - invoiceB;
      });
    }
    if(state[0][action.filter] === newState[0][action.filter]) {
      return newState.reverse();
    }
    return newState;

  default:
    return state;
  }
}

