import React, { useEffect } from "react";
import Feed from "./Feed/Feed";
import styles from "./BlogPage.module.scss";
import Rightbar from "./Rightbar/Rightbar";
import Sidebar from "./Sidebar/Sidebar";
import { Dna } from "react-loader-spinner";
import axios from "axios";

const BlogPage = () => {
  const [blogsData, setBlogsData] = React.useState([]);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/blogsData`).then((res) => {
      console.log("res.data for blogs data");
      console.log(res.data);
      setBlogsData(res.data);
    });
  }, []);

  if (!blogsData) {
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
    return (
      <div className={styles.Home_page + " container"}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    );
  }
};

export default BlogPage;
