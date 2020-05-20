import {addReducer} from './reducers';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";

const reducers = combineReducers({
    addReducer : addReducer
});

export const store = createStore(reducers, applyMiddleware(thunk));