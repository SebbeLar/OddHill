import React, { PropTypes } from 'react';
import InvoiceListSortHeader from './InvoiceListSortHeader';
import InvoiceListItem from './InvoiceListItem';

const InvoiceList = (props) => {
  console.log('InoiceList: ' + props);
  const { invoices } = props;
  const invoiceListItems = invoices.map((invoice, index) => {
    return (
      <InvoiceListItem invoice={invoice} key={index} />
    );
  });

  return (
    <div className="invoice-list-container">
      <h5>Invoices</h5>
      <InvoiceListSortHeader />
      <ul className="invoice-list-item-wrapper">
        {invoiceListItems}
      </ul>
    </div>
  );
};

InvoiceList.propTypes = {
  invoices: PropTypes.array,
  invoice: PropTypes.object
};

export default InvoiceList;
