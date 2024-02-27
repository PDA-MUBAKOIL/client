import React from "react";
import { BrowserRouter, Route, RouteObject, Routes } from "react-router-dom";
import { NonLoginRouter, LoginRouter } from "./router/main-router";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import "@mantine/core/styles.css";
import { PersistGate } from "redux-persist/integration/react";
import { useCookies } from "react-cookie";

function renderRoutes(routesObj: RouteObject[]) {


  return routesObj.map((route) => {
    if (route.children) {
      return (
        <Route
          key={route.path}
          path={route.path}
          index={route.index}
          element={route.element}
        >
          {route.children ? renderRoutes(route.children) : null}
        </Route>
      );
    }

    return (
      <Route
        key={route.path}
        path={route.path}
        index={route.index}
        element={route.element}
      />
    );
  });
}

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['authToken']);

    // 토큰값 가져오기
  const token = cookies['authToken'];

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          {!token ? (
            <Routes>{renderRoutes(NonLoginRouter)}</Routes>
          ) : (
            <Routes>{renderRoutes(LoginRouter)}</Routes>
          )}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
