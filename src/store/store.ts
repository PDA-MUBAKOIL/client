import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';



export const rooterReducer = combineReducers({

});

export const store = configureStore({
    reducer: rooterReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch