import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./EditProfile.module.scss";
import userAvatar from "./../../public/assets/images/userAvatar.jpg";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { setBasicUserInfo, setUserProfInfo } from "../../store/actions/main";

const EditProfile = (props) => {
  const basicUserInfo = useSelector((state) => state.main.basicUserInfo);
  const userProfInfo = useSelector((state) => state.main.userProfInfo);

  const [settingNum, setSettingNum] = useState(0);
  const [userData, setUserData] = useState({
    oldPassword: "",
    newPassword: "",
    cnfNewPassword: "",
  });
  const [userProfData, setUserProfData] = useState({
    linkedinUrl: userProfInfo.linkedinUrl,
    githubUrl: userProfInfo.githubUrl,
    about: userProfInfo.about,
    workExperience: userProfInfo.workExperience,
  });
  const [image, setImage] = useState("");
  const [url, setUrl] = useState(
    basicUserInfo.image !== "" ? basicUserInfo.image : userAvatar.src
  );
  const [basicInfo, setBasicInfo] = useState({
    firstname: basicUserInfo.firstname,
    lastname: basicUserInfo.lastname,
    email: basicUserInfo.email,
    imageUrl: basicUserInfo.image,
  });
  const [sidenNavElements, setSidenNavElements] = useState([
    {
      elemName: "Edit Basic Information",
    },
    { elemName: "Change Password" },
    { elemName: "Edit Professional Information" },
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
      basicInfo.imageUrl !== basicUserInfo.image
    ) {
      if (
        basicInfo.firstname === "" ||
        basicInfo.lastname === "" ||
        basicInfo.email === ""
      ) {
        alert("All Fields are required");
        return;
      } else {
        props.setBasicUserInfo({
          firstname: basicInfo.firstname,
          lastname: basicInfo.lastname,
          email: basicInfo.email,
          image: basicInfo.imageUrl,
          token: localStorage.getItem("token"),
        });
        axios
          .patch(`${process.env.NEXT_PUBLIC_SERVER_URL}/update-user-info`, {
            firstname: basicInfo.firstname,
            lastname: basicInfo.lastname,
            imageUrl: basicInfo.imageUrl,
            token: localStorage.getItem("token"),
          })
          .then((res) => {
            if (res.status === 200) {
              props.setBasicUserInfo({
                firstname: basicInfo.firstname,
                lastname: basicInfo.lastname,
                email: basicInfo.email,
                image: basicInfo.imageUrl,
                token: localStorage.getItem("token"),
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
        linkedinUrl: userProfData.linkedinUrl,
        githubUrl: userProfData.githubUrl,
        about: userProfData.about,
        workExperience: userProfData.workExperience,
        token: localStorage.getItem("token"),
      })
      .then((res) => {
        if (res.status === 200) {
          alert("Profile Updated Successfully");
          props.setUserProfInfo({
            linkedinUrl: userProfData.linkedinUrl,
            githubUrl: userProfData.githubUrl,
            about: userProfData.about,
            workExperience: userProfData.workExperience,
          });
        } else {
          alert("Profile Update Failed");
        }
      })
      .catch((err) => {
        log(err);
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
          <h3>Firstname</h3>
          <input
            type="text"
            name="fistname"
            placeholder="Firstame"
            value={basicInfo.firstname}
            onChange={handleChange1}
          />
          <h3>Lastname</h3>
          <input
            type="text"
            name="lastname"
            placeholder="Lastname"
            value={basicInfo.lastname}
            onChange={handleChange1}
          />
          <h3>Email</h3>
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={basicInfo.email}
          />
          <div className={styles.btn} onClick={updateProfile}>
            Update Profile
          </div>
        </div>
      );
    } else if (settingNum == 1) {
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
        <div className={styles.prof_info}>
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
  };
};

export default connect(null, mapDispatchToProps)(EditProfile);
