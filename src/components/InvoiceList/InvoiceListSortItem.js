import React, { PropTypes } from 'react';

const InvoiceListSortItem = (props) => {
  return (
    <span className="invoice-list-sort-item" onClick={props.filter}>
      {props.name}
      <img src={props.svg}/>
    </span>
  );
};

InvoiceListSortItem.propTypes = {
  props: PropTypes.object,
  name: PropTypes.string,
  svg: PropTypes.string,
  filter: PropTypes.func
};

export default InvoiceListSortItem;
