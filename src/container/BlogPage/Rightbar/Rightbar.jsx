import React from "react";
import styles from "./Rightbar.module.scss";
import Image from "next/image";
import { MdAdd } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.Rightbar + " sticky-top"}>
      <div className={styles.rightCard}>
        <h1>Suggestions for you</h1>
        <ul className={styles.listRecommend}>
          <li>
            <div className={styles.user_profile}>
              <div className={styles.profile}>
                <div className={styles.image}>
                  <Image
                    src={"/assets/images/mySelf.jpg"}
                    width="100%"
                    height="100%"
                    layout="fill"
                    objectFit="cover"
                    alt="User Image"
                  />
                </div>
                <div className={styles.info}>
                  <div className={styles.nameFollow}>
                    <div className={styles.name}>Shreyash</div>
                    <MdAdd />
                  </div>
                  <div className={styles.desc}>
                    Full Stack developer | Studypaq
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className={styles.user_profile}>
              <div className={styles.profile}>
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
                <div className={styles.info}>
                  <div className={styles.nameFollow + " " + styles.name}>
                    <div className={styles.name}>Shreyash</div>
                    <MdAdd />
                  </div>
                  <div className={styles.desc}>
                    Full Stack developer | Studypaq
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className={styles.user_profile}>
              <div className={styles.profile}>
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
                <div className={styles.info}>
                  <div className={styles.nameFollow + " " + styles.name}>
                    <div className={styles.name}>Shreyash</div>
                    <MdAdd />
                  </div>
                  <div className={styles.desc}>
                    Full Stack developer | Studypaq
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.user_profile}>
              <div className={styles.profile}>
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
                <div className={styles.info}>
                  <div className={styles.nameFollow + " " + styles.name}>
                    <div className={styles.name}>Shreyash</div>
                    <MdAdd />
                  </div>
                  <div className={styles.desc}>
                    Full Stack developer | Studypaq
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
