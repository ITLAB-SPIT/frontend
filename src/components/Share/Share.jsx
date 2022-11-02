import Image from "next/image";
import styles from "./Share.module.scss";
import Router from "next/router";

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
        <button onClick={() => Router.push("/blogs/create-blog")}>
          Start a blog...
        </button>
      </div>
      <hr></hr>
    </div>
  );
};

export default Share;
