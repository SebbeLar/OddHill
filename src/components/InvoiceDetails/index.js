import React, { PropTypes } from 'react';
import InvoiceDetailsMain from './InvoiceDetailsMain';

const InvoiceDetails = (props) => {
  const { invoices } = props;
  return (
    <div className="details-invoiceDetails">
      <img src="/static/svg/header.png"
           srcSet="/static/svg/header@2x.png, /static/svg/header@3x.png"
           className="details-invoiceDetails-header"/>
      <InvoiceDetailsMain invoices={invoices}/>
    </div>
  );
};

InvoiceDetails.propTypes = {
  invoices: PropTypes.array
};

export default InvoiceDetails;
