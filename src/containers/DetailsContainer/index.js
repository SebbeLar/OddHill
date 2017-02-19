import React, { Component, PropTypes } from 'react';
import MenuButton from '../../components/MenuButton';
import InvoiceDetails from '../../components/InvoiceDetails';

class Details extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    props: PropTypes.object,
    invoices: PropTypes.array,
    activeInvoice: PropTypes.string
  }
  render() {
    const { invoices, activeInvoice } = this.props;
    return (
      <div className="details-container">
        <img src="/static/svg/bg.png"
             srcSet="/static/svg/bg@2x.png, /static/svg/bg@3x.png"
             className="details-background" />
        <MenuButton />
        {activeInvoice.length > 0 &&
        <InvoiceDetails invoices={invoices} activeInvoice={activeInvoice}/>
        }
      </div>
    );
  }
}

export default Details;
