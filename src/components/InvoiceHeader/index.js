import React from 'react';
import Filter from './filter';

const InvoiceHeader = () => {
  return (
    <div className="invoice-header">
      <h3>All invoices - 2016</h3>
      <Filter />
    </div>
  );
};

export default InvoiceHeader;
