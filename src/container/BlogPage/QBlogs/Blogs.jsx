import React from "react";
import styles from "./Blogs.module.scss";
import QnaCard from "../../../components/UI/Cards/QnaCard/BlogCard";
import SkullManRun from "./../../../../public/assets/gifs/skull_man_running.gif";
import Image from "next/image";
import { useSelector } from "react-redux";
const Blogs = () => {
  const allQna = useSelector((state) => state.main.qnaData);
  const getQnaCards = () => {
    const data = allQna.map((blog, index) => {
      return <QnaCard key={index} index={index} blogData={blog} />;
    });
    return data;
  };

  if (!localStorage.getItem("blogsData")) {
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
  } else {
    return <div className={styles.Blogs}>{getQnaCards()}</div>;
  }
};

export default Blogs;
