import React, { useRef, useState, useEffect } from "react";
import styles from "./News.module.scss";
import "react-toastify/dist/ReactToastify.css";
import Rightbar from "../../src/container/BlogPage/Rightbar/Rightbar";
import { Dna } from "react-loader-spinner";
import axios from "axios";
import Link from "next/link";
const News = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_SERVER_URL}/news`)
      .then((res) => {
        setIsLoading(false);
        console.log(res.data);
        setNewsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return (
      <div className={styles.Main_Container}>
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
      </div>
    );
  }
  return (
    <div className={styles.Main_Container + " container"}>
      <div className={styles.News_Outer_Container}>
        <h3>Translate to Hindi</h3>
        {newsData.map((news, index) => {
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
