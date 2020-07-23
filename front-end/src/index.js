import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';
import {Provider} from 'react-redux';
import { checkLoggedIn } from './util/session';
import {BrowserRouter} from 'react-router-dom';


const renderApp = preloadedState => {
  const store = configureStore(preloadedState);
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};
(async () => renderApp(await checkLoggedIn()))();
serviceWorker.unregister();
