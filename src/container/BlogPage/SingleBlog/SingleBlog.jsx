import React, { useState, useEffect, useRef } from "react";
import styles from "./SingleBlog.module.scss";
import { AiOutlineArrowUp } from "react-icons/ai";
import Blogs from "../Blogs/Blogs";
import Share from "../../../components/Share/Share";
import BlogCard from "../../../components/UI/Cards/BlogCard/BlogCard";
import ViewBlogCard from "../../../components/UI/Cards/ViewBlogCard/ViewBlogCard";

const SingleBlog = () => {
  const [activeLink, setActiveLink] = useState("blogs");
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
          <ViewBlogCard></ViewBlogCard>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
