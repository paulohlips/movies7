import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '~/store/ducks';
import rootSaga from '~/store/sagas';

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const composer = __DEV__
  ? compose(
      applyMiddleware(...middlewares),
      console.tron.createEnhancer()
    )
  : applyMiddleware(...middlewares);

const store = createStore(rootReducer, composer);

sagaMiddleware.run(rootSaga);

console.tron.log(store.getState());
export default store;
