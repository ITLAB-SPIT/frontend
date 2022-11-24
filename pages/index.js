import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Router from "next/router";
import { setBasicUserInfo } from "../store/actions/main";

import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import SkullManRun from "./../public/assets/gifs/skull_man_running.gif";
import styles from "./Main.module.scss";
const Home = (props) => {
  useEffect(() => {
    Router.push("/blogs");
  }, []);

  return (
    <div className={styles.loader}>
      <Image
        src={SkullManRun}
        width={"500px"}
        height={"500px"}
        // className={styles.image}
      ></Image>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { basicUserInfo: state.main.basicUserInfo, auth: state.auth };
};

const mapDispatchToProps = {
  setBasicUserInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
