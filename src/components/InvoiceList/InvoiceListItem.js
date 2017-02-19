import React, { PropTypes } from 'react';

const InvoiceListItem = (props) => {
  const { type, account, status, currency, balance } = props.invoice;
  const { onInvoiceClick } = props;
  return (
    <li className="invoice-list-item" onClick={() => onInvoiceClick(account)}>
      <span>{type}</span>
      <span id="just">{account}</span>
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
  onInvoiceClick: PropTypes.func
};

export default InvoiceListItem;
