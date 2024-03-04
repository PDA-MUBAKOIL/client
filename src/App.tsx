import React from "react";
import { BrowserRouter, Route, RouteObject, Routes } from "react-router-dom";
import { NonLoginRouter, LoginRouter } from "./router/main-router";
import { Provider } from "react-redux";
import { RootState, persistor, store } from "./store/store";
import "@mantine/core/styles.css";
import { PersistGate } from "redux-persist/integration/react";
import { useCookies } from "react-cookie";
import { useAppSelector } from "./lib/hooks/reduxHooks";

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

const AppContent = () => {
  const token = useAppSelector((state: RootState) => state.user.user.token);

  return (
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        {!token ? (
          <Routes>{renderRoutes(NonLoginRouter)}</Routes>
        ) : (
          <Routes>{renderRoutes(LoginRouter)}</Routes>
        )}
      </BrowserRouter>
    </PersistGate>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
