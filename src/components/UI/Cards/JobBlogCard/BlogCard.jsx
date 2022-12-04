import React from "react";
import { BsBookmarkPlus, BsFillBookmarkCheckFill } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";
import LimitChar from "../../LimitChar/LimitChar";
import styles from "./BlogCard.module.scss";
import Router from "next/router";
import userAvatar from "./../../../../../public/assets/images/userAvatar.jpg";
import { connect } from "react-redux";
import { setBlogTitle } from "../../../../../store/actions/main";
const BlogCard = (props) => {
  console.log("props.blogData");
  console.log(props.blogData);
  return (
    <div className={styles.Blog_card}>
      <div className={styles.user_profile}>
        <div className={styles.profile}>
          <div className={styles.info}>
            <div className={styles.name}>
              {"Job Title : " + props.blogData.jobTitle}
            </div>
            <div className={styles.company_data}>
              <div className={styles.time}>
                {"Company : " + props.blogData.jobProviderName}
              </div>
              <div className={styles.time}>
                {"Place : " + props.blogData.jobPlace}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.connections}>
          <a href={props.blogData.applyLink}>Apply</a>
        </div>
      </div>
      <div className={styles.blog_container}>
        <div className={styles.card_left}>
          <div className={styles.desc}>
            <LimitChar
              fitContent={true}
              limit={200}
              hoverhide={true}
              word={props.blogData.description}
            ></LimitChar>
          </div>
          <div className={styles.card_footer}>
            <div className={styles.tags}>
              <div>
                <div className={styles.category}>
                  <h3>{props.blogData.tagsPair[0]}</h3>
                  <LimitChar
                    limit={15}
                    word={props.blogData.tagsPair[1]}
                  ></LimitChar>
                </div>
                <div className={styles.category}>
                  <h3>{props.blogData.tagsPair[2]}</h3>
                  <LimitChar
                    limit={15}
                    word={props.blogData.tagsPair[3]}
                  ></LimitChar>
                </div>
              </div>
              <div>
                <div className={styles.category}>
                  <h3>{props.blogData.tagsPair[4]}</h3>
                  <LimitChar
                    limit={15}
                    word={props.blogData.tagsPair[5]}
                  ></LimitChar>
                </div>
                <div className={styles.category}>
                  <h3>{props.blogData.tagsPair[6]}</h3>
                  <LimitChar
                    limit={15}
                    word={props.blogData.tagsPair[7]}
                  ></LimitChar>
                </div>
              </div>
              {/* {props.blogData.tagsPair.map((tag, index) => {
                if (index % 2 == 1) {
                  return (
                    <div className={styles.category} key={index}>
                      <h3>{props.blogData.tagsPair[index - 1]}</h3>
                      <LimitChar
                        limit={15}
                        word={props.blogData.tagsPair[index]}
                      ></LimitChar>
                    </div>
                  );
                }
              })} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setBlogTitle: (title) => dispatch(setBlogTitle(title)),
  };
};

export default connect(null, mapDispatchToProps)(BlogCard);
