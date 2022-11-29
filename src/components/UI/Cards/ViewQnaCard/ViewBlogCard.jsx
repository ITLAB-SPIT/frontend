import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import styles from "./ViewBlogCard.module.scss";
import Link from "next/link";
import { useSelector } from "react-redux";
import userAvatar from "./../../../../../public/assets/images/userAvatar.jpg";
import { useState } from "react";
import Image from "next/image";
import SkullManRun from "./../../../../../public/assets/gifs/skull_man_running.gif";
import { useEffect } from "react";
import axios from "axios";
import { Router } from "next/router";

const ViewBlogCard = (props) => {
  const qnaData = useSelector((state) => state.main.qnaData);
  const qnaTitle = useSelector((state) => state.main.qnaTitle);
  const basicUserInfo = useSelector((state) => state.main.basicUserInfo);

  const blogData = qnaData.filter((item) => item.title === qnaTitle)[0];
  const [isLoading, setIsLoading] = React.useState(true);
  const [commentsData, setCommentsData] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_SERVER_URL}/getComments`, {
        params: {
          qnaTitle: qnaTitle,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setCommentsData(res.data.questions);
          setIsLoading(false);
        } else {
          alert("Something went wrong");
          Router.push("/qna");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return (
      <div className={styles.loader}>
        <Image
          src={SkullManRun}
          width={"500px"}
          height={"500px"}
          alt={"Loader"}
        />
      </div>
    );
  }

  const getCurrentDate = () => {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${day}-${month}-${year}`;
    return currentDate; // "17-6-2022"
  };

  const commentIt = async () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/add-comment`, {
        qnaTitle: qnaTitle,
        desc: newComment,
        name: basicUserInfo.firstname + " " + basicUserInfo.lastname,
        email: basicUserInfo.email,
        userImageUrl: basicUserInfo.image,
      })
      .then((res) => {
        if (res.status === 200) {
          alert("Comment added successfully");
          setCommentsData([...commentsData, res.data]);
          setNewComment("");
        } else {
          alert("Something went wrong");
        }
        console.log("Date.now");
        console.log(Date.now);
        setCommentsData([
          ...commentsData,
          {
            desc: newComment,
            name: basicUserInfo.firstname + " " + basicUserInfo.lastname,
            email: basicUserInfo.email,
            userImageUrl: basicUserInfo.image,
            date: getCurrentDate(),
          },
        ]);
      })
      .catch((err) => {
        alert("Something went wrong");
        console.log(err);
      });
  };

  return (
    <div>
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
              <div className={styles.name}>
                {blogData.name != " " ? blogData.name : "Username"}
              </div>
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
        <div className={styles.question_details}>
          <div className={styles.title}>{blogData.title}</div>
          <div className={styles.desc}>{blogData.desc}</div>
          <div className={styles.tags}>
            {blogData.tags.split(",").map((name, index) => {
              return <span key={index}>{name}</span>;
            })}
          </div>
        </div>
        <div></div>
      </div>
      <div className={styles.comment_section}>
        <div className={styles.comment_head}>
          <h3>Comments</h3>
        </div>
        <div className={styles.comments}>
          {commentsData.map((item, index) => {
            return (
              <div key={index} className={styles.comment}>
                <div className={styles.header}>
                  <Image
                    src={item.userImageUrl}
                    width={40}
                    height={40}
                    alt={"User Image"}
                    className={styles.user_image}
                  />
                  <h3>{item.name}</h3>
                  <label>
                    {item.date ? item.date.substr(0, 10) : Date.now}
                  </label>
                </div>
                <div className={styles.desc}>{item.desc}</div>
              </div>
            );
          })}
        </div>
        <div className={styles.create_comment_container}>
          <textarea
            value={newComment}
            placeholder={"add comment"}
            onChange={(e) => {
              setNewComment(e.target.value);
            }}
          />
          <button onClick={commentIt}>comment</button>
        </div>
      </div>
    </div>
  );
};

export default ViewBlogCard;
