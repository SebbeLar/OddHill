import { combineReducers } from 'redux';
import invoices from './stateReducer';
import activeInvoice from './activeInvoiceReducer';

const rootReducer = combineReducers({
  invoices,
  activeInvoice
});

export default rootReducer;
