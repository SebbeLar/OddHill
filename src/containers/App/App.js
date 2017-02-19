import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Details from '../DetailsContainer';
import Invoice from '../InvoiceContainer';
import * as Actions from '../../actions';

const App = ({invoices, action}) => (
  <div className="view-container">
    <Invoice invoices={invoices}/>
    <Details />
  </div>
);

App.propTypes = {
  invoices: React.PropTypes.array,
  action: React.PropTypes.object
};

const mapStateToProps = state => ({
  invoices: state.invoices
});

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
