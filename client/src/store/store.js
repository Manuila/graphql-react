import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import Posts from '../reducers/Posts';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  Posts,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
