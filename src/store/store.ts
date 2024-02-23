import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import cardListReducer from "./reducers/cardList";



export const rooterReducer = combineReducers({
    cardList: cardListReducer
});

export const store = configureStore({
    reducer: rooterReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch