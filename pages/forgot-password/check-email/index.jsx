import { useState } from "react";
import styles from "./CheckEmail.module.scss";
import { AiOutlineMail, AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/router";
const CheckEmail = () => {
  const { query } = useRouter();
  const [email] = useState(query.email);
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <AiOutlineMail className={styles.key} />
        <h1>Forgot Password</h1>
        <p>
          We sent a password reset link to <br /> {email}
        </p>
        <p>{`Didn't recieve a mail?`} </p>
        <div className={styles.backToLogIn}>
          <AiOutlineArrowLeft className={styles.back} />
          <a href={"/forgot-password"}>Go Back</a>
        </div>
      </div>
    </div>
  );
};

export default CheckEmail;
