import React from 'react';

import './index.css';
import { restoreCSRF, fetch } from "./store/csrf";

import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {ModalProvider} from './context/Modal'
import App from './App';

import configureStore from "./store";
import * as sessionActions from './store/session'
// variable to access store configuration
const store = configureStore();

const style = {
  fontFamily: 'interstate',
  fontWeight: 'lighter',
}

if (process.env.NODE_ENV !== "production") {
  restoreCSRF();
  // during development, call restoreCSRF before defining root.
  window.csrfFetch = fetch;
  window.store = store;
  window.sessionActions = sessionActions;

}
function Root() {
  return (
    // pass store config to provider for use in app
    <Provider store={store} style={style}>
      <ModalProvider style={style}>
        <BrowserRouter>
          <App style={style} />
        </BrowserRouter>
      </ModalProvider>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
