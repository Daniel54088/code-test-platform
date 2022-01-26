import { combineEpics } from 'redux-observable';
import getCountryList from './auto-pilot/get-country-list';
import getOrders from './cover-genius/get-orders';


export default combineEpics(
  getCountryList,
  getOrders
);
  