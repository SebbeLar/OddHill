import React, { PropTypes } from 'react';
import InvoiceListSortItem from './InvoiceListSortItem';

const svgSrc = '/static/svg/triangle-1-copy.svg';

const InvoiceListSortHeader = (props) => {
  const { toggleFilter } = props.actions;
  return (
    <div className="invoice-list-sort-header">
      <InvoiceListSortItem name="Type" svg={svgSrc} filter={() => toggleFilter('type')}/>
      <InvoiceListSortItem name="Account Name" svg={svgSrc} filter={() => toggleFilter('account')}/>
      <InvoiceListSortItem name="Status" svg={svgSrc} filter={() => toggleFilter('status')}/>
      <InvoiceListSortItem name="Currency" svg={svgSrc} filter={() => toggleFilter('currency')}/>
      <InvoiceListSortItem name="Balance" svg={svgSrc} filter={() => toggleFilter('balance')}/>
    </div>
  );
};

InvoiceListSortHeader.propTypes = {
  props: PropTypes.object,
  actions: PropTypes.object,
  toggleFilter: PropTypes.func
};

export default InvoiceListSortHeader;
