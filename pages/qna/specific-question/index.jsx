import Router from "next/router";
import { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import BlogPage from "../../../src/container/BlogPage/BlogPage";

const Blog = (props) => {
  const qnaTitle = useSelector((state) => state.main.qnaTitle);

  useEffect(() => {
    if (qnaTitle === "") {
      Router.push("/qna");
    }
  }, [qnaTitle]);
  return <BlogPage pageName={"single-qna"} />;
};

export default connect(null, null)(Blog);
