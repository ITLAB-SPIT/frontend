import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./ForgotPassword.module.scss";
import {
  AiOutlineKey,
  AiOutlineArrowLeft,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import axios from "axios";
import Router from "next/router";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const CloseButton = ({ closeToast }) => (
    <i className={"material-icons " + styles.close_icon} onClick={closeToast}>
      <AiOutlineCloseCircle size={"1rem"} />
    </i>
  );

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      Router.push({
        pathname: "/forgot-password/check-email",
        query: { email: email },
      });
      axios
        .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/forgot-password`, {
          email: email,
        })
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast.error("Please enter a valid email address.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: styles.error_container,
      });
    }
  };

  return (
    <div className={styles.Main_Container}>
      <ToastContainer newestOnTop={false} rtl={false} pauseOnFocusLoss />
      <div className={styles.container}>
        <div className={styles.main}>
          <AiOutlineKey className={styles.key} />
          <h1>Forgot Password</h1>
          <p>We will send you reset instructions.</p>
          <form onSubmit={submitForm}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
            />
            <button>Reset Password</button>
          </form>
          <div className={styles.backToLogIn}>
            <AiOutlineArrowLeft className={styles.back} />
            <a href={"/login"}>Back to log in</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
