import Image from "next/image";
import styles from "./Share.module.scss";

const Share = () => {
  return (
    <div className={styles.Main_Container}>
      <div className={styles.Share_Container}>
        <div className={styles.image}>
          <Image
            src={"/assets/images/mySelf.jpg"}
            width="100%"
            height="100%"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
        <button>Start a blog...</button>
      </div>
      <hr></hr>
    </div>
  );
};

export default Share;
