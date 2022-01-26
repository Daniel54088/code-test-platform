import {
    GET_COVER_GENIUS_ORDERS,
    GET_COVER_GENIUS_ORDERS_SUCCESS,
    GET_COVER_GENIUS_ORDERS_FAIL
} from '../constants';
  

  const initialState = {
    orders: [],
    ordersLoading: false,
  };
  
  const coverGenius = (state = initialState, action:any) => {
    switch (action.type) {
      case GET_COVER_GENIUS_ORDERS:
        return {
          ...state,
          ordersLoading: true,
        };      
      case GET_COVER_GENIUS_ORDERS_SUCCESS:
        return {
          ...state,
          ordersLoading: false,
          orders:action.data.policies
        };
      case GET_COVER_GENIUS_ORDERS_FAIL:
        return {
          ...state,
          ordersLoading: false,
        };

      default:
        return state;
    }
  };
  
  export default coverGenius;
  