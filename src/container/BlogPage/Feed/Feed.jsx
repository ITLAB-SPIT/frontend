import React, { useState, useEffect, useRef } from "react";
import styles from "./Feed.module.scss";
import { AiOutlineArrowUp } from "react-icons/ai";
import Posts from "../Posts/Posts";
import Blogs from "../Blogs/Blogs";
import Hackathons from "../Hackathons/Hackathons";

const Feed = () => {
  const [activeLink, setActiveLink] = useState("posts");
  const [scrollBtnActive, setScrollBtnActive] = useState(false);
  const [addContainerShow, setAddContainerShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleScrollBtn);
    return () => window.removeEventListener("scroll", toggleScrollBtn);
  }, []);

  const toggleScrollBtn = () => {
    if (window.scrollY > 500) {
      setScrollBtnActive(true);
    } else {
      setScrollBtnActive(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.Feed}>
      <div className={styles.top_nav}>
        <div className={styles.tab_container}>
          <div
            className={
              styles.nav_link +
              ` ${activeLink === "blogs" ? styles.active : ""}`
            }
            onClick={() => setActiveLink("blogs")}
          >
            Blogs
          </div>
        </div>
        <div className={styles.utils}>
          <div
            className={styles.add_btn}
            onClick={() => setAddContainerShow((active) => !active)}
          >
            +
          </div>
        </div>
      </div>
      <div
        className={
          styles.add_container + ` ${addContainerShow ? styles.active : ""}`
        }
      >
        Hello
      </div>
      <div className={styles.posts}>
        <div
          onClick={scrollToTop}
          className={
            styles.scroll_to_top + ` ${scrollBtnActive ? styles.active : ""}`
          }
        >
          <AiOutlineArrowUp />
        </div>
        {activeLink === "posts" ? (
          <Posts />
        ) : activeLink === "blogs" ? (
          <Blogs />
        ) : activeLink === "hackathons" ? (
          <Hackathons />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Feed;
