import React, {Component} from 'react';
import { bindActionCreators } from 'redux'; //this is only for setting
import { connect } from 'react-redux';
import { setActiveCity } from '../actions';

class City extends Component {

  handleClick = () => {
    this.props.setActiveCity(this.props.city);
  }

  render() {
    return (
      <h3 className="list-group-item" onClick={this.handleClick}>{this.props.city.name}</h3>
    );
  }
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators (
    { setActiveCity },
    dispatch
  );
}

// Redux requires this to call function, before loading of page
export default connect(null, mapDispatchToProps)(City);
