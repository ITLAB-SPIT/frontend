import React, { useEffect } from "react";
import styles from "./Blogs.module.scss";
import BlogCard from "../../../components/UI/Cards/BlogCard/BlogCard";
import { Dna } from "react-loader-spinner";
import axios from "axios";
const Blogs = () => {
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

  const getBlogCards = () => {
    const data = JSON.parse(localStorage.getItem("blogsData")).map(
      (blog, index) => {
        return <BlogCard key={index} index={index} blogData={blog} />;
      }
    );
    return data;
  };

  if (!localStorage.getItem("blogsData")) {
    return (
      <div className={styles.loader}>
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  } else {
    return <div className={styles.Blogs}>{getBlogCards()}</div>;
  }
};

export default Blogs;
