import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import { firebase } from './firebase/firebase';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { login } from './actions/auth';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if(!hasRendered) {
    ReactDOM.render(jsx,
    document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />,
document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
  renderApp();
});

