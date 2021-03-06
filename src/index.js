import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
// import { createStore, applyMiddleware } from 'redux'
// import rootReducer from './store/reducer/index'
// import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit';
import products from './store/reducer/productSlice';
import itemProduct from './store/reducer/itemProductSlice';
import filterProduct from './store/reducer/filterProductSlice';


// const store = createStore(rootReducer, applyMiddleware(thunk))
const store = configureStore({
    reducer: {
        products,
        itemProduct,
        filterProduct
    }
})
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
