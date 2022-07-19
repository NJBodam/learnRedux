import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
// rootReducer above is the index file in the folder, does not need to be referenced
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initialState) {

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
}