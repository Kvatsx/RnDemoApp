import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import CombineReducers from './CombineReducers';

const logger = createLogger();

const store = createStore(CombineReducers, applyMiddleware(logger, thunkMiddleware));

export default store;
