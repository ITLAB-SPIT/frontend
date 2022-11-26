import React, { useState } from "react";
import styles from "./Login.module.scss";
import Link from "next/link";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react";
import Router from "next/router";
import axios from "axios";
import { connect } from "react-redux";
import { login, setBlogTitles } from "../../store/actions/main";

const Login = (props) => {
  const { data: session } = useSession();
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const isInputValid = () => {
    const { email, password } = loginData;
    const message = { isValid: false, message: "Invalid input" };

    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const validatePassword = (password) => {
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      );
    };

    if (email.length === 0) {
      message.message = "Please enter your email.";
    } else if (password === 0) {
      message.message = "Please enter your password.";
    } else if (!validateEmail(email)) {
      message.message = "Please enter a valid email address.";
    } else if (!validatePassword(password)) {
      message.message = "Please enter a valid password.";
    } else {
      message.isValid = true;
      message.message = "Valid input.";
    }
    return message;
  };
  const submit = () => {
    const message = isInputValid();

    if (message.isValid) {
      handleLoginSubmit();
    } else {
      toast.error(message.message, {
        progress: undefined,
        className: styles.error_container,
      });
    }
  };

  const CloseButton = ({ closeToast }) => (
    <i className={"material-icons " + styles.close_icon} onClick={closeToast}>
      <AiOutlineCloseCircle size={"2rem"} />
    </i>
  );

  const handleLoginSubmit = () => {
    const { dispatch } = props;
    dispatch(login(loginData));
  };

  if (props.isLoggedIn === true) {
    Router.push("/blogs");
  }

  if (session) {
    const { email, name, image } = session.user;
    axios
      .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/loginauth`, {
        email: email,
        name: name,
        image: image,
      })
      .then((res) => {
        // console.log(123);
        if (res.status === 200) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("blogTitles", res.data.blogTitles);
          // console.log("res.data");
          // console.log(res.data);
          Router.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    return (
      <div className={styles.Main_container}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          closeButton={CloseButton}
        />
        <div className={styles.left_container}>
          <div className={styles.left_inner_container}>
            <h1>Interview Experiences</h1>
            <h2>One Stop</h2>
            <h3>for</h3>
            <h2>All.</h2>
          </div>
        </div>
        <div className={styles.right_container}>
          <div className={styles.login_container}>
            <h3>Welcome Back!👏</h3>
            <h2>Login to your account</h2>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
            />
            <div className={styles.password_text_container}>
              <label>Password</label>
              <Link href="/forgot-password">
                <a className={styles.link}>Forgot Password</a>
              </Link>
            </div>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={handleChange}
            />
            <button onClick={submit}>Login</button>
            <div className={styles.signup_container}>
              <p>New to Dev.Env?</p>
              <Link href="/signup">
                <a className={styles.link}>Create an account.</a>
              </Link>
            </div>
            <div className={styles.hr_container}>
              <hr />
              Or
              <hr />
            </div>
            <div className={styles.other_login_container}>
              <label>Login using</label>
              <div className={styles.icons_container}>
                <BsGoogle
                  className={styles.icons}
                  size={"3.5rem"}
                  onClick={() => signIn("google")}
                />
                <GrLinkedinOption
                  className={styles.icons}
                  size={"3.5rem"}
                  onClick={() => signIn("linkedin")}
                />
                <BsGithub
                  className={styles.icons}
                  size={"3.5rem"}
                  onClick={() => signIn("github")}
                />
              </div>
            </div>
            <div className={styles.company_info_container}>
              <Link href="/">
                <a>Terms</a>
              </Link>
              <Link href="/">
                <a>Privacy</a>
              </Link>
              <Link href="/">
                <a>Security</a>
              </Link>
              <Link href="/">
                <a>Contact Dev.Env</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

// const mapStateToProps = (state) => {
//   return {
//     user: state.auth.user,
//     isLoggedIn: state.auth.isLoggedIn,
//   };
// };

// export default connect(mapStateToProps)(Login);

export default Login;

// import React, { useState } from "react";
// import styles from "./Login.module.scss";
// import Link from "next/link";
// import { FcGoogle } from "react-icons/fc";
// import { BsApple, BsGithub } from "react-icons/bs";
// import { GrLinkedinOption } from "react-icons/gr";
// import { AiOutlineCloseCircle } from "react-icons/ai";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";

// const Login = () => {
//   const [loginData, setLoginData] = useState({ email: "", password: "" });
//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setLoginData((prevData) => {
//       return { ...prevData, [name]: value };
//     });
//   };

//   const isInputValid = () => {
//     const { email, password } = loginData;
//     let message = { isValid: false, message: "Invalid input" };

//     if (email.length < 6) {
//       message.message = "Invalid username";
//     } else if (password.length < 8) {
//       message.message = "Invalid password";
//     } else {
//       message = { isValid: true, message: "Valid input." };
//     }
//     return message;
//   };

//   const submit = () => {
//     const message = isInputValid();
//     console.log(loginData);
//     if (message.isValid) {
//       console.log("shalom");
//       axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/login`, {
//         email: loginData.email,
//         password: loginData.password,
//       });
//     } else {
//       toast.error(message.message, {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         className: styles.error_container,
//       });
//     }
//   };

//   const CloseButton = ({ closeToast }) => (
//     <i className={"material-icons " + styles.close_icon} onClick={closeToast}>
//       <AiOutlineCloseCircle size={"2rem"} />
//     </i>
//   );

//   return (
//     <div className={styles.Main_container + " " + "container"}>
//       <div className={styles.left_container}></div>
//       <div className={styles.right_container}>
//         <div className={styles.login_container}>
//           <h3>Welcome Back!👏</h3>
//           <h2>Login to your account</h2>
//           <label>Email</label>
//           <input
//             type="text"
//             name="email"
//             placeholder="Enter email"
//             onChange={handleChange}
//           />
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter password"
//             onChange={handleChange}
//           />
//           <button onClick={submit}>Login</button>
//           <div className={styles.links_container}>
//             <Link href="/">
//               <a className={styles.link}>Forgot Password</a>
//             </Link>
//             <Link href="/signup">
//               <a className={styles.link}>Sign Up</a>
//             </Link>
//           </div>
//           <div className={styles.hr_container}>
//             <hr />
//             Or
//             <hr />
//           </div>
//           <div className={styles.other_signup_container}>
//             <label>Login using</label>
//             <div className={styles.icons_container}>
//               <FcGoogle className={styles.icons} size={"3.5rem"} />
//               <BsApple className={styles.icons} size={"3.5rem"} />
//               <GrLinkedinOption className={styles.icons} size={"3.5rem"} />
//               <BsGithub className={styles.icons} size={"3.5rem"} />
//             </div>
//           </div>
//           <div className={styles.company_info_container}>
//             <Link href="/">
//               <a>Terms</a>
//             </Link>
//             <Link href="/">
//               <a>Privacy</a>
//             </Link>
//             <Link href="/">
//               <a>Security</a>
//             </Link>
//             <Link href="/">
//               <a>Contact Dev.Env</a>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
