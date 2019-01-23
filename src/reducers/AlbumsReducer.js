import {
    LOADING_STARTS,
    GET_ALBUMS_SUCCESS,
    GET_ALBUMS_FAILED
} from '../actions/ActionTypes';


const INITIAL_STATE = {
    albums: [],
    loading: false
}

const AlbumsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case GET_ALBUMS_SUCCESS:
            return { 
                ...state, 
                loading: false,
                albums: action.payload 
            };

        case GET_ALBUMS_FAILED:
            return { 
                ...state, 
                albums: [],
                loading: false
            };

        case LOADING_STARTS:
                return { 
                    ...state, 
                    albums: [],
                    loading: true
                };

        default:
            return state;
    }
    
}

export default AlbumsReducer;