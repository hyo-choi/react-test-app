import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './hooks/useContext';
import App from './App';
import { AppStateProvider } from './hooks/useAppState';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.REACT_APP_PATH}>
      <ContextProvider>
        <AppStateProvider>
          <App />
        </AppStateProvider>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
