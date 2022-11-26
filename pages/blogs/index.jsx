import { useEffect, useState } from "react";
import BlogContainer from "../../src/container/BlogPage/BlogPage.jsx";
import { connect } from "react-redux";
import Router from "next/router";
import { Dna } from "react-loader-spinner";
import styles from "./Blogs.module.scss";
import Image from "next/image.js";
import SkullManRun from "./../../public/assets/gifs/skull_man_running.gif";
import { getCookie } from "../../utils/cookie";
import { useSelector } from "react-redux";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

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
    return <BlogContainer pageName={"blogs"} />;
  } else {
    return (
      <div className={styles.loader}>
        <Image src={SkullManRun} width={"500px"} height={"500px"}></Image>
      </div>
    );
  }
};

// const mapStateToProps = (state) => {
//   return { basicUserInfo: state.main.basicUserInfo, auth: state.auth };
// };

export default BlogPage;
