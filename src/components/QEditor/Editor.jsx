import React, { useRef, useState } from "react";
import styles from "./Editor.module.scss";
import Rightbar from "../../container/BlogPage/Rightbar/Rightbar";
import axios from "axios";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AskPage from "../AskPage/AskPage";

const Editor = () => {
  const { data: session } = useSession();
  // const editor = useRef(null);
  const [post, setPost] = useState({
    title: "",
    content: "",
    desc: "",
    imageUrl: "",
    base64: "",
    tags: "",
  });

  return (
    <div className={styles.Home_page + " container"}>
      <ToastContainer newestOnTop={false} rtl={false} pauseOnFocusLoss />
      <div className={styles.Blog_Container}>
        <div className={styles.Sub_Nav}>
          <h1>Ask Your Question</h1>
        </div>
        <div className={styles.Outer_Container}>
          <AskPage />
          <Rightbar />
        </div>
      </div>
    </div>
  );
};

export default Editor;
