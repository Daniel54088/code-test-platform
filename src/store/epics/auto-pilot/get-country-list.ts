import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, switchMap, catchError } from 'rxjs/operators';
import {
    GET_AUTO_PILOT_COUNTRYS,
    GET_AUTO_PILOT_COUNTRYS_SUCCESS,
    GET_AUTO_PILOT_COUNTRYS_FAIL
} from '../../constants';

const getCountryList = (action$:any, state$:any) =>
  action$.pipe(
    ofType(GET_AUTO_PILOT_COUNTRYS),
    switchMap(action => {
        console.log(action);
        console.log('is get?')
      return ajax({
        url:  `https://restcountries.com/v3.1/all`,
        headers: {
          'Content-Type': 'application/json',
        },
        responseType: 'json',
        crossDomain: true,
        method: 'GET',
      }).pipe(
        map(response => {
          return {
            type: GET_AUTO_PILOT_COUNTRYS_SUCCESS,
            data: response.response
          };
        }),
        catchError((error):any => {
            console.log(error)
            return {
                type: GET_AUTO_PILOT_COUNTRYS_FAIL,
              };
        })
      );
    })
  );

export default getCountryList;
