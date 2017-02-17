import React, { PropTypes } from 'react';

const InvoiceListItem = (props) => {
  return (
    <li className="invoice-list-item">
      <span>Checking</span>
      <span id="just">{props.account}</span>
      <span>Active</span>
      <span>USD</span>
      <span>$6,266.33</span>
    </li>
  );
};

InvoiceListItem.propTypes = {
  props: PropTypes.object,
  account: PropTypes.string
};

export default InvoiceListItem;
