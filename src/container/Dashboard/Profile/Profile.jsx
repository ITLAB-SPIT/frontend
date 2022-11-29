import React from "react";
import LimitChar from "../../../components/UI/LimitChar/LimitChar";
import styles from "./Profile.module.scss";
import { BsCalendarCheckFill } from "react-icons/bs";
import { AiFillTool } from "react-icons/ai";
import { GiThreeFriends } from "react-icons/gi";
import { FaHackerrank } from "react-icons/fa";
import { useState } from "react";
import userAvatar from "../../../../public/assets/images/userAvatar.jpg";
import Image from "next/image";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

const Profile = () => {
  const [userImage, setUserImage] = useState(userAvatar.src);
  const basicUserInfo = useSelector((state) => state.main.basicUserInfo);
  const userProfInfo = useSelector((state) => state.main.userProfInfo);
  const userAchievementsAndSkills = useSelector(
    (state) => state.main.achievementsAndSkills
  );

  console.log(basicUserInfo);
  console.log(userProfInfo);
  console.log(userAchievementsAndSkills);

  useEffect(() => {
    if (basicUserInfo.image) {
      setUserImage(basicUserInfo.image);
    }
  }, [basicUserInfo]);
  return (
    <div>
      <div className={styles.Profile_container}>
        <div className={styles.profile}>
          <div className={styles.title}>Profile</div>
          <div className={styles.user_info}>
            <div className={styles.avatar}>
              <Image
                src={userImage}
                width={100}
                height={100}
                alt="User Image"
              />
            </div>
            <div className={styles.info}>
              <div className={styles.name}>
                <LimitChar
                  word={
                    basicUserInfo.firstname.charAt(0).toUpperCase() +
                    basicUserInfo.firstname.slice(1) +
                    " " +
                    basicUserInfo.lastname.charAt(0).toUpperCase() +
                    basicUserInfo.lastname.slice(1)
                  }
                  fitContent={true}
                  limit={20}
                />
              </div>
              <div className={styles.profession}>
                <LimitChar
                  word={userProfInfo.profession}
                  fitContent={true}
                  limit={25}
                />
              </div>
              <div className={styles.subTitle}>
                <LimitChar
                  word={basicUserInfo.tag}
                  fitContent={true}
                  limit={25}
                />
              </div>
            </div>
          </div>
          <div className={styles.about}>{userProfInfo.about}</div>
        </div>
        <div className={styles.stats}>
          <div className={styles.title}>Statistics</div>
          <div className={styles.stats_container}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <FaHackerrank />
              </div>
              <div className={styles.info}>
                <div className={styles.count}>
                  {userAchievementsAndSkills.hackathonWins}
                </div>
                <div className={styles.sub_title}>Hackathons</div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <BsCalendarCheckFill />
              </div>
              <div className={styles.info}>
                <div className={styles.count}>
                  {userAchievementsAndSkills.problemsSolved}
                </div>
                <div className={styles.sub_title}>Problem Solved</div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <AiFillTool />
              </div>
              <div className={styles.info}>
                <div className={styles.count}>
                  {userAchievementsAndSkills.projects}
                </div>
                <div className={styles.sub_title}>Projects</div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <GiThreeFriends />
              </div>
              <div className={styles.info}>
                <div className={styles.count}>NA</div>
                <div className={styles.sub_title}>Devmates</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.skills}>
          <div className={styles.title}>Skills</div>
          <div className={styles.stats_container}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <FaHackerrank />
              </div>
              <div className={styles.info}>
                <div className={styles.count}>
                  {userAchievementsAndSkills.skills[0]}
                </div>
                <div className={styles.sub_title}>Pro</div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <BsCalendarCheckFill />
              </div>
              <div className={styles.info}>
                <div className={styles.count}>
                  {userAchievementsAndSkills.skills[1]}
                </div>
                <div className={styles.sub_title}>Master</div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <AiFillTool />
              </div>
              <div className={styles.info}>
                <div className={styles.count}>
                  {userAchievementsAndSkills.skills[2]}
                </div>
                <div className={styles.sub_title}>God</div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <GiThreeFriends />
              </div>
              <div className={styles.info}>
                <div className={styles.count}>
                  {userAchievementsAndSkills.skills[3]}
                </div>
                <div className={styles.sub_title}>Scholar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Profile_container2}>
        <div className={styles.profile}>
          <div className={styles.title}>Work Experience</div>
          <div className={styles.user_info}>
            <div className={styles.info}>
              <div className={styles.name}>
                <label>{"Working At -"}</label>
                <LimitChar
                  word={
                    userProfInfo.currentlyWorkingAt.charAt(0).toUpperCase() +
                    userProfInfo.currentlyWorkingAt.slice(1)
                  }
                  fitContent={true}
                  limit={20}
                  className={styles.LimitChar}
                />
              </div>
              <div className={styles.subTitle}>
                <label>Expertise in - </label>
                <LimitChar
                  word={userAchievementsAndSkills.fieldOfExpertise}
                  fitContent={true}
                  limit={25}
                  className={styles.LimitChar}
                />
              </div>
              <div className={styles.profession}>
                <label>
                  {"YOE - " + userAchievementsAndSkills.yearsOfExperience}
                </label>
              </div>
            </div>
          </div>
          <div className={styles.about}>
            <LimitChar
              limit={200}
              word={userProfInfo.workExperience}
              fitContent={true}
            ></LimitChar>
          </div>
        </div>
        <div className={styles.stats}>
          <div className={styles.title}>Ratings</div>
          <div className={styles.stats_container}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <FaHackerrank />
              </div>
              <div className={styles.info}>
                <div className={styles.count}>
                  {userAchievementsAndSkills.hackathonWins}
                </div>
                <div className={styles.sub_title}>Codechef</div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <BsCalendarCheckFill />
              </div>
              <div className={styles.info}>
                <div className={styles.count}>
                  {userAchievementsAndSkills.problemsSolved}
                </div>
                <div className={styles.sub_title}>Leetcode</div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <AiFillTool />
              </div>
              <div className={styles.info}>
                <div className={styles.count}>
                  {userAchievementsAndSkills.projects}
                </div>
                <div className={styles.sub_title}>Codeforces</div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <GiThreeFriends />
              </div>
              <div className={styles.info}>
                <div className={styles.count}>NA</div>
                <div className={styles.sub_title}>Kaggle</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.skills}>
          <div className={styles.title}>Profiles</div>
          <div className={styles.stats_container}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <FaHackerrank />
              </div>
              <div className={styles.info}>
                <div className={styles.count}>
                  <Link href={userProfInfo.githubUrl}>
                    <a target={"_blank"}>{"Github"}</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <BsCalendarCheckFill />
              </div>
              <div className={styles.info}>
                <div className={styles.info}>
                  <div className={styles.count}>
                    <Link href={userProfInfo.linkedinUrl}>
                      <a target={"_blank"}>{"Linkedin"}</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <AiFillTool />
              </div>
              <div className={styles.info}>
                <div className={styles.info}>
                  <div className={styles.count}>
                    <Link href={userAchievementsAndSkills.resumeUrl}>
                      <a target={"_blank"}>{"Resume"}</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <GiThreeFriends />
              </div>
              <div className={styles.info}>
                <div className={styles.info}>
                  <div className={styles.count}>
                    <Link href={userProfInfo.githubUrl}>
                      <a target={"_blank"}>{"Instagram"}</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
