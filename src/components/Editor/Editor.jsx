import React, { useRef, useState, useEffect } from "react";
import styles from "./Editor.module.scss";
import JoditEditor from "jodit-react";
import parse from "html-react-parser";
import Rightbar from "../../container/BlogPage/Rightbar/Rightbar";
import axios from "axios";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { FaGripLines } from "react-icons/fa";

const Editor = () => {
  const { data: session } = useSession();
  // if (!session) {
  //   Router.push("/login");
  // }

  const editor = useRef(null);
  const [post, setPost] = useState({
    title: "",
    content: "",
    desc: "",
    imageUrl: "",
    base64: "",
    tags: "",
  });
  //   const [imageData, setImageData] = useState({
  //     imageUrl: "",
  //     base64: "",
  //   });

  //   const [bannerSrc, setBannerSrc] = useState();
  //   const [isBannerAvailable, setIsBannerAvailable] = useState(false);

  const contentFieldChanaged = (data) => {
    setPost({ ...post, content: data });
  };

  const validatePost = () => {
    if (post.title === "" || post.desc === "" || post.content === "") {
      return false;
    }
    if (post.imageUrl === "" && post.base64 === "") {
      return false;
    }
    return true;
  };

  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };

  //   const isUrlValid = async (url) => {
  //     try {
  //       const res = await axios.get(url);
  //       console.log("res");
  //       console.log(res);
  //       if (res.status === 200) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     } catch (err) {
  //       console.log(err);
  //       return false;
  //     }
  //   };

  //   const isBannerValid = async () => {
  //     const res = await isUrlValid(post.imageUrl);
  //     if (res) {
  //       return post.imageUrl;
  //     }
  //     if (post.base64) {
  //       return post.base64;
  //     }
  //   };

  const handleInputChange = (event) => {
    setPost((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  //   const handleImageUrlChange = async (event) => {
  //     setImageData((prev) => {
  //       return { ...prev, imageUrl: event.target.value };
  //     });
  //     const res = await isUrlValid(event.target.value);
  //     if (res) {
  //       setIsBannerAvailable(true);
  //       setBannerSrc(event.target.value);
  //     }
  //     if (!res && imageData.base64) {
  //       setIsBannerAvailable(true);
  //       setBannerSrc(imageData.base64);
  //     }
  //   };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];

    getBase64(file)
      .then((result) => {
        setPost((prev) => {
          return { ...prev, base64: result };
        });
        // if (!bannerSrc) {
        //   setIsBannerAvailable(true);
        //   setBannerSrc(result);
        // }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const publish = async () => {
    const validPost = validatePost();
    if (!validPost) {
      toast.error("Title, Desc, and Blog fields cannot be empty.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: styles.error_container,
      });
      return;
    }
    axios
      .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/create-blog`, {
        name:
          localStorage.getItem("firstname") +
            " " +
            localStorage.getItem("lastname") || session.user.name,
        userImageUrl: localStorage.getItem("image") || session.user.image,
        email: localStorage.getItem("email") || session.user.email,
        blogData: post.content,
        title: post.title,
        desc: post.desc,
        bannerImage: post.imageUrl || post.base64,
        tags: post.tags,
        token: localStorage.getItem("token") || session.user.token,
      })
      .then((res) => {
        if (res.status === 200) {
          Router.push("/blogs");
        }
      })
      .catch((err) => {
        if (err.response.status === 409) {
          toast.error("Blog already exists", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            className: styles.error_container,
          });
          return;
        }
        toast.error("Something Went Wrong.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          className: styles.error_container,
        });
      });
  };

  return (
    <div className={styles.Home_page + " container"}>
      <ToastContainer newestOnTop={false} rtl={false} pauseOnFocusLoss />
      <div className={styles.Blog_Container}>
        <div className={styles.Sub_Nav}>
          <h1>Blog Description</h1>
          <button onClick={publish}>Publish</button>
        </div>

        <div className={styles.Outer_Container}>
          <div className={styles.Main_Container}>
            <div className={styles.Blog_Meta_Data}>
              <input
                type={"text"}
                placeholder={"Title"}
                value={post.title}
                name="title"
                onChange={handleInputChange}
              />
              <textarea
                placeholder={"Short Description"}
                name="desc"
                value={post.desc}
                onChange={handleInputChange}
              ></textarea>
              <input
                type={"text"}
                placeholder={"Add tags(comma separated)"}
                value={post.tags}
                name="tags"
                onChange={handleInputChange}
              />
              <div className={styles.Banner_Image}>
                <label>Banner Image</label>
                <input
                  type={"text"}
                  value={post.imageUrl}
                  name="imageUrl"
                  placeholder={"Image Url"}
                  onChange={handleInputChange}
                />
                <label>Or</label>
                <label
                  for="inputTag"
                  className={styles.label_for_upload_button}
                >
                  Select Image
                  <input
                    id="inputTag"
                    type="file"
                    accept="image/*"
                    onChange={handleFileInputChange}
                  />
                </label>
              </div>
              <div className={styles.Image_Preview_Container}>
                {(post.imageUrl || post.base64) && (
                  <Image
                    loader={() => post.imageUrl || post.base64}
                    src={post.imageUrl || post.base64}
                    width={"100%"}
                    height={"50%"}
                    layout="responsive"
                    className={styles.Image_Preview}
                    alt={"Banner Image Preview"}
                  />
                )}
              </div>
            </div>
            <div className={styles.Preview_Heading}>
              <h1>Blog Preview</h1>
            </div>
            <div className={styles.Preview_Container}>
              {parse(post.content)}
            </div>
            <div className={styles.Editor}>
              <JoditEditor
                ref={editor}
                value={post.content}
                onChange={(newContent) => contentFieldChanaged(newContent)}
              />
            </div>
          </div>
          <Rightbar />
        </div>
      </div>
    </div>
  );
};

export default Editor;
