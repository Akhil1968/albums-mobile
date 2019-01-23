import axios from 'axios';

import {
   GET_ALBUMS_URL,
   GET_ALBUMS_SUCCESS, 
   GET_ALBUMS_FAILED, 
   LOADING_STARTS,
} from './ActionTypes';


 /*  Action Creator function for thunk */
export const GetAlbumsAction = () => {
    return (dispatch) => {
      dispatch({ type: LOADING_STARTS });
       axios.get(GET_ALBUMS_URL)
         .then(resp => dispatch({ type: GET_ALBUMS_SUCCESS, payload: resp.data }))
         .catch((error) => {
               dispatch({ type: GET_ALBUMS_FAILED });
         });
   };
 };
