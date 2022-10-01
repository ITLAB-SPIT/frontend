import styles from "./Share.module.css";
import React from "react";
import { HiOutlinePhotograph } from "react-icons/hi";
import { BiVideo, BiCalendarEvent } from "react-icons/bi";
import { RiArticleLine } from "react-icons/ri";

export default function Share() {
  return (
    <div>
      <div className={styles.share}>
        <div className={styles.shareWrapper}>
          <div className={styles.shareTop}>
            <img
              src="/assets/profile-pics/avatar.jpeg"
              className={styles.shareProfileImg}
              alt="Profile"
            />
            <input
              placeholder="Start a post..."
              className={styles.shareInput}
            />
          </div>

          <div className={styles.shareBottom}>
            <div className={styles.shareOptions}>
              <div className={styles.shareOption}>
                <HiOutlinePhotograph className={styles.shareIcon} />
                <span className={styles.shareOptionText}>Photo</span>
              </div>

              <div className={styles.shareOption}>
                <BiVideo className={styles.shareIcon} />
                <span className={styles.shareOptionText}>Video</span>
              </div>

              <div className={styles.shareOption}>
                <BiCalendarEvent className={styles.shareIcon} />
                <span className={styles.shareOptionText}>Event</span>
              </div>

              <div className={styles.shareOption}>
                <RiArticleLine className={styles.shareIcon} />
                <span className={styles.shareOptionText}>Write article</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.shareHr}></hr>
    </div>
  );
}
