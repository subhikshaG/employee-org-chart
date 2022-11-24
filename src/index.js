import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './components/app/App';
import configureStore from './store';
import reportWebVitals from './reportWebVitals';
import {makeServer} from './server';
import { employee } from './@Redux/employee/reducer';

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

const options = {
  reducers: {
    employee: employee,
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={configureStore(options)}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
