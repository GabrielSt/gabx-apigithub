import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import promise from 'redux-promise';
import multi from 'redux-multi'

const middlewares = [thunk, promise, multi];

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = applyMiddleware(...middlewares)(createStore)(rootReducer, devTools);

export default store;