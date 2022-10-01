import { BsCheck2Circle } from "react-icons/bs";
import styles from "./Confirm.module.scss";

const Confirm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <BsCheck2Circle className={styles.check} />
        <h1>Reset Password</h1>
        <p>Your password has been reset successfully</p>
        <button>Log In</button>
      </div>
    </div>
  );
};

export default Confirm;
