import React from "react";
import { FiShare } from "react-icons/fi";
import { AiFillLike, AiFillPlayCircle } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsSave } from "react-icons/bs";
import styles from "./ViewBlogCard.module.scss";
import Link from "next/link";
import { useSelector } from "react-redux";

const ViewBlogCard = (props) => {
  // const blogsData = useSelector((state) => state.main.blogsData);
  // const blogData = blogsData[localStorage.getItem("blogIndex")];
  const blogData = useSelector((state) => state.main.currentBlogData);
  console.log("blogData", blogData);
  return (
    <div className={styles.Blog_card}>
      <div className={styles.user_profile}>
        <div className={styles.profile}>
          <div className={styles.image}>
            <img src={blogData.userImageUrl} alt={"User Image"}></img>
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
      {/* <div className={styles.blog_container}>
        <div className={styles.card_left}>
          <div className={styles.title}>
            <LimitChar limit={40} word={blogData.title}></LimitChar>
          </div>
          <div className={styles.desc}>
            <LimitChar
              fitContent={true}
              limit={200}
              hoverhide={true}
              word={blogData.desc}
            ></LimitChar>
          </div>
          <div className={styles.card_footer}>
            <div className={styles.tags}>
              <div className={styles.category}>
                <LimitChar limit={15} word={"Web development"}></LimitChar>
              </div>
            </div>
            <div className={styles.utils}>
              <div className={styles.icon}>
                <BsBookmarkPlus />
              </div>
              <div className={styles.icon}>
                <BiCommentDetail />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card_right}>
          <Image
            src={"/assets/images/mySelf.jpg"}
            width="100%"
            height="100%"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
      </div> */}
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
