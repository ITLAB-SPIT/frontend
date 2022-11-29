import Image from "next/image";
import styles from "./Share.module.scss";
import Router from "next/router";
import userAvatar from "./../../../public/assets/images/userAvatar.jpg";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
const Share = () => {
  const [userImage, setUserImage] = useState(userAvatar.src);
  const basicUserInfo = useSelector((state) => state.main.basicUserInfo);
  useEffect(() => {
    if (basicUserInfo.image) {
      setUserImage(basicUserInfo.image);
    }
  }, [basicUserInfo]);
  return (
    <div className={styles.Main_Container}>
      <div className={styles.Share_Container}>
        <div className={styles.image}>
          <Image
            src={userImage}
            width="100%"
            height="100%"
            layout="fill"
            objectFit="cover"
            alt="User Image"
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
