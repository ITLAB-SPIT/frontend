import React from "react";
import { BsBookmarkPlus, BsFillBookmarkCheckFill } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";
import LimitChar from "../../LimitChar/LimitChar";
import styles from "./BlogCard.module.scss";
import Router from "next/router";
import userAvatar from "./../../../../../public/assets/images/userAvatar.jpg";
import { connect } from "react-redux";
import { setQnaTitle } from "../../../../../store/actions/main";

const BlogCard = (props) => {
  return (
    <div className={styles.Blog_card}>
      <div className={styles.user_profile}>
        <div className={styles.profile}>
          <div className={styles.image}>
            <img
              src={props.blogData.userImageUrl || userAvatar.src}
              alt={"User Image"}
            ></img>
          </div>
          <div className={styles.info}>
            <div className={styles.name}>{props.blogData.name}</div>
            <div className={styles.circle} />
            <div className={styles.time}>
              {props.blogData.date.substr(0, 10)}
            </div>
            <div className={styles.circle} />
            <div className={styles.time}>5 min read</div>
            <div className={styles.circle} />
          </div>
        </div>
        <div className={styles.connections}>
          <div
            className={styles.connect}
            onClick={() => {
              localStorage.setItem("qnaIndex", props.index);
              props.setQnaTitle(props.blogData.title);
              Router.push("/qna/specific-question");
            }}
          >
            View
          </div>
        </div>
      </div>
      <div className={styles.blog_container}>
        <div className={styles.card_left}>
          <div className={styles.title}>
            <LimitChar limit={40} word={props.blogData.title}></LimitChar>
          </div>
          <div className={styles.desc}>
            <LimitChar
              fitContent={true}
              limit={200}
              hoverhide={true}
              word={props.blogData.desc}
            ></LimitChar>
          </div>
          <div className={styles.card_footer}>
            <div className={styles.tags}>
              {props.blogData.tags.split(",").map((tag, index) => {
                return (
                  <div className={styles.category} key={index}>
                    <LimitChar limit={15} word={tag}></LimitChar>
                  </div>
                );
              })}
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
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setQnaTitle: (title) => dispatch(setQnaTitle(title)),
  };
};

export default connect(null, mapDispatchToProps)(BlogCard);
