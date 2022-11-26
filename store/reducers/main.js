import * as types from "../types";

const main = (
  state = {
    basicUserInfo: {
      firstname: "",
      lastname: "",
      email: "",
      image: "",
      token: "",
    },
    blogTitles: [],
    name: "shreyash",
  },
  action
) => {
  switch (action.type) {
    case types.SET_BASIC_USER_INFO:
      return {
        ...state,
        basicUserInfo: action.payload,
      };
    case types.SET_BLOG_TITLES:
      return {
        ...state,
        blogTitles: action.payload,
      };
    default:
      return { ...state };
  }
};

export default main;
