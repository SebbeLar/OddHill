import React, { Component, PropTypes } from 'react';
import InvoiceHeader from '../../components/InvoiceHeader';
import InvoiceList from '../../components/InvoiceList';

class Invoice extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    invoices: PropTypes.array
  }
  render() {
    const { invoices } = this.props;
    return (
      <div className="invoice-container">
        <InvoiceHeader />
        <InvoiceList invoices={invoices}/>
      </div>
    );
  }
}

export default Invoice;
