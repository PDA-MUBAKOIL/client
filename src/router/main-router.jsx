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

export const NonLoginRouter = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <NonLoginMainPage />,
        index: true,
      },
      {
        path: "/login",
        element: <NonLoginLogIn />,
        index: true,
      },
      {
        path: "/signup",
        element: <NonLoginSignUp />,
        index: true,
      },
    ],
  },
];

export const LoginRouter = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/map",
        element: <LoginMapPage />,
        index: true,
      },
      {
        path: "/list",
        element: <LoginListPage />,
        index: true,
      },
      {
        path: "/wish",
        element: <LoginWishPage />,
        index: true,
      },
      {
        path: "/search",
        element: <LoginSearchPage />,
        index: true,
      },
      {
        path: "/mypage",
        element: <LoginMyPage />,
        index: true,
      },
    ],
  },
];
