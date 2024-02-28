import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import cardListReducer from "./reducers/Drink/cardList";
import drinkDetailReducer from "./reducers/Drink/drinkDetail";
import showModalReducer from "./reducers/Drink/showModal";
import searchReducer from "./reducers/Drink/search";
import userReducer from "./reducers/Auth/user";
import emailReducer from "./reducers/Auth/email";
import drinkListReducer from "./reducers/Drink/allDrink";
import modalReducer from "./reducers/Modal/page";
import myReviewReducer from "./reducers/Review/myReview";
import allReviewReducer from "./reducers/Review/allReview";
import myWishAllReducer from './reducers/Review/myAllWish';

import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import logger from "redux-logger";

const rootPersistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["user", "email", "drinkDetail"],
};

const myMiddlewares = [logger];

export const rootReducer = persistReducer(
  rootPersistConfig,
  combineReducers({
    cardList: cardListReducer,
    drinkDetail: drinkDetailReducer,
    search: searchReducer,
    showModal: showModalReducer,
    user: userReducer,
    email: emailReducer,
    drinkList: drinkListReducer,
    modalPage: modalReducer,
    myReview: myReviewReducer,
    allReview: allReviewReducer,
    myAllWish: myWishAllReducer,
  })
);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(myMiddlewares);
    return middlewares;
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type PersistState = ReturnType<typeof persistor.getState>;
export type AppDispatch = typeof store.dispatch;
