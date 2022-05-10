import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import {StateProvider} from "./hooks/stateProvider";
import reducer, {initialState} from "./hooks/reducer";
import store from "./redux/store";
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <StateProvider initialState={initialState} reducer={reducer}>
          <Provider store={store}>
              <App />
          </Provider>
      </StateProvider>
      {/*<Provider store={store}>*/}
      {/*    <App />*/}
      {/*</Provider>*/}
  </React.StrictMode>
);

