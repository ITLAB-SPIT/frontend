// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import { createWrapper } from "next-redux-wrapper";
// import rootReducer from "./reducers/rootReducer";

// const middleware = [thunk];

// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;

// const enhancer = composeEnhancers(applyMiddleware(...middleware));

// const makeStore = () => createStore(rootReducer, enhancer);

// export const wrapper = createWrapper(makeStore);

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import logger from "redux-logger";

export const initStore = (initialState = {}) => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware, logger))
  );
};
