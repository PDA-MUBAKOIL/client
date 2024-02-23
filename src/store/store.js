import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';

export const rooterReducer = combineReducers({

});

export const store = configureStore({
    reducer: rooterReducer
})