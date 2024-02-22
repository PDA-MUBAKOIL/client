import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import NonLoginLogIn from '../routes/nonLogin/nonLoginLogIn';
import NonLoginSignUp from '../routes/nonLogin/nonLoginSignUp';
import NonLoginMainPage from '../routes/nonLogin/nonLoginMainPage';
import Layout from '../routes/common/layout';
import LoginLayout from '../routes/common/loginLayout';
import LoginMainPage from '../routes/login/loginMainPage';
import LoginListPage from '../routes/login/loginListPage';
import LoginWishPage from '../routes/login/loginWishPage';
import LoginSearchPage from '../routes/login/loginSearchPage';

export const mainRouter= ([
    {
        path:'',
        element: <Layout />,
        children:[
            {
                path: '/',
                element: <NonLoginMainPage />,
                index: true,
            },
            {
                path: '/login',
                element: <NonLoginLogIn />,
                index:true,
            },
            {
                path: '/signup',
                element: <NonLoginSignUp />,
                index: true,

            },
            {
                path: '/user',
                element: <LoginLayout />,
                children:[
                    {
                        path: '/user',
                        element: <LoginMainPage />,
                        index: true,
                    },
                    {
                        path:'/user/list',
                        element: <LoginListPage />,
                        index: true,
                    },
                    {
                        path:"/user/wish",
                        element: <LoginWishPage />,
                        index: true,
                    },
                    {
                        path:"/user/search",
                        element: <LoginSearchPage />,
                        index: true,
                    },
                ]
            }
        ]
    }
])

const router = createBrowserRouter(mainRouter);

export default router;