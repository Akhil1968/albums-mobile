import {combineReducers} from 'redux';

import AlbumsReducer from 'albums-shared2/src/reducers/AlbumsReducer';  //Shared
import CounterReducer from './CounterReducer'; //Local

export default combineReducers({
    alb: AlbumsReducer,
    ctr: CounterReducer 
});

