import React from "react";
import styles from "./PostCard.module.scss";
import { BsPlusSquare } from "react-icons/bs";
import { BiLike, BiCommentDetail } from "react-icons/bi";
import LimitChar from "../../LimitChar/LimitChar";
import Image from "next/image";
import ReadMore from "../../ReadMore/ReadMore";

const PostCard = () => {
  return (
    <div className={styles.Post_card}>
      <div className={styles.user_profile}>
        <div className={styles.profile}>
          <div className={styles.image}>
            <Image
              src={"/assets/images/avatar.jpg"}
              width="100%"
              height="100%"
              layout="fill"
              objectFit="cover"
              alt="User Image"
            />
          </div>
          <div className={styles.info}>
            <div className={styles.name}>Noman</div>
            <div className={styles.desc}>Full Stack developer | Studypaq</div>
            <div className={styles.time}>1d ago</div>
          </div>
        </div>
        <div className={styles.connections}>
          <div className={styles.connect}>
            <span>+</span>Connect
          </div>
          <div className={styles.count}>1,234 connections</div>
        </div>
      </div>
      <div className={styles.description}>
        <ReadMore
          text={
            "I remember breaking an integration test over the weekend and the deployment needed to be rolled back.Of course I felt ashamed. You can't enjoy your weekend if you're busy fixing my problems.When my meeting with my manager was coming up, I wasn't ready to talk about the mistakes I made Mistakes where I remember breaking an integration test over the weekend and the deployment needed to be rolled back.Of course I felt ashamed. You can't enjoy your weekend if you're busy fixing my problems.When my meeting with my manager was coming up, I wasn't ready to talk about the mistakes I made Mistakes where I remember breaking an integration test over the weekend and the deployment needed to be rolled back.Of course I felt ashamed. You can't enjoy your weekend if you're busy fixing my problems.When my meeting with my manager was coming up, I wasn't ready to talk about the mistakes I made Mistakes where I remember breaking an integration test over the weekend and the deployment needed to be rolled back.Of course I felt ashamed. You can't enjoy your weekend if you're busy fixing my problems.When my meeting with my manager was coming up, I wasn't ready to talk about the mistakes I made Mistakes where"
          }
          limit={300}
        />
      </div>
      <div className={styles.post_image}>
        <img src="/assets/images/post-1.jpeg" alt="User Image" />
      </div>
      <div className={styles.utils}>
        <div className={styles.icon}>
          <BiLike />
          <div>Like</div>
        </div>
        <div className={styles.icon}>
          <BiCommentDetail />
          <div>Comment</div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
