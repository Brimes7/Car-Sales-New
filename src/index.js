import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import{carSaleReducer} from './reducers/reducer';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(carSaleReducer);

const rootElement = document.getElementById('root');
    ReactDOM.render(
        //needs to be passed similar to props
        <Provider store = {store}>
            <App />   
        </Provider>,
    rootElement);



