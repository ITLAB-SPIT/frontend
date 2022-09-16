import React, { useState } from "react";
import styles from "./Signup.module.scss";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { BsApple, BsGithub } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Login = () => {
  const [loginData, setLoginData] = useState({
    devname: "",
    password: "",
    cnfrmPassword: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const isInputValid = () => {
    const { devname, password, cnfrmPassword } = loginData;
    let message = { isValid: false, message: "Invalid input" };

    if (devname.length < 6) {
      message.message = "Username has to be atleast 6 characters long.";
    } else if (password.length < 8) {
      message.message = "Password has to be atleast 8 characters long.";
    } else if (password !== cnfrmPassword) {
      message.message = "Password fields are not matching.";
    } else {
      message = { isValid: true, message: "Valid input." };
    }
    return message;
  };

  const submit = () => {
    const message = isInputValid();
    if (message.isValid) {
      axios
        .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/signup`, {
          name: "shreyash",
          password: "shreyash",
        })
        .then((response) => {
          console.log("response came.");
          console.log(response);
        });
    } else {
      toast.error(message.message, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
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

  return (
    <div className={styles.Main_container + " " + "container"}>
      <ToastContainer
        position="top-left"
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
        <div className={styles.signup_container}>
          <h3>Welcome 👏</h3>
          <h2>Create your Dev account</h2>
          <label>Devname</label>
          <input
            type="text"
            name="devname"
            placeholder="Enter devname"
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
          />
          <label>Confirm password</label>
          <input
            type="password"
            name="cnfrmPassword"
            placeholder="Re-enter password"
            onChange={handleChange}
          />
          <button onClick={submit}>Sign Up</button>
          <div className={styles.login_container}>
            <p>Already have an account?</p>
            <Link href="/login">
              <a className={styles.link}>Login</a>
            </Link>
          </div>
          <div className={styles.hr_container}>
            <hr />
            Or
            <hr />
          </div>
          <div className={styles.other_signup_container}>
            <label>Signup using</label>
            <div className={styles.icons_container}>
              <FcGoogle className={styles.icons} size={"3.5rem"} />
              <BsApple className={styles.icons} size={"3.5rem"} />
              <GrLinkedinOption className={styles.icons} size={"3.5rem"} />
              <BsGithub className={styles.icons} size={"3.5rem"} />
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
      <div className={styles.right_container}></div>
    </div>
  );
};

export default Login;
