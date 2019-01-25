import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import charity from './reducers/charityReducer';

const store = createStore(
  charity,
  compose(applyMiddleware(thunk))
);

export default store;