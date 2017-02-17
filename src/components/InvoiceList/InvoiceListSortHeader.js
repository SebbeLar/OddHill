import React from 'react';
import InvoiceListSortItem from './InvoiceListSortItem';

const svgSrc = '/static/svg/triangle-1-copy.svg';

const InvoiceListSortHeader = () => {
  return (
    <div className="invoice-list-sort-header">
      <InvoiceListSortItem name="Type" svg={svgSrc}/>
      <InvoiceListSortItem name="Account Name" svg={svgSrc}/>
      <InvoiceListSortItem name="Status" svg={svgSrc}/>
      <InvoiceListSortItem name="Currency" svg={svgSrc}/>
      <InvoiceListSortItem name="Balance" svg={svgSrc}/>
    </div>
  );
};

export default InvoiceListSortHeader;
