import React, { PropTypes } from 'react';

const InvoiceListItem = (props) => {
  const { type, account, status, currency, balance, id } = props.invoice;
  const { onInvoiceClick, activeInvoice } = props;
  const classes = id === activeInvoice ? "invoice-list-item checked" : "invoice-list-item"

  return (
    <li className={classes} onClick={() => onInvoiceClick(id)}>
      <span>{type}</span>
      <span>{account}</span>
      <span>{status}</span>
      <span>{currency}</span>
      <span>{balance}</span>
    </li>
  );
};

InvoiceListItem.propTypes = {
  props: PropTypes.object,
  invoice: PropTypes.object,
  type: PropTypes.string,
  account: PropTypes.string,
  status: PropTypes.string,
  currency: PropTypes.string,
  balance: PropTypes.string,
  id: PropTypes.number,
  onInvoiceClick: PropTypes.func,
  activeInvoice: PropTypes.number
};

export default InvoiceListItem;
