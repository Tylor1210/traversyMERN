import {combineReducers } from 'redux';
import itemReducer from './itemReducer';

export default combineReducers({
    item: itemReducer,
    // AUTH REDUCER WOULD GO HERE
})