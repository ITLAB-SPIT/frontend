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
    userProfInfo: {
      profession: "",
      linkedinUrl: "",
      githubUrl: "",
      about: "",
      workExperience: "",
      currentlyWorkingAt: "",
    },
    achievementsAndSkills: {
      yearsOfExperience: "",
      resumeUrl: "",
      fieldOfExpertise: "",
      skills: ["", "", "", ""],
      hackathonWins: "",
      problemsSolved: "",
      projects: "",
      codechefRating: "",
      leetcodeRating: "",
    },
    blogTitle: "",
    blogTitles: [],
    blogsData: [],
    currentBlogData: {},
    name: "shreyash",
    token: "",
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
    case types.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case types.SET_USER_PROF_INFO:
      return {
        ...state,
        userProfInfo: action.payload,
      };
    case types.SET_ACHIEVEMENTS_AND_SKILLS:
      return {
        ...state,
        achievementsAndSkills: action.payload,
      };
    default:
      return { ...state };
  }
};

export default main;
