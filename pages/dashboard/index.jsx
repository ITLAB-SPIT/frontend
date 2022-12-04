import React, { useState } from "react";
import Profile from "./../../src/container/Dashboard/Profile/Profile";
import styles from "./dashboard.module.scss";
import Devmates from "../../src/container/Dashboard/Devmates/Devmates";
import Events from "../../src/container/Dashboard/Events/Events";
import Posts from "../../src/container/Dashboard/Posts/Posts";
import Projects from "../../src/container/Dashboard/Projects/Projects";
import Blogs from "../../src/container/Dashboard/Blogs/Blogs";

const Dashboard = () => {
  const [subTab, setSubTab] = useState("events");
  return (
    <div className={styles.Dashboard}>
      <div className={"container " + styles.profile}>
        <Profile />
      </div>
      <div className={"container " + styles.bottom_container}>
        <div className={styles.left}>
          <div className={styles.tab_container}>
            <div
              onClick={() => setSubTab("events")}
              className={
                styles.link +
                " " +
                `${subTab === "events" ? styles.active : ""}`
              }
            >
              Events
            </div>
            <div
              onClick={() => setSubTab("posts")}
              className={
                styles.link + " " + `${subTab === "posts" ? styles.active : ""}`
              }
            >
              Posts
            </div>
            <div
              onClick={() => setSubTab("projects")}
              className={
                styles.link +
                " " +
                `${subTab === "projects" ? styles.active : ""}`
              }
            >
              Projects
            </div>
            <div
              onClick={() => setSubTab("blogs")}
              className={
                styles.link + " " + `${subTab === "blogs" ? styles.active : ""}`
              }
            >
              Blogs
            </div>
          </div>
          <div className={styles.content_container}>
            {subTab === "events" ? (
              <Events />
            ) : subTab === "posts" ? (
              <Posts />
            ) : subTab === "projects" ? (
              <Projects />
            ) : subTab === "blogs" ? (
              <Blogs />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className={styles.right}>
          <Devmates />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
