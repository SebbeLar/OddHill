import React, { Component } from 'react';
import MenuButton from '../../components/MenuButton';
import InvoiceDetails from '../../components/InvoiceDetails';

class Details extends Component {
  render() {
    return (
      <div className="details-container">
        <img src="/static/svg/bg.png"
             srcSet="/static/svg/bg@2x.png, /static/svg/bg@3x.png"
             className="details-background" />
        <MenuButton />
        <InvoiceDetails />
      </div>
    );
  }
}

export default Details;
