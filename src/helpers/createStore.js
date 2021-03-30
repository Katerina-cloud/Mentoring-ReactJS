import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { appReducer } from '../client/store/reducers';

export default (initialState = {}) => {
  const store = createStore(appReducer, initialState, applyMiddleware(thunk));

  return store;
};
