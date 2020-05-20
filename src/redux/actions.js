import {ADD_FAVORITE, LOAD_FAVORITE, DELETE_FAVORITE, DISABLED_BUTTON, FETCH_DATA} from './types';
import axios from 'axios';

const apiHost = "https://5ec51f982a4ba000163d1b9f.mockapi.io";

export const addFavorite = (dogId) => {
    return (dispatch) => {
            dispatch({
                type: DISABLED_BUTTON,
                payload: dogId
            })
            axios.post(`${apiHost}/favorites`, {
                dogId,
              })
              .then((result) => {
                const eklenenFavori = result.data;
                dispatch({
                  type: ADD_FAVORITE,
                  payload: eklenenFavori,
                });
              })
              .catch((err) => {
                console.log(err);
              });
          };
        
}; 

export const deleteFavorite = (foundDog, id) => {
    return (dispatch) => {
        dispatch({
            type: DISABLED_BUTTON,
            payload: id
        })
        axios.delete(`${apiHost}/favorites/${foundDog}`).then((result) => {
            dispatch({
                type: DELETE_FAVORITE,
                payload: id
            })
        }).catch((err) => {
            console.log(err);
        });
    }
};

export const fetchGet = () => {
    return (dispatch) => {

        axios.get(`${apiHost}/favorites`).then((result) => {
            dispatch({
                type: FETCH_DATA,
                payload: result.data,
            })
        })
}}


export const loadingStart = () => {
    return {
        type: LOAD_FAVORITE
    }
};
