import React from "react";
import ReactDOM from "react-dom";

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import counterReducer from "./store/reducers/counter";
import storedReducer from "./store/reducers/stored";

const combinedReducer = combineReducers({
  counter: counterReducer,
  stored: storedReducer
});

const logger = state => {
  return next => {
    return action => {
      console.log("[MIDDLEWARE] DISPATCHING: ", action.type);
      const result = next(action);
      console.log("[MIDDLEWARE] NEXT STATE: ", store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combinedReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
