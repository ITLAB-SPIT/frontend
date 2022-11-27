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
    blogTitle: "",
    blogTitles: [],
    blogsData: [],
    currentBlogData: {},
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
    case types.SET_BLOG_TITLE:
      return {
        ...state,
        blogTitle: action.payload,
      };
    case types.SELECTED_BLOG_DATA:
      return {
        ...state,
        currentBlogData: action.payload,
      };
    case types.SET_BLOGS_DATA:
      return {
        ...state,
        blogsData: action.payload,
      };
    default:
      return { ...state };
  }
};

export default main;
