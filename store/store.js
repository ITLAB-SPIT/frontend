import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
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
