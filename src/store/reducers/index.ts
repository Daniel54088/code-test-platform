import { combineReducers } from 'redux';
import autoPilot from './auto-pilot';
import coverGenius from './cover-genius';

const rootReducer  = () =>  combineReducers({
    autoPilot,
    coverGenius
});

export default rootReducer;
