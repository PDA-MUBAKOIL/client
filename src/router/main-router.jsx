import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

import NonLoginLogIn from "../routes/nonLogin/nonLoginLogIn";
import NonLoginSignUp from "../routes/nonLogin/nonLoginSignUp";
import NonLoginMainPage from "../routes/nonLogin/nonLoginMainPage";
import MainLayout from "../routes/mainLayout";
import LoginMapPage from "../routes/login/loginMapPage";
import LoginListPage from "../routes/login/loginListPage";
import LoginWishPage from "../routes/login/loginWishPage";
import LoginSearchPage from "../routes/login/loginSearchPage";
import LoginMyPage from "../routes/login/loginMyPage";
import LoginNavigatePage from "../routes/loginNavigate";
import NonLoginNavigatePage from "../routes/nonLoginNavaigate";

export const mainRouter = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <NonLoginNavigatePage><NonLoginMainPage /></NonLoginNavigatePage>,
        index: true,
      },
      {
        path: "/login",
        element: <NonLoginNavigatePage><NonLoginLogIn /></NonLoginNavigatePage>,
        index: true,
      },
      {
        path: "/signup",
        element: <NonLoginNavigatePage><NonLoginSignUp /></NonLoginNavigatePage>,
        index: true,
      },
      {
        path: "/map",
        element: <LoginNavigatePage><LoginMapPage /></LoginNavigatePage>,
        index: true,
      },
      {
        path: "/list",
        element: <LoginNavigatePage><LoginListPage /></LoginNavigatePage>,
        index: true,
      },
      {
        path: "/wish",
        element: <LoginNavigatePage><LoginWishPage /></LoginNavigatePage>,
        index: true,
      },
      {
        path: "/search",
        element: <LoginNavigatePage><LoginSearchPage /></LoginNavigatePage>,
        index: true,
      },
      {
        path: "/mypage",
        element: <LoginNavigatePage><LoginMyPage /></LoginNavigatePage>,
        index: true,
      },
    ],
  },
];

export default mainRouter;
