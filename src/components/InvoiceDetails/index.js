import React, { PropTypes } from 'react';
import InvoiceDetailsMain from './InvoiceDetailsMain';

const InvoiceDetails = (props) => {
  const { invoices, activeInvoice } = props;
  const invoice = invoices.filter((invoice) => {
    return invoice.id === activeInvoice;
  });
  const close = props.actions.toggleActiveInvoice;
  return (
    <div className="details-invoiceDetails">
      <img src="/static/svg/header.png"
           srcSet="/static/svg/header@2x.png, /static/svg/header@3x.png"
           className="details-invoiceDetails-header"/>
      <InvoiceDetailsMain invoice={invoice[0]}/>
      <img src="/static/svg/close.svg" className="details-closeButton" onClick={() => close(0)} />
    </div>
  );
};

InvoiceDetails.propTypes = {
  invoices: PropTypes.array,
  invoice: PropTypes.array,
  activeInvoice: PropTypes.number
};

export default InvoiceDetails;
