import React, { useRef, useEffect } from "react";
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
import Router from "next/router";
import { connect } from "react-redux";
import { logout } from "../../../../store/actions/main";

const Sidebar = ({ avatarRef, setSidebarOpen, dispatch }) => {
  const sidebarRef = useRef(null);

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
          <img src="/assets/images/mySelf.jpg" alt="User Image" />
        </div>
        <div className={styles.info}>
          <div className={styles.name}>
            <LimitChar word="Noman" fitContent={true} limit={15} />
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
        <div className={styles.link} onClick={() => setSidebarOpen(false)}>
          <MdManageAccounts />
          <div>Account</div>
        </div>
      </div>
      <div
        className={styles.logout_btn}
        onClick={async () => {
          setSidebarOpen(false);
          await signOut({ callbackUrl: "/api/auth/logout" });
          dispatch(logout());
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