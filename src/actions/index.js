import * as type from '../constants/ActionTypes';

export const toggleFilter = (filter) => ({ type: type.TOGGLE_FILTER, filter });
export const toggleActiveInvoice = (invoice) => ({ type: type.TOGGLE_INVOICE, invoice });
