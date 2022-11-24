import { applyMiddleware, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './store/sagas';
import withDevTools from './devTools';

const reducers = {}; // add your common reducers here

export const sagaMiddleware = createSagaMiddleware();

export default function configureStore(options) {
  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const rootReducer = combineReducers ({ ...reducers, ...(options?.reducers || {})});

  const store = createStore(rootReducer, options?.initialState, withDevTools(middlewareEnhancer));
  sagaMiddleware.run(sagas);
  return store;
}
