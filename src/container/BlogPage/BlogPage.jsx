import React, { useEffect } from "react";
import SingleBlog from "./SingleBlog/SingleBlog";
import SingleQna from "./SingleQna/SingleBlog";
import Feed from "./Feed/Feed";
import JobsFeed from "./JobsFeed/Feed";
import QnaFeed from "./QnaFeed/Feed";
import styles from "./BlogPage.module.scss";
import Rightbar from "./Rightbar/Rightbar";
import Sidebar from "./Sidebar/Sidebar";
import Image from "next/image";
import SkullManRun from "./../../../public/assets/gifs/skull_man_running.gif";
import axios from "axios";
import { setBlogsData, setQnaData } from "../../../store/actions/main";
import { connect, useSelector } from "react-redux";

const BlogPage = (props) => {
  const blogsData = useSelector((state) => state.main.blogsData);
  const qnaData = useSelector((state) => state.main.qnaData);
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_SERVER_URL}/blogsData`, {
        params: {
          token: localStorage.getItem("token"),
        },
        config,
      })
      .then((res) => {
        props.setBlogsData(res.data);
      });

    axios
      .get(`${process.env.NEXT_PUBLIC_SERVER_URL}/allqna`)
      .then((res) => {
        props.setQnaData(res.data.questions);
      })
      .catch((err) => {
        alert("error check console.");
        console.log(err);
      });
  }, []);

  if (!blogsData || !qnaData) {
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

  if (props.pageName === "blogs") {
    return (
      <div className={styles.Home_page + " container"}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    );
  } else if (props.pageName === "jobs") {
    return (
      <div className={styles.Home_page + " container"}>
        <Sidebar />
        <JobsFeed />
        <Rightbar />
      </div>
    );
  } else if (props.pageName === "blog") {
    return (
      <div className={styles.Home_page + " container"}>
        <Sidebar />
        <SingleBlog />
        <Rightbar />
      </div>
    );
  } else if (props.pageName === "qna") {
    return (
      <div className={styles.Home_page + " container"}>
        <Sidebar />
        <QnaFeed />
        <Rightbar />
      </div>
    );
  } else if (props.pageName === "single-qna") {
    // console.log("single=qna");
    return (
      <div className={styles.Home_page + " container"}>
        <Sidebar />
        <SingleQna />
        <Rightbar />
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setBlogsData: (data) => {
      dispatch(setBlogsData(data));
    },
    setQnaData: (data) => {
      dispatch(setQnaData(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(BlogPage);
