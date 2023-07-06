import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import { GoogleOAuthProvider } from '@react-oauth/google';

import { reducers } from './reducers';
import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    {/* <GoogleOAuthProvider clientId={`${process.env.GOOGLE_AUTH_API}`}> */}
      <App />
    {/* </GoogleOAuthProvider> */}
  </Provider>,
  document.getElementById('root'),
);