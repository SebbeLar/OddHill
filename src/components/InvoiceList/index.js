import React from 'react';
import InvoiceListSortHeader from './InvoiceListSortHeader';
import InvoiceListItem from './InvoiceListItem';

const InvoiceList = () => {
  return (
    <div className="invoice-list-container">
      <h5>Invoices</h5>
      <InvoiceListSortHeader />
      <ul className="invoice-list-item-wrapper">
        <InvoiceListItem account="1234567****-WOLFE" />
        <InvoiceListItem account="1234567****-MAENGUNE" />
      </ul>
    </div>
  );
};

export default InvoiceList;
