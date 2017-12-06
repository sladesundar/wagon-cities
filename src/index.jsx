// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// import reducers
import citiesReducer from './reducers/cities_reducer';
import activeCityReducer from './reducers/active_city_reducer';

// Redux (not react) State
const reducers = combineReducers({
  cities: citiesReducer,
  activeCity: activeCityReducer
});

// instance of the component for the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
