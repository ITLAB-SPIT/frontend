import React, { useEffect, useState } from "react";
import SingleBlog from "./SingleBlog/SingleBlog";
import Feed from "./Feed/Feed";
import styles from "./BlogPage.module.scss";
import Rightbar from "./Rightbar/Rightbar";
import Sidebar from "./Sidebar/Sidebar";
import Image from "next/image";
import SkullManRun from "./../../../public/assets/gifs/skull_man_running.gif";
import axios from "axios";
import { setBlogsData } from "../../../store/actions/main";
import { connect, useSelector } from "react-redux";

const BlogPage = (props) => {
  const blogsData = useSelector((state) => state.main.blogsData);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_SERVER_URL}/blogsData`, {
        params: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        props.setBlogsData(res.data);
      });
  }, []);

  if (!blogsData) {
    return (
      <div className={styles.loader}>
        <Image src={SkullManRun} width={"500px"} height={"500px"} />
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
  } else {
    return (
      <div className={styles.Home_page + " container"}>
        <Sidebar />
        <SingleBlog />
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
  };
};

export default connect(null, mapDispatchToProps)(BlogPage);
