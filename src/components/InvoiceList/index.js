import React, { PropTypes } from 'react';
import InvoiceListSortHeader from './InvoiceListSortHeader';
import InvoiceListItem from './InvoiceListItem';

const InvoiceList = (props) => {
  const { invoices, actions, onInvoiceClick } = props;
  const invoiceListItems = invoices.map((invoice, index) => {
    return (
      <InvoiceListItem invoice={invoice} key={index} onInvoiceClick={onInvoiceClick}/>
    );
  });

  return (
    <div className="invoice-list-container">
      <h5>Invoices</h5>
      <InvoiceListSortHeader actions={actions} />
      <ul className="invoice-list-item-wrapper">
        {invoiceListItems}
      </ul>
    </div>
  );
};

InvoiceList.propTypes = {
  invoices: PropTypes.array,
  invoice: PropTypes.object,
  actions: PropTypes.object,
  onInvoiceClick: PropTypes.func
};

export default InvoiceList;
