import {ADD_FAVORITE, DELETE_FAVORITE, LOAD_FAVORITE, FETCH_DATA, SET_STATUS, DISABLED_BUTTON } from './types';

const initialState = {
    favorites: [],
    loadingFavorites: false,
    disabled: ""
}

export const addReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
        return {...state, favorites: [...state.favorites, action.payload], disabled: ""}
        case DELETE_FAVORITE:
        return {...state, favorites: state.favorites.filter(dog => dog.dogId !== action.payload), disabled: ""}
        case LOAD_FAVORITE: 
        return {...state, loadingFavorites: true};
        case FETCH_DATA:
        return {...state, favorites: action.payload};
        case SET_STATUS:
        return {...state, loadingId: action.payload };
        case DISABLED_BUTTON:
        return {...state, disabled: action.payload};    
        default:
        return state;
    }
}