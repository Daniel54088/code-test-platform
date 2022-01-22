import {
    GET_AUTO_PILOT_COUNTRYS,
    GET_AUTO_PILOT_COUNTRYS_SUCCESS,
    GET_AUTO_PILOT_COUNTRYS_FAIL
} from '../constants';
  

  const initialState = {
    countryList: [],
    countryListLoading: false,
  };
  
  const autoPilot = (state = initialState, action:any) => {
    switch (action.type) {
      case GET_AUTO_PILOT_COUNTRYS:
        return {
          ...state,
          countryListLoading: true,
        };      
      case GET_AUTO_PILOT_COUNTRYS_SUCCESS:
        return {
          ...state,
          countryListLoading: false,
          countryList:action.data
        };
      case GET_AUTO_PILOT_COUNTRYS_FAIL:
        return {
          ...state,
          countryListLoading: false,
        };

      default:
        return state;
    }
  };
  
  export default autoPilot;
  