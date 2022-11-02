import { combineReducers } from "redux";
import main from "./main";
import auth from "./authReducer";

const rootReducer = combineReducers({
  main: main,
  auth: auth,
});

export default rootReducer;
