import React, { useState, useEffect, useRef } from "react";
import styles from "./SingleBlog.module.scss";
import { AiOutlineArrowUp } from "react-icons/ai";
import ViewQnaCard from "../../../components/UI/Cards/ViewQnaCard/ViewBlogCard";

const SingleBlog = () => {
  const [scrollBtnActive, setScrollBtnActive] = useState(false);

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
      <div className={styles.posts}>
        <div
          onClick={scrollToTop}
          className={
            styles.scroll_to_top + ` ${scrollBtnActive ? styles.active : ""}`
          }
        >
          <AiOutlineArrowUp />
        </div>
        <div>
          <ViewQnaCard />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
