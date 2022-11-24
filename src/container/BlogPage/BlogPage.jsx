import React, { useEffect } from "react";
import SingleBlog from "./SingleBlog/SingleBlog";
import Feed from "./Feed/Feed";
import styles from "./BlogPage.module.scss";
import Rightbar from "./Rightbar/Rightbar";
import Sidebar from "./Sidebar/Sidebar";
import Image from "next/image";
import SkullManRun from "./../../../public/assets/gifs/skull_man_running.gif";
import axios from "axios";

const BlogPage = (props) => {
  const [blogsData, setBlogsData] = React.useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_SERVER_URL}/blogsData`, {
        params: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setBlogsData(res.data);
        localStorage.setItem("blogsData", JSON.stringify(res.data));
      });
  }, []);

  if (!blogsData) {
    return (
      <div className={styles.loader}>
        <Image
          src={SkullManRun}
          width={"500px"}
          height={"500px"}
          // className={styles.image}
        ></Image>
      </div>
    );
  } else {
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
  }
};

export default BlogPage;
