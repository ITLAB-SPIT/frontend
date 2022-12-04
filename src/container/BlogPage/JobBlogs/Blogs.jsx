import React, { useEffect, useState } from "react";
import styles from "./Blogs.module.scss";
import JobBlogCard from "../../../components/UI/Cards/JobBlogCard/BlogCard";
import SkullManRun from "./../../../../public/assets/gifs/skull_man_running.gif";
import Image from "next/image";
import axios from "axios";
const Blogs = () => {
  const [jobsData, setJobsData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_SERVER_URL}/getJobsData`)
      .then((res) => {
        setJobsData(res.data.questions);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getBlogCards = () => {
    const data = jobsData.map((blog, index) => {
      return <JobBlogCard key={index} index={index} blogData={blog} />;
    });
    return data;
  };

  if (jobsData.length === 0) {
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
    const data = getBlogCards();
    return <div className={styles.Blogs}>{data}</div>;
  }
};

export default Blogs;
