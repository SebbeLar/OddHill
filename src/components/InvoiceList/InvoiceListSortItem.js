import React, { PropTypes } from 'react';

const InvoiceListSortItem = (props) => {
  return (
    <span className="invoice-list-sort-item">
      {props.name}
      <img src={props.svg}/>
    </span>
  );
};

InvoiceListSortItem.propTypes = {
  props: PropTypes.object,
  name: PropTypes.string,
  svg: PropTypes.string
};

export default InvoiceListSortItem;
