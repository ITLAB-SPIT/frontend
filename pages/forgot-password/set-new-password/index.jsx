import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineKey, AiOutlineArrowLeft } from "react-icons/ai";
import Router, { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./SetPassword.module.scss";

const SetNewPassword = () => {
  const { query } = useRouter();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query.token) {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/reset-password?token=${query.token}`
        )
        .then((res) => {
          if (res.status == 200) {
            setLoading(false);
            setUserData({ ...userData, email: res.data });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [query]);

  const validatePassword = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  };

  const resetPassword = (e) => {
    e.preventDefault();
    if (!validatePassword(userData.password)) {
      toast.error(
        "Password must contain minimum eight characters,\n at least one uppercase letter,\n one lowercase letter,\n one number\n and one special character:",
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          className: styles.error_container,
        }
      );
    } else if (userData.password !== userData.confirmPassword) {
      toast.error("Passwords do not match.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: styles.error_container,
      });
    } else {
      axios
        .patch(`${process.env.NEXT_PUBLIC_SERVER_URL}/reset-password`, {
          email: userData.email,
          password: userData.password,
        })
        .then((res) => {
          if (res.status == 200) {
            toast.success("Password changes successfully.", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              className: styles.error_container,
            });
            Router.push("/login");
          } else {
            console.log("something went wrong");
            console.log(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <div className={styles.container}>
      <ToastContainer newestOnTop={false} rtl={false} pauseOnFocusLoss />
      <div className={styles.main}>
        <AiOutlineKey className={styles.key} />
        <h1>Set New Password</h1>
        <p className={styles.para}>
          Your new password must be different to previous passwords
        </p>
        <form>
          <input
            type="password"
            value={userData.password}
            onChange={(e) => {
              setUserData({ ...userData, password: e.target.value });
            }}
            placeholder="Enter Password"
          />
          <input
            type="password"
            value={userData.confirmPassword}
            onChange={(e) => {
              setUserData({ ...userData, confirmPassword: e.target.value });
            }}
            placeholder="Enter Confirm Password"
          />
          <button onClick={resetPassword}>Reset Password</button>
        </form>
        <div className={styles.backToLogIn}>
          <AiOutlineArrowLeft className={styles.back} />
          <a href={"/login"}>Back to log in</a>
        </div>
      </div>
    </div>
  );
};

export default SetNewPassword;
