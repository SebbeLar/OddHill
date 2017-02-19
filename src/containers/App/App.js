import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Details from '../DetailsContainer';
import Invoice from '../InvoiceContainer';
import * as Actions from '../../actions';

const App = ({invoices, activeInvoice, actions}) => (
  <div className="view-container">
    <Invoice invoices={invoices} actions={actions} activeInvoice={activeInvoice}/>
    <Details invoices={invoices} activeInvoice={activeInvoice}/>
  </div>
);

App.propTypes = {
  invoices: React.PropTypes.array,
  actions: React.PropTypes.object,
  activeInvoice: React.PropTypes.string
};

const mapStateToProps = state => ({
  invoices: state.invoices,
  activeInvoice: state.activeInvoice
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
