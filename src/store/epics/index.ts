import { combineEpics } from 'redux-observable';
import getCountryList from './auto-pilot/get-country-list';


export default combineEpics(
  getCountryList
);
  