import * as types from "../types";
import axios from "axios";
import Router from "next/router";
import { useSelector } from "react-redux";

export const authenticateAction = (user) => {
  return {
    type: types.AUTHENTICATE,
    payload: user,
  };
};

export const deAuthenticateAction = () => {
  return {
    type: types.DEAUTHENTICATE,
  };
};

export const restoreState = (authState) => {
  return {
    type: types.RESTORE_AUTH_STATE,
    payload: authState,
  };
};

export const login = (loginDetails) => {
  return async (dispatch) => {
    try {
      dispatch(deAuthenticateAction());
      // login code. And storing data in result variable

      axios
        .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/login`, {
          email: loginDetails.email,
          password: loginDetails.password,
        })
        .then((res) => {
          if (res.status === 200) {
            //temporary code
            localStorage.setItem("firstname", res.data.firstname);
            localStorage.setItem("lastname", res.data.lastname);
            localStorage.setItem("email", res.data.email);
            localStorage.setItem("image", res.data.image);
            localStorage.setItem("token", res.data.token);
            // localStorage.setItem("blogTitles", res.data.blogTitles);
            dispatch(
              setBasicUserInfo({
                firstname: res.data.firstname,
                lastname: res.data.lastname,
                email: res.data.email,
                image: res.data.image,
                token: res.data.token,
              })
            );
            const blogTitlesArray = [];
            res.data.blogTitles.map((blogTitle) => {
              blogTitlesArray.push({
                key: blogTitle.title,
                value: blogTitle.title,
              });
            });
            dispatch(setBlogTitles(blogTitlesArray));
            dispatch(authenticateAction(loginDetails));
            // window.location.reload();
            Router.push("/blogs");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
      dispatch(deAuthenticateAction());
    }
  };
};

export const signUp = (signUpDetails) => {
  return async (dispatch) => {
    try {
      dispatch(deAuthenticateAction());
      // Signup code. And storing data in result variable
      axios
        .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/signup`, {
          email: signUpDetails.email,
          password: signUpDetails.password,
          firstname: signUpDetails.firstname,
          lastname: signUpDetails.lastname,
        })
        .then((res) => {
          if (res.status === 200) {
            //temporary code
            localStorage.setItem("firstname", signUpDetails.firstname);
            localStorage.setItem("lastname", signUpDetails.lastname);
            localStorage.setItem("email", signUpDetails.email);
            localStorage.setItem("image", signUpDetails.image);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("blogTitles", res.data.blogTitles);
            dispatch(authenticateAction(signUpDetails));
            Router.push("/blogs");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
      dispatch(deAuthenticateAction());
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    localStorage.setItem("token", "");
    dispatch(deAuthenticateAction());
  };
};

export const restore = (savedState) => {
  return (dispatch) => {
    dispatch(restoreState(savedState));
  };
};

export const setBasicUserInfo = (basicUserInfo) => (dispatch) => {
  dispatch({
    type: types.SET_BASIC_USER_INFO,
    payload: basicUserInfo,
  });
};

export const setBlogTitles = (blogTitles) => (dispatch) => {
  dispatch({
    type: types.SET_BLOG_TITLES,
    payload: blogTitles,
  });
};

export const setBlogTitle = (blogTitle) => (dispatch) => {
  const blogsData = JSON.parse(localStorage.getItem("blogsData"));
  const blogData = blogsData.filter((blog) => blog.title === blogTitle)[0];
  dispatch({
    type: types.SELECTED_BLOG_DATA,
    payload: blogData,
  });
  dispatch({
    type: types.SET_BLOG_TITLE,
    payload: blogTitle,
  });
};

export const setBlogData = (blogData) => (dispatch) => {
  dispatch({
    type: types.SELECTED_BLOG_DATA,
    payload: blogData,
  });
};

export const setBlogsData = (blogs) => (dispatch) => {
  dispatch({
    type: types.SET_BLOGS_DATA,
    payload: blogs,
  });
};
