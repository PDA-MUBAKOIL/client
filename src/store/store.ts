import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import cardListReducer from "./reducers/cardList";
import userReducer from "./reducers/user";
import emailReducer from "./reducers/Auth/email";

export const rooterReducer = combineReducers({
  cardList: cardListReducer,
  user: userReducer,
  email: emailReducer,
});

export const store = configureStore({
  reducer: rooterReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
