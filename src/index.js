import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import registerServiceWorker from './registerServiceWorker'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import {createStore, CreateStore} from "redux"

import CardBoard from "./component/cardBoard"
import ScoreBoard from "./component/ScoreBoard"
// import rpp

const store = createStore(rootReducer)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App message="This is message from props"/>
      <CardBoard/>
      <ScoreBoard/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
// registerServiceWorker()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
