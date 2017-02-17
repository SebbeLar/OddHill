import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Details from '../DetailsContainer';
import Invoice from '../InvoiceContainer';
import * as Actions from '../../actions';

const App = ({ingredients, action}) => (
  <div className="view-container">
    <Invoice />
    <Details />
  </div>
);

App.propTypes = {
  ingredients: React.PropTypes.array,
  action: React.PropTypes.object
};

const mapStateToProps = state => ({
  ingredients: state.ingredients
});

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
