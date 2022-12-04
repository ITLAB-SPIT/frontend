import BlueButton from "./BlueButton";
import Input from "./Input";
import React, { useState } from "react";
import styles from "./AskPage.module.scss";
import { useSelector } from "react-redux";
import axios from "axios";
import Router from "next/router";

export default function AskPage() {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questionTags, setQuestionTags] = useState("");
  const userBasicInfo = useSelector((state) => state.main.basicUserInfo);

  const validatePost = () => {
    if (questionTitle === "" || questionBody === "") {
      return false;
    }
    return true;
  };

  const publish = async () => {
    const validPost = validatePost();
    if (!validPost) {
      alert("Please fill all the fields");
      return;
    }
    axios
      .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/ask-question`, {
        userImageUrl: userBasicInfo.image || session.user.image,
        email:
          userBasicInfo.email ||
          localStorage.getItem("email") ||
          session.user.email,
        title: questionTitle,
        desc: questionBody,
        tags: questionTags,
        token: localStorage.getItem("token") || session.user.token,
        name: userBasicInfo.firstname + " " + userBasicInfo.lastname,
      })
      .then((res) => {
        if (res.status === 200) {
          alert("Question Posted Successfully");
          Router.push("/qna");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("error while posting the question.");
      });
  };

  return (
    <div className={styles.Ask_Question}>
      <div>
        <Input
          className={styles.input}
          type="text"
          value={questionTitle}
          onChange={(e) => setQuestionTitle(e.target.value)}
          placeholder="Title of your question"
        />
        <textarea
          className={styles.input_bigone}
          placeholder={
            "More info about your question. You can use markdown here"
          }
          value={questionBody}
          onChange={(e) => setQuestionBody(e.target.value)}
        />
        <Input
          className={styles.input}
          type="text"
          value={questionTags}
          onChange={(e) => setQuestionTags(e.target.value)}
          placeholder="Tags (separated by commas)"
        />
        <BlueButton onClick={publish} style={{ fontSize: "1.5rem" }}>
          Post question
        </BlueButton>
      </div>
    </div>
  );
}
