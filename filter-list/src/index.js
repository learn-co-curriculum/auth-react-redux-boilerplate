import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import { listReducer, pizzaReducer } from './reducers'
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({ listReducer, pizzaReducer });

const store = createStore(rootReducer);

console.log(store.getState());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
