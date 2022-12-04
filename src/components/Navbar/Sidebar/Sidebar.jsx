import React, { useRef, useEffect, useState } from "react";
import LimitChar from "../../UI/LimitChar/LimitChar";
import Link from "next/link";
import styles from "./Sidebar.module.scss";
import { BiLogOut } from "react-icons/bi";
import { MdManageAccounts, MdPeopleAlt } from "react-icons/md";
import { RiDashboardFill } from "react-icons/ri";
import { BsBookmarkStarFill } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { signOut } from "next-auth/react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { logout } from "../../../../store/actions/main";
import userAvatar from "./../../../../public/assets/images/userAvatar.jpg";
import Router from "next/router";
const Sidebar = ({ avatarRef, setSidebarOpen, dispatch }) => {
  const sidebarRef = useRef(null);
  const [userImage, setUserImage] = useState(userAvatar.src);
  const basicUserInfo = useSelector((state) => state.main.basicUserInfo);

  useEffect(() => {
    if (basicUserInfo.image) {
      setUserImage(basicUserInfo.image);
    }
  }, [basicUserInfo]);

  useEffect(() => {
    document.addEventListener("mousedown", clickOutsideRef);
    return () => document.removeEventListener("mousedown", clickOutsideRef);
  }, []);

  const clickOutsideRef = (e) => {
    if (
      sidebarRef.current &&
      avatarRef.current &&
      !sidebarRef.current.contains(e.target) &&
      !avatarRef.current.contains(e.target)
    ) {
      setSidebarOpen(false);
    }
  };

  return (
    <div ref={sidebarRef} className={styles.Sidebar_container}>
      <div
        className={styles.close_sidebar}
        onClick={() => setSidebarOpen(false)}
      >
        <CgClose />
      </div>
      <div className={styles.user_info}>
        <div className={styles.avatar}>
          <img src={userImage} alt="User Image" />
        </div>
        <div className={styles.info}>
          <div className={styles.name}>
            <LimitChar
              word={basicUserInfo.firstname}
              fitContent={true}
              limit={15}
            />
          </div>
          <div className={styles.subTitle}>
            <LimitChar
              word={"Full Stack Developer"}
              fitContent={true}
              limit={20}
            />
          </div>
        </div>
      </div>
      <div className={styles.links}>
        <Link href="/dashboard">
          <div
            className={styles.link + " " + styles.xl}
            onClick={() => setSidebarOpen(false)}
          >
            <RiDashboardFill />
            <div>Dashboard</div>
          </div>
        </Link>
        <Link href="/calendar">
          <div className={styles.link} onClick={() => setSidebarOpen(false)}>
            <AiOutlineCalendar />
            <div>Calendar</div>
          </div>
        </Link>
        <div className={styles.link} onClick={() => setSidebarOpen(false)}>
          <MdPeopleAlt />
          <div>Friends</div>
        </div>
        <div
          className={styles.link + " " + styles.sm}
          onClick={() => setSidebarOpen(false)}
        >
          <BsBookmarkStarFill />
          <div>Library</div>
        </div>
        <div
          className={styles.link}
          onClick={() => {
            Router.push("/EditProfile");
            setSidebarOpen(false);
          }}
        >
          <MdManageAccounts />
          <div>Settings</div>
        </div>
      </div>
      <div
        className={styles.logout_btn}
        onClick={async () => {
          setSidebarOpen(false);
          await signOut({ callbackUrl: "/api/auth/logout" });
          Router.push("/login");
          dispatch(logout());
          // ola?
        }}
      >
        <BiLogOut />
        <div>Sign out</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    isLoggedIn: state.auth.isLoggedIn,
  };
};

export default connect(mapStateToProps)(Sidebar);
