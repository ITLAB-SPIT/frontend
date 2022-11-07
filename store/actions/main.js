import * as types from "../types";
import axios from "axios";
import Router from "next/router";

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
            console.log("res.data");
            console.log(res.data);
            //temporary code
            localStorage.setItem("firstname", res.data.firstname);
            localStorage.setItem("lastname", res.data.lastname);
            localStorage.setItem("email", res.data.email);
            localStorage.setItem("image", res.data.image);
            dispatch(authenticateAction(loginDetails));
            Router.push("/blogs");
          }
        })
        .catch((err) => {
          console.log(err);
          // if (err.response.status == 401) {
          //   toast.error("Invalid Credentials.", {
          //     position: "top-right",
          //     autoClose: 5000,
          //     hideProgressBar: false,
          //     closeOnClick: true,
          //     pauseOnHover: true,
          //     draggable: true,
          //     progress: undefined,
          //     className: styles.error_container,
          //   });
          // }
        });
    } catch (error) {
      console.log(error);
      dispatch(deAuthenticateAction());
    }
  };
};

export const signUp = (signUpDetails) => {
  console.log("signup was called.");
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
            console.log("res.data");
            console.log(res.data);
            //temporary code
            localStorage.setItem("firstname", signUpDetails.firstname);
            localStorage.setItem("lastname", signUpDetails.lastname);
            localStorage.setItem("email", signUpDetails.email);
            localStorage.setItem("image", signUpDetails.image);
            dispatch(authenticateAction(signUpDetails));
            Router.push("/blogs");
          }
        })
        .catch((err) => {
          console.log(err);
          // if (err.response.status == 401) {
          //   toast.error("Invalid Credentials.", {
          //     position: "top-right",
          //     autoClose: 5000,
          //     hideProgressBar: false,
          //     closeOnClick: true,
          //     pauseOnHover: true,
          //     draggable: true,
          //     progress: undefined,
          //     className: styles.error_container,
          //   });
          // }
        });
    } catch (error) {
      console.log(error);
      dispatch(deAuthenticateAction());
    }
  };
};

export const logout = () => {
  console.log("logout called here");
  return async (dispatch) => {
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
