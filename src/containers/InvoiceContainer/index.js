import React, { Component, PropTypes } from 'react';
import InvoiceHeader from '../../components/InvoiceHeader';
import InvoiceList from '../../components/InvoiceList';

class Invoice extends Component {
  constructor(props) {
    super(props);

    this.onInvoiceClick = this.onInvoiceClick.bind(this);
  }
  static propTypes = {
    invoices: PropTypes.array,
    actions: PropTypes.object,
    toggleActiveInvoice: PropTypes.func,
    activeInvoice: PropTypes.number
  }
  onInvoiceClick(invoice) {
    this.props.actions.toggleActiveInvoice(invoice);
  }
  render() {
    const { invoices, actions, activeInvoice } = this.props;
    return (
      <div className="invoice-container">
        <InvoiceHeader />
        <InvoiceList invoices={invoices}
          actions={actions}
          onInvoiceClick={this.onInvoiceClick}
          activeInvoice={activeInvoice}/>
      </div>
    );
  }
}

export default Invoice;
