import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, switchMap, catchError } from 'rxjs/operators';
import {
    GET_COVER_GENIUS_ORDERS,
    GET_COVER_GENIUS_ORDERS_SUCCESS,
    GET_COVER_GENIUS_ORDERS_FAIL
} from '../../constants';

const getOrders = (action$:any, state$:any) =>
  action$.pipe(
    ofType(GET_COVER_GENIUS_ORDERS),
    switchMap(action => {
      return ajax({
        url:  `https://7946a218-d225-4d0e-80ac-450bbc9713a0.mock.pstmn.io/booking`,
        headers: {
          'Content-Type': 'application/json',
        },
        responseType: 'json',
        crossDomain: true,
        method: 'GET',
      }).pipe(
        map(response => {
          return {
            type: GET_COVER_GENIUS_ORDERS_SUCCESS,
            data: response.response
          };
        }),
        catchError((error):any => {
            console.log(error)
            return {
                type: GET_COVER_GENIUS_ORDERS_FAIL,
              };
        })
      );
    })
  );

export default getOrders;
