import { useEffect } from "react";
import BlogContainer from "../../src/container/BlogPage/BlogPage.jsx";
import { connect } from "react-redux";
import Router from "next/router";
import { Dna } from "react-loader-spinner";
import styles from "./Blogs.module.scss";
import { getCookie } from "../../utils/cookie";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const BlogPage = (props) => {
  console.log("props.auth");
  console.log(props.auth);

  const auth = getCookie("auth");
  console.log("auth");
  console.log(auth);

  useEffect(() => {
    if (!auth) {
      Router.push("/login");
    }
  }, []);

  if (auth) {
    return <BlogContainer />;
  } else {
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
  }
};

const mapStateToProps = (state) => {
  return { basicUserInfo: state.main.basicUserInfo, auth: state.auth };
};

export default connect(mapStateToProps)(BlogPage);
