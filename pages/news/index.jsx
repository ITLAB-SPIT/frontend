import React, { useRef, useState, useEffect } from "react";
import styles from "./News.module.scss";
import "react-toastify/dist/ReactToastify.css";
import Rightbar from "../../src/container/BlogPage/Rightbar/Rightbar";
import Image from "next/image";
import SkullManRun from "./../../public/assets/gifs/skull_man_running.gif";
import axios from "axios";
import Link from "next/link";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
const News = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [newsData, setNewsData] = useState([]);
  const [data, setData] = useState([]);
  const [translateTo, setTranslateTo] = useState("english");
  const langCodeDict = {
    english: "en",
    hindi: "hi",
    gujarati: "gu",
    marathi: "mr",
    tamil: "ta",
    french: "fr",
    russian: "ru",
  };

  const options = Object.keys(langCodeDict).map((lang) => {
    return lang + "";
  });

  const defaultOption = options[0];
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_SERVER_URL}/news`)
      .then((res) => {
        setIsLoading(false);
        // console.log(res.data);
        setNewsData(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const translate = async (data, language) => {
    if (language === "english") {
      setIsLoading(false);
      setTranslateTo("english");
      setData(newsData);
    }
    axios
      .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/translate`, {
        data: data,
        language: langCodeDict[language],
      })
      .then((res) => {
        setIsLoading(false);
        setData(res.data);
      });
  };

  if (isLoading) {
    return (
      <div className={styles.Main_Container}>
        <div className={styles.loader}>
          <Image
            src={SkullManRun}
            width={"500px"}
            height={"500px"}
            // className={styles.image}
          ></Image>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.Main_Container + " container"}>
      <div className={styles.News_Outer_Container}>
        <div className={styles.Language}>
          <h3>Translate to </h3>
          <Dropdown
            options={options}
            onChange={(value) => {
              setTranslateTo(value.value);
              setIsLoading(true);
              translate(newsData, value.value);
            }}
            value={translateTo}
            placeholder="Select an option"
            className={styles.dropdown}
          />
        </div>
        {data.map((news, index) => {
          return (
            <div key={index} className={styles.News_Container}>
              <div className={styles.Top_Container}>
                <h4>Author: {news.author}</h4>
                <p>Published: {news.publishedAt.substring(0, 10)}</p>
              </div>
              <hr></hr>
              <Link href={news.url}>
                <h1>{news.title}</h1>
              </Link>
              <div className={styles.Middle_Container}>
                <p>{news.description}</p>
                <img
                  src={news.urlToImage}
                  alt=""
                  width={"125px"}
                  height={"125px"}
                />
              </div>
            </div>
          );
        })}
      </div>
      <Rightbar />
    </div>
  );
};

export default News;
