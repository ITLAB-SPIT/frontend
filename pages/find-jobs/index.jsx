import { useEffect, useState } from "react";
import BlogContainer from "../../src/container/BlogPage/BlogPage.jsx";
import Router from "next/router";
import styles from "./Blogs.module.scss";
import Image from "next/image.js";
import SkullManRun from "./../../public/assets/gifs/skull_man_running.gif";

const BlogPage = (props) => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("token") === null ||
      localStorage.getItem("token") === ""
    ) {
      Router.push("/login");
    } else {
      setAuth(true);
    }
  }, []);

  if (auth) {
    return <BlogContainer pageName={"jobs"} />;
  } else {
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
  }
};

export default BlogPage;
