// configureStore.js

import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from './Books/books';
import categoryReducer from './Categories/categories';

const reducer = combineReducers({
  booksReducer,
  categoryReducer,
  // additional reducers could be added here
});

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;
