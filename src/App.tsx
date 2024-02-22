import React from 'react';
import { BrowserRouter, Route, RouteObject, Routes } from 'react-router-dom';
import { mainRouter } from './router/main-router';
import '@mantine/core/styles.css';


function renderRoutes(routesObj:RouteObject[]){
  return routesObj.map((route)=>{
    if(route.children){
      return(
        <Route key={route.path} path={route.path} index={route.index} element={route.element}>
          {route.children ? renderRoutes(route.children):null}
        </Route>
      )
    }

    return <Route key={route.path} path={route.path} index={route.index} element={route.element} />;
  })
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {renderRoutes(mainRouter)}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
