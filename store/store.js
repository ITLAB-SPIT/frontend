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
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";

// export const initStore = (initialState = {}) => {
//   return createStore(
//     rootReducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(thunkMiddleware, logger))
//   );
// };

// import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
// import ReduxToastr, { reducer as toastrReducer } from "react-redux-toastr";

// const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

let store = null;
export const makeStore = (initialState) => {
  const { composeWithDevTools } = require("redux-devtools-extension");
  const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(thunk))(
    createStore
  );
  store = createStoreWithMiddleware(rootReducer, initialState);
  return store;
};
export const wrapper = createWrapper(makeStore, { debug: true });
