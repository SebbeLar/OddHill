import React, { PropTypes } from 'react';

const InvoiceDetailsMain = (props) => {
  const { type, account, status, currency, balance, notes } = props.invoice;
  return (
    <div className="details-invoiceDetails-main">
      <h4>{account}</h4>
      <div className="details-invoiceDetails-main-info">
        <h6>TYPE</h6>
        <h6>ACCOUNT NAME</h6>
        <span>{type}</span>
        <span>{account}</span>
        <h6>STATUS</h6>
        <h6>CURRENCY</h6>
        <span>{status}</span>
        <span>{currency}</span>
        <h6>BALANCE</h6>
        <h6>NOTES</h6>
        <span>{balance}</span>
        <span>{notes}</span>
      </div>
    </div>
  );
};

InvoiceDetailsMain.propTypes = {
  type: PropTypes.string,
  account: PropTypes.string,
  status: PropTypes.string,
  currency: PropTypes.string,
  balance: PropTypes.string,
  notes: PropTypes.string
};

export default InvoiceDetailsMain;
