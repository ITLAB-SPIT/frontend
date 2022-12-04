import Image from "next/image";
import Router from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import BlogPage from "../../../src/container/BlogPage/BlogPage";
import { setBlogData } from "../../../store/actions/main";
import SkullManRun from "./../../../public/assets/gifs/skull_man_running.gif";
import styles from "./Blogs.module.scss";

const Blog = (props) => {
  const blogTitle = useSelector((state) => state.main.blogTitle);
  const blogsData = useSelector((state) => state.main.blogsData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (blogTitle === "") {
      Router.push("/blogs");
    }
    if (blogsData) {
      let blogData = blogsData.filter((blog) => blog.title === blogTitle);
      props.setBlogData(blogData[0]);
    }
    setIsLoading(false);
  }, [blogTitle]);
  if (isLoading) {
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
  return <BlogPage pageName={"blog"} />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    setBlogData: (data) => {
      dispatch(setBlogData(data));
    },
  };
};
export default connect(null, mapDispatchToProps)(Blog);
