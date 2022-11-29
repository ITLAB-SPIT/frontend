import React, { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.scss";
import Sidebar from "./Sidebar/Sidebar";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import userAvatar from "./../../../public/assets/images/userAvatar.jpg";
import { SearchBar } from "../searchBar";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navbarRef = useRef(null);
  const avatarRef = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const basicUserInfo = useSelector((state) => state.main.basicUserInfo);
  const blogTitles = useSelector((state) => state.main.blogTitles);
  const [userImage, setUserImage] = useState(userAvatar.src);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
    if (basicUserInfo.image) {
      setUserImage(basicUserInfo.image);
    }
  }, [basicUserInfo]);

  const controlNavbar = () => {
    const nav_height = navbarRef.current?.offsetHeight;
    const allStickyTop = document.querySelectorAll(".sticky-top");
    if (window.scrollY > lastScrollY && window.scrollY > nav_height) {
      setShow(false);
      allStickyTop.forEach((sticky) => {
        sticky.style.top = 2 + "rem";
      });
    } else {
      setShow(true);
      const sticky = document.querySelector(".sticky-top");
      allStickyTop.forEach((sticky) => {
        sticky.style.top = `calc(${nav_height + "px"} + 2rem)`;
      });
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    const nav_height = navbarRef.current?.offsetHeight;
    document.querySelector("body").style.paddingTop = nav_height + "px";
    window.addEventListener("scroll", controlNavbar);
    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div
      ref={navbarRef}
      className={
        styles.Navbar_container +
        " " +
        "Container" +
        ` ${show ? styles.active : styles.hide}`
      }
    >
      <div>
        <Link href="/home">
          <Image
            className={styles.logo}
            alt="logo"
            src={"/assets/images/logo.png"}
            width={"40px"}
            height={"40px"}
            style={{ borderRadius: "1rem" }}
          />
        </Link>
      </div>
      <div className={styles.links_container}>
        <div className={styles.link}>
          <Link href={"/home"}>Home</Link>
        </div>
        <div className={styles.link}>
          <Link href={"/blogs"}>Blogs</Link>
        </div>
        <div className={styles.link}>
          <Link href={"/news"}>News</Link>
        </div>
        <div className={styles.link}>
          <Link href={"/qna"}>QnA</Link>
        </div>
        <div className={styles.link}>
          <div>Learn</div>
        </div>
        <div className={styles.link}>
          <Link href={"/about"}>About</Link>
        </div>
      </div>
      <div className={styles.search_container}>
        {isLoggedIn && <SearchBar />}
      </div>
      {isLoggedIn ? (
        <div className={styles.authenticated_container}>
          <div
            ref={avatarRef}
            className={styles.avatar}
            onClick={() => setSidebarOpen((active) => !active)}
          >
            <img src={userImage} alt="user profile" />
          </div>
        </div>
      ) : (
        <div className={styles.utils_container}>
          <div className={styles.login_signup}>
            <div className={styles.login}>
              <Link href={"/login"}>Login</Link>
            </div>
            <div className={styles.auth_btn}>
              <Link href={"/signup"}>Signup</Link>
            </div>
          </div>
          <div className={styles.logged_in}></div>
        </div>
      )}
      <div
        className={
          styles.sidebar_container + " " + `${sidebarOpen ? styles.open : ""}`
        }
      >
        <Sidebar avatarRef={avatarRef} setSidebarOpen={setSidebarOpen} />
      </div>
    </div>
  );
};

export default Navbar;
