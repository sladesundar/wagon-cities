import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import City from './city.jsx';
import { setCities } from '../actions';

class CityList extends Component {
  render() {
    return (
      <div className="cities">
        {this.props.cities.map ((city) => <City key={city.slug} city={city}/>)}
      </div>
    )
  }


  componentWillMount() {
    this.props.setCities();
  }
}


function mapSomeInfoFromReduxStateToCityListProps(state) {
  return {
    cities: state.cities
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators (
    { setCities },
    dispatch
  );
}


export default connect(mapSomeInfoFromReduxStateToCityListProps, mapDispatchToProps)(CityList);
