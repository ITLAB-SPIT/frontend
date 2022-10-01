import React from "react";
import styles from "./Sidebar.module.scss";
import { HiUserGroup } from "react-icons/hi";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className={styles.Sidebar + " sticky-top"}>
      <div className={styles.SidebarWrapperTop}>
        <div className={styles.profileInfo}>
          <div className={styles.image}>
            <Image
              src={"/assets/images/mySelf.jpg"}
              width="100%"
              height="100%"
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>
          <div className={styles.profileInfoName}>Noman</div>
          <div className={styles.profileInfoDesc}>
            Student at Bhartiya Vidya Bhavans Sardar Patel Institute of
            Technology Munshi Nagar Andheri Mumbai
          </div>
        </div>
        <hr className={styles.partition}></hr>

        <div className={styles.listTab}>
          <div className={styles.listTabText}>Connections</div>
          <div className={styles.listTabValue}>115</div>
        </div>
        <div className={styles.listTab}>
          <div
            className={styles.listTabText}
          >{`Who's viewed your profile`}</div>
          <div className={styles.listTabValue}>53</div>
        </div>
        <hr className={styles.partition}></hr>
        <div className={styles.listTab}>
          <div className={styles.listTabText}>View Later</div>
          <div className={styles.listTabValue}>7</div>
        </div>
      </div>
      <div className={styles.SidebarWrapperBottom}>
        <div className={styles.listTabBottom}>
          Recent
          <div className={styles.groupTab}>
            <div className={styles.groupIcon}>
              <HiUserGroup />
            </div>
            <div className={styles.groupTabName}>SPIT Alumni Network</div>
          </div>
        </div>
        <hr className={styles.partition}></hr>
        <div className={styles.listTabBottom}>
          Groups
          <div className={styles.groupTab}>
            <div className={styles.groupIcon}>
              <HiUserGroup />
            </div>
            <div className={styles.groupTabName}>Minion Troop</div>
          </div>
          <div className={styles.groupTab}>
            <div className={styles.groupIcon}>
              <HiUserGroup />
            </div>
            <div className={styles.groupTabName}>TTID</div>
          </div>
          <div className={styles.groupTab}>
            <div className={styles.groupIcon}>
              <HiUserGroup />
            </div>
            <div className={styles.groupTabName}>404 Not Found</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
