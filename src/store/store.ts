import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import cardListReducer from "./reducers/cardList";
import userReducer from "./reducers/user";



export const rooterReducer = combineReducers({
    cardList: cardListReducer,
    user: userReducer
});

export const store = configureStore({
    reducer: rooterReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch