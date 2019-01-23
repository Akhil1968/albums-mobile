import {combineReducers} from 'redux';

import AlbumsReducer from './AlbumsReducer';

export default combineReducers({
    alb: AlbumsReducer
});

