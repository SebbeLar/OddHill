import React, { Component } from 'react';
import InvoiceHeader from '../../components/InvoiceHeader';
import InvoiceList from '../../components/InvoiceList';

class Invoice extends Component {
  render() {
    return (
      <div className="invoice-container">
        <InvoiceHeader />
        <InvoiceList />
      </div>
    );
  }
}

export default Invoice;
