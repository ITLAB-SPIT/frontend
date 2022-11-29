import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./EditProfile.module.scss";
import userAvatar from "./../../public/assets/images/userAvatar.jpg";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import {
  setAchievementsAndSkills,
  setBasicUserInfo,
  setUserProfInfo,
} from "../../store/actions/main";

const EditProfile = (props) => {
  const basicUserInfo = useSelector((state) => state.main.basicUserInfo);
  const userProfInfo = useSelector((state) => state.main.userProfInfo);
  const achievementsAndSkills = useSelector(
    (state) => state.main.achievementsAndSkills
  );

  const [settingNum, setSettingNum] = useState(0);
  const [userData, setUserData] = useState({
    oldPassword: "",
    newPassword: "",
    cnfNewPassword: "",
  });
  const [userProfData, setUserProfData] = useState({
    profession: userProfInfo.profession,
    linkedinUrl: userProfInfo.linkedinUrl,
    githubUrl: userProfInfo.githubUrl,
    about: userProfInfo.about,
    workExperience: userProfInfo.workExperience,
    currentlyWorkingAt: userProfInfo.currentlyWorkingAt,
  });
  const [userAchievementsAndSkills, setUserAchievementsAndSkills] = useState({
    yearsOfExperience: achievementsAndSkills.yearsOfExperience,
    resumeUrl: achievementsAndSkills.resumeUrl,
    fieldOfExpertise: achievementsAndSkills.fieldOfExpertise,
    skills: achievementsAndSkills.skills,
    hackathonWins: achievementsAndSkills.hackathonWins,
    problemsSolved: achievementsAndSkills.problemsSolved,
    projects: achievementsAndSkills.projects,
    codechefRating: achievementsAndSkills.codechefRating,
    leetcodeRating: achievementsAndSkills.leetcodeRating,
  });

  const [image, setImage] = useState("");
  const [url, setUrl] = useState(
    basicUserInfo.image !== "" ? basicUserInfo.image : userAvatar.src
  );
  const [basicInfo, setBasicInfo] = useState({
    firstname: basicUserInfo.firstname,
    lastname: basicUserInfo.lastname,
    email: basicUserInfo.email,
    tag: basicUserInfo.tag,
    imageUrl: basicUserInfo.image,
    token: basicUserInfo.token,
  });
  const [sidenNavElements, setSidenNavElements] = useState([
    {
      elemName: " Basic Information",
    },
    { elemName: "Professional Information" },
    { elemName: "Change Password" },
    { elemName: "Achievements & Skills" },
  ]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((data) => {
      return { ...data, [name]: value };
    });
  };

  const handleChange1 = (event) => {
    const { name, value } = event.target;
    setBasicInfo((pData) => {
      return { ...pData, [name]: value };
    });
  };

  const handleChange2 = (event) => {
    const { name, value } = event.target;
    setUserProfData((pData) => {
      return { ...pData, [name]: value };
    });
  };

  const handleChange3 = (event) => {
    const { name, value } = event.target;
    setUserAchievementsAndSkills((pData) => {
      return { ...pData, [name]: value };
    });
  };

  const uploadImage = async (imageFile) => {
    const data = new FormData();
    data.append("file", imageFile);
    data.append("upload_preset", "itlab_image_store_preset");
    data.append("cloud_name", "dl8hmamey");
    fetch("  https://api.cloudinary.com/v1_1/dl8hmamey/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setBasicInfo((pData) => {
          return { ...pData, imageUrl: data.url };
        });
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  };

  const clickLiHandler = (elem) => {
    setSidenNavElements(() => {
      return sidenNavElements.map((navElem) => {
        if (navElem === elem) {
          return { ...navElem, active: true };
        } else {
          return { ...navElem, active: false };
        }
      });
    });
  };

  const validatePassword = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  };

  const updatePassword = async () => {
    if (
      !validatePassword(userData.oldPassword) ||
      !validatePassword(userData.newPassword) ||
      !validatePassword(userData.cnfNewPassword) ||
      userData.newPassword !== userData.cnfNewPassword
    ) {
      alert("Invalid Password Field.");
      return;
    }
    axios
      .patch(`${process.env.NEXT_PUBLIC_SERVER_URL}/reset-password-setting`, {
        oldPassword: userData.oldPassword,
        newPassword: userData.newPassword,
        token: localStorage.getItem("token"),
      })
      .then((res) => {
        if (res.status === 200) {
          alert("Password Updated Successfully");
          location.reload();
        } else {
          alert("Password Update Failed");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateProfile = async () => {
    if (
      basicInfo.firstname !== basicUserInfo.firstname ||
      basicInfo.lastname !== basicUserInfo.lastname ||
      basicInfo.email !== basicUserInfo.email ||
      basicInfo.imageUrl !== basicUserInfo.image ||
      basicInfo.tag !== basicUserInfo.tag
    ) {
      if (
        basicInfo.firstname === "" ||
        basicInfo.lastname === "" ||
        basicInfo.email === "" ||
        basicInfo.tag === ""
      ) {
        alert("All Fields are required");
        return;
      } else {
        props.setBasicUserInfo({
          firstname: basicInfo.firstname,
          lastname: basicInfo.lastname,
          email: basicInfo.email,
          image: basicInfo.imageUrl,
          tag: basicInfo.tag,
          token: basicInfo.token,
        });
        axios
          .patch(`${process.env.NEXT_PUBLIC_SERVER_URL}/update-user-info`, {
            firstname: basicInfo.firstname,
            lastname: basicInfo.lastname,
            imageUrl: basicInfo.imageUrl,
            tag: basicInfo.tag,
            token: localStorage.getItem("token"),
          })
          .then((res) => {
            console.log("res");
            console.log(res);
            if (res.status === 200) {
              alert("updated successfully.");
              props.setBasicUserInfo({
                firstname: basicInfo.firstname,
                lastname: basicInfo.lastname,
                email: basicInfo.email,
                image: basicInfo.imageUrl,
                tag: basicInfo.tag,
                token: basicInfo.token,
              });
            } else {
              alert("Profile Update Failed");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  const updateProfProfile = async () => {
    axios
      .patch(`${process.env.NEXT_PUBLIC_SERVER_URL}/update-prof-info`, {
        profession: userProfData.profession,
        linkedinUrl: userProfData.linkedinUrl,
        githubUrl: userProfData.githubUrl,
        about: userProfData.about,
        workExperience: userProfData.workExperience,
        currentlyWorkingAt: userProfData.currentlyWorkingAt,
        token: localStorage.getItem("token"),
      })
      .then((res) => {
        if (res.status === 200) {
          alert("Profile Updated Successfully");
          props.setUserProfInfo({
            profession: userProfData.profession,
            linkedinUrl: userProfData.linkedinUrl,
            githubUrl: userProfData.githubUrl,
            about: userProfData.about,
            workExperience: userProfData.workExperience,
            currentlyWorkingAt: userProfData.currentlyWorkingAt,
          });
        } else {
          alert("Profile Update Failed");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateAchievementsAndSkills = async () => {
    axios
      .patch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/set-achievements-and-skills`,
        {
          token: localStorage.getItem("token"),
          yearsOfExperience: userAchievementsAndSkills.yearsOfExperience,
          resumeUrl: userAchievementsAndSkills.resumeUrl,
          fieldOfExpertise: userAchievementsAndSkills.fieldOfExpertise,
          skills: userAchievementsAndSkills.skills,
          hackathonWins: userAchievementsAndSkills.hackathonWins,
          problemsSolved: userAchievementsAndSkills.problemsSolved,
          projects: userAchievementsAndSkills.projects,
          codechefRating: userAchievementsAndSkills.codechefRating,
          leetcodeRating: userAchievementsAndSkills.leetcodeRating,
        }
      )
      .then((res) => {
        if (res.status == 200) {
          alert("updated the achievements and skills.");
          props.setAchievementsAndSkills({
            yearsOfExperience: userAchievementsAndSkills.yearsOfExperience,
            resumeUrl: userAchievementsAndSkills.resumeUrl,
            fieldOfExpertise: userAchievementsAndSkills.fieldOfExpertise,
            skills: userAchievementsAndSkills.skills,
            hackathonWins: userAchievementsAndSkills.hackathonWins,
            problemsSolved: userAchievementsAndSkills.problemsSolved,
            projects: userAchievementsAndSkills.projects,
            codechefRating: userAchievementsAndSkills.codechefRating,
            leetcodeRating: userAchievementsAndSkills.leetcodeRating,
          });
        } else {
          alert("updating the acheivements and skils failed.");
        }
      })
      .catch((err) => {
        alert("error while updating the achievements and skills");
        console.log(err);
      });
  };

  const getRightSideOfSetting = () => {
    if (settingNum == 0) {
      return (
        <div className={styles.edit_info_title}>
          <div className={styles.user_image_div}>
            <Image
              src={url}
              alt="user image"
              width={"150px"}
              height={"150px"}
              className={styles.user_image}
              onClick={() => {
                document.getElementById("image").click();
              }}
            />
            <input
              id="image"
              type="file"
              className={styles.file_input}
              onChange={(e) => {
                setImage(e.target.files[0]);
                uploadImage(e.target.files[0]);
              }}
            />
          </div>
          <div className={styles.username}>
            <div className={styles.inner_username}>
              <h3>Firstname</h3>
              <input
                type="text"
                name="fistname"
                placeholder="Firstame"
                value={basicInfo.firstname}
                onChange={handleChange1}
              />
            </div>
            <div className={styles.inner_username}>
              <h3>Lastname</h3>
              <input
                type="text"
                name="lastname"
                placeholder="Lastname"
                value={basicInfo.lastname}
                onChange={handleChange1}
              />
            </div>
          </div>
          <div className={styles.email}>
            <h3>Email</h3>
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={basicInfo.email}
            />
          </div>
          <div className={styles.email}>
            <h3>Tagline</h3>
            <input
              type="text"
              name="tag"
              placeholder="Cool, Nerd, Student"
              value={basicInfo.tag}
              onChange={handleChange1}
            />
          </div>
          <div className={styles.btn} onClick={updateProfile}>
            Update Profile
          </div>
        </div>
      );
    } else if (settingNum == 1) {
      return (
        <div className={styles.prof_info}>
          <div className={styles.work_profession_container}>
            <div className={styles.working_container}>
              <h3>Working At</h3>
              <input
                type="text"
                name="currentlyWorkingAt"
                placeholder="Currently Working At"
                value={userProfData.currentlyWorkingAt}
                onChange={handleChange2}
                className="input"
              />
            </div>
            <div className={styles.working_container}>
              <h3>Profession</h3>
              <input
                type="text"
                name="profession"
                placeholder="Profession"
                value={userProfData.profession}
                onChange={handleChange2}
                className="input"
              />
            </div>
          </div>
          <h3>Linkedin Url</h3>
          <input
            type="text"
            name="linkedinUrl"
            placeholder="Linkedin Url"
            value={userProfData.linkedinUrl}
            onChange={handleChange2}
            className="input"
          />
          <h3>Github Url</h3>
          <input
            type="text"
            name="githubUrl"
            placeholder="Github Url"
            value={userProfData.githubUrl}
            onChange={handleChange2}
            className="input"
          />
          <h3>About</h3>
          <input
            type="text"
            name="about"
            placeholder="Description about you"
            value={userProfData.about}
            onChange={handleChange2}
            className="input"
          />
          <h3>Work Experience</h3>
          <input
            type="text"
            name="workExperience"
            placeholder="Confirm Password"
            value={userProfData.workExperience}
            onChange={handleChange2}
            className="input"
          />
          <div className={styles.btn} onClick={updateProfProfile}>
            Update Profile
          </div>
        </div>
      );
    } else if (settingNum == 2) {
      return (
        <div className={styles.personal_info}>
          <h3>Enter Old Password</h3>
          <input
            type="password"
            name="oldPassword"
            placeholder="Old Password"
            value={userData.oldPassword}
            onChange={handleChange}
            className="input"
          />
          <h3>Enter New Password</h3>
          <input
            type="password"
            name="newPassword"
            placeholder="Edit Password"
            value={userData.newPassword}
            onChange={handleChange}
            className="input"
          />
          <h3>Confirm New Password</h3>
          <input
            type="password"
            name="cnfNewPassword"
            placeholder="Confirm Password"
            value={userData.cnfNewPassword}
            onChange={handleChange}
            className="input"
          />
          <div className={styles.btn} onClick={updatePassword}>
            Update Password
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.achievements_and_skills}>
          <div className={styles.work_profession_container}>
            <div className={styles.working_container}>
              <h3>Area Of Expertise</h3>
              <input
                type="text"
                name="fieldOfExpertise"
                placeholder="Expertise"
                value={userAchievementsAndSkills.fieldOfExpertise}
                onChange={handleChange3}
                className="input"
              />
            </div>
            <div className={styles.working_container}>
              <h3>Years Of Experience</h3>
              <input
                type="text"
                name="yearsOfExperience"
                placeholder="years"
                value={userAchievementsAndSkills.yearsOfExperience}
                onChange={handleChange3}
                className="input"
              />
            </div>
          </div>
          <div className={styles.skills_container}>
            <h3>Top 4 Skills</h3>
            <div className={styles.skills_inner_container}>
              <input
                type="text"
                name="skill1"
                placeholder="1st skill"
                value={userAchievementsAndSkills.skills[0]}
                onChange={(event) => {
                  const newSkills = userAchievementsAndSkills.skills;
                  newSkills[0] = event.target.value;
                  setUserAchievementsAndSkills((prevData) => {
                    return { ...prevData, skills: newSkills };
                  });
                }}
              />
              <input
                type="text"
                name="skill2"
                placeholder="2nd skill"
                value={userAchievementsAndSkills.skills[1]}
                onChange={(event) => {
                  const newSkills = userAchievementsAndSkills.skills;
                  newSkills[1] = event.target.value;
                  setUserAchievementsAndSkills((prevData) => {
                    return { ...prevData, skills: newSkills };
                  });
                }}
              />
            </div>
            <div className={styles.skills_inner_container}>
              <input
                type="text"
                name="skill3"
                placeholder="3rd skill"
                value={userAchievementsAndSkills.skills[2]}
                onChange={(event) => {
                  const newSkills = userAchievementsAndSkills.skills;
                  newSkills[2] = event.target.value;
                  setUserAchievementsAndSkills((prevData) => {
                    return { ...prevData, skills: newSkills };
                  });
                }}
              />
              <input
                type="text"
                name="skill4"
                placeholder="4th skill"
                value={userAchievementsAndSkills.skills[3]}
                onChange={(event) => {
                  const newSkills = userAchievementsAndSkills.skills;
                  newSkills[3] = event.target.value;
                  setUserAchievementsAndSkills((prevData) => {
                    return { ...prevData, skills: newSkills };
                  });
                }}
              />
            </div>
          </div>
          <div className={styles.rating_container}>
            <div className={styles.inner_rating_container}>
              <h3>Hackathon Wins</h3>
              <input
                type="text"
                name="hackathonWins"
                placeholder="Wins"
                value={userAchievementsAndSkills.hackathonWins}
                onChange={handleChange3}
              />
            </div>
            <div>
              <h3>Projects Completed</h3>
              <input
                type="text"
                name="projects"
                placeholder="Projects"
                value={userAchievementsAndSkills.projects}
                onChange={handleChange3}
              />
            </div>
          </div>
          <div className={styles.cp_rating_container}>
            <div>
              <h3>Leetcode Rating</h3>
              <input
                type="text"
                name="leetcodeRating"
                placeholder="Rating"
                value={userAchievementsAndSkills.leetcodeRating}
                onChange={handleChange3}
              />
            </div>
            <div>
              <h3>Codechef Rating</h3>
              <input
                type="text"
                name="codechefRating"
                placeholder="Rating"
                value={userAchievementsAndSkills.codechefRating}
                onChange={handleChange3}
              />
            </div>
            <div>
              <h3>Problems Solved</h3>
              <input
                type="text"
                name="problemsSolved"
                placeholder="Solved"
                value={userAchievementsAndSkills.problemsSolved}
                onChange={handleChange3}
              />
            </div>
          </div>
          <h3>Resume Url</h3>
          <input
            type="text"
            name="resumeUrl"
            placeholder="Url"
            value={userAchievementsAndSkills.resumeUrl}
            onChange={handleChange3}
          />

          <div className={styles.btn} onClick={updateAchievementsAndSkills}>
            Update Profile
          </div>
        </div>
      );
    }
  };
  return (
    <>
      <div className={styles.edit_profile_base_container}>
        <div className={styles.edit_profile_container}>
          <div className={styles.sidebar}>
            <ul>
              {sidenNavElements.map((elem, index) => {
                return (
                  <li
                    key={index}
                    className={elem.active ? "active" : ""}
                    onClick={() => {
                      clickLiHandler(elem);
                      setSettingNum(index);
                    }}
                  >
                    {elem.elemName}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.edit_component}>{getRightSideOfSetting()}</div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setBasicUserInfo: (user) => dispatch(setBasicUserInfo(user)),
    setUserProfInfo: (user) => dispatch(setUserProfInfo(user)),
    setAchievementsAndSkills: (user) =>
      dispatch(setAchievementsAndSkills(user)),
  };
};

export default connect(null, mapDispatchToProps)(EditProfile);
