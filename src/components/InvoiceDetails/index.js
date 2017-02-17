import React from 'react';
import InvoiceDetailsMain from './InvoiceDetailsMain';

const InvoiceDetails = () => {
  return (
    <div className="details-invoiceDetails">
      <img src="/static/svg/header.png"
           srcSet="/static/svg/header@2x.png, /static/svg/header@3x.png"
           className="details-invoiceDetails-header"/>
      <InvoiceDetailsMain />
    </div>
  );
};

export default InvoiceDetails;
