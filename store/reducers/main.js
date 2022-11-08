import * as types from "../types";

const main = (
  state = {
    basicUserInfo: { name: "", email: "", imageUrl: "" },
  },
  action
) => {
  switch (action.type) {
    case types.SET_BASIC_USER_INFO:
      return {
        ...state,
        basicUserInfo: action.payload,
      };
    default:
      return { ...state };
  }
};

export default main;
