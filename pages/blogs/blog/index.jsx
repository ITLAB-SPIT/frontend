import Router from "next/router";
import { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import BlogPage from "../../../src/container/BlogPage/BlogPage";
import { setBlogData } from "../../../store/actions/main";

const Blog = (props) => {
  const blogTitle = useSelector((state) => state.main.blogTitle);
  const blogsData = useSelector((state) => state.main.blogsData);
  useEffect(() => {
    if (blogTitle === "") {
      Router.push("/blogs");
    }
  }, [blogTitle]);
  useEffect(() => {
    if (blogsData) {
      let blogData = blogsData.filter((blog) => blog.title === blogTitle);
      props.setBlogData(blogData[0]);
    }
  }, [blogTitle]);
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
