import { combineReducers } from 'redux';
import invoices from './stateReducer';

const rootReducer = combineReducers({
  invoices
});

export default rootReducer;
