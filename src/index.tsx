import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MantineProvider } from '@mantine/core';

const startApp = () =>{
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <MantineProvider>
        <App />
      </MantineProvider>
    </React.StrictMode>
  );
  
}



if( (window as {cordova: any} & typeof window).cordova ){
  document.addEventListener('deviceready',startApp,false);
}else{
  startApp();
}
