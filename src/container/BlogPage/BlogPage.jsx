import React from "react";
import Feed from "./Feed/Feed";
import styles from "./BlogPage.module.scss";
import Rightbar from "./Rightbar/Rightbar";
import Sidebar from "./Sidebar/Sidebar";

const BlogPage = () => {
  return (
    <div className={styles.Home_page + " container"}>
      <Sidebar />
      <Feed />
      <Rightbar />
    </div>
  );
};

export default BlogPage;
