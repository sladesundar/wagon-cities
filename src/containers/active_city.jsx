import React, {Component} from 'react';
import { connect } from 'react-redux';

class ActiveCity extends Component {
  render() {
    const style = {
      width: "600px"
    }
    if (this.props.city) {
      return (
        <div className="active-city">
          <h1>{this.props.city.name}</h1>
          <h2>{this.props.city.address}</h2>
          <img style={style} src={`https://kitt.lewagon.com/placeholder/cities/${this.props.city.slug}`} alt="#"/>
        </div>
      )
    } else {
      return (
        <div className="active-city">
          <h1>Paris</h1>
          <h2>16 Villa Gaudelet, 75011 Paris</h2>
          <img style={style} src="https://kitt.lewagon.com/placeholder/cities/paris" alt="#"/>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    city: state.activeCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
