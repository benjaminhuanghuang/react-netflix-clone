import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import 'normalize.css'; // fix css issue in browser
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';

import App from './App';

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <GlobalStyles />
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
