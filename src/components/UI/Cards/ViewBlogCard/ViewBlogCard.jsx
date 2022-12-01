import React from "react";
import { FiShare } from "react-icons/fi";
import { AiFillLike, AiFillPlayCircle } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsSave } from "react-icons/bs";
import styles from "./ViewBlogCard.module.scss";
import Link from "next/link";
import { useSelector } from "react-redux";
import userAvatar from "./../../../../../public/assets/images/userAvatar.jpg";
import { useEffect } from "react";
const ViewBlogCard = (props) => {
  const qnaData = useSelector((state) => state.main.qnaData);
  const qnaTitle = useSelector((state) => state.main.qnaTitle);
  useEffect(() => {
    if (qnaTitle === "") {
      Router.push("/qna");
    }
  }, []);
  const blogData = qnaData.filter((item) => item.title === qnaTitle);
  return (
    <div className={styles.Blog_card}>
      <div className={styles.user_profile}>
        <div className={styles.profile}>
          <div className={styles.image}>
            <img
              src={
                blogData.userImageUrl != "undefined"
                  ? blogData.userImageUrl
                  : userAvatar.src
              }
              alt={"User Image"}
            ></img>
          </div>
          <div className={styles.info}>
            <div className={styles.name}>{blogData.name}</div>
            <div className={styles.circle}></div>
            <div className={styles.time}>{blogData.date.substr(0, 10)}</div>
            <div className={styles.circle}></div>
            <div className={styles.time}>5 min read</div>
            <div className={styles.circle}></div>
            <AiFillPlayCircle />
            <div className={styles.time}>Listen</div>
          </div>
        </div>
        <div className={styles.connections}>
          <div className={styles.connect}>
            <Link href={"/blogs/blog"}>+ Follow</Link>
          </div>
        </div>
      </div>
      <div>
        <div
          className={styles.userBlog}
          dangerouslySetInnerHTML={{ __html: blogData.blogData }}
        />
      </div>
      <div className={styles.blog_bottom}>
        <div className={styles.left_div}>
          <div className={styles.sub_left_div}>
            <AiFillLike />
            <span className={styles.num}>22</span>
          </div>
          <div className={styles.sub_left_div}>
            <FaRegCommentDots />
            <span className={styles.num}>3</span>
          </div>
        </div>
        <div className={styles.right_div}>
          <div className={styles.sub_right_div}>
            <FiShare></FiShare>
          </div>
          <div className={styles.sub_right_div}>
            <BsSave></BsSave>
          </div>
          <div className={styles.sub_right_div}>
            <BiDotsHorizontalRounded></BiDotsHorizontalRounded>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBlogCard;
