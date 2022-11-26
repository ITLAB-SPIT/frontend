import React from "react";
import { BsBookmarkPlus, BsFillBookmarkCheckFill } from "react-icons/bs";
import { BiLike, BiCommentDetail } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import LimitChar from "../../LimitChar/LimitChar";
import Image from "next/image";
import styles from "./BlogCard.module.scss";
import Link from "next/link";
import Router from "next/router";
import userAvatar from "./../../../../../public/assets/images/userAvatar.jpg";
const BlogCard = (props) => {
  return (
    <div className={styles.Blog_card}>
      <div className={styles.user_profile}>
        <div className={styles.profile}>
          <div className={styles.image}>
            {/* <Image
              src={props.blogData.userImageUrl}
              width="100%"
              height="100%"
              layout="fill"
              objectFit="cover"
              alt="User Image"
            /> */}
            <img
              src={
                props.blogData.userImageUrl
                  ? props.blogData.userImageUrl
                  : userAvatar.src
              }
              alt={"User Image"}
            ></img>
          </div>
          <div className={styles.info}>
            <div className={styles.name}>{props.blogData.name}</div>
            <div className={styles.circle} />
            <div className={styles.time}>
              {props.blogData.date.substr(0, 10)}
            </div>
            <div className={styles.circle} />
            <div className={styles.time}>5 min read</div>
            <div className={styles.circle} />
          </div>
        </div>
        <div className={styles.connections}>
          <div
            className={styles.connect}
            onClick={() => {
              console.log("view link was clicked, index is " + props.index);
              localStorage.setItem("blogIndex", props.index);
              Router.push("/blogs/blog");
            }}
          >
            View
            {/* <Link
              href={"/blogs/blog"}
              onClick={() => {
                console.log("view link is clicked");
                localStorage.setItem("blogIndex", props.index);
              }}
            ></Link> */}
          </div>
        </div>
      </div>
      <div className={styles.blog_container}>
        <div className={styles.card_left}>
          <div className={styles.title}>
            <LimitChar limit={40} word={props.blogData.title}></LimitChar>
          </div>
          <div className={styles.desc}>
            <LimitChar
              fitContent={true}
              limit={200}
              hoverhide={true}
              word={props.blogData.desc}
            ></LimitChar>
          </div>
          <div className={styles.card_footer}>
            <div className={styles.tags}>
              {props.blogData.tags.split(",").map((tag, index) => {
                return (
                  <div className={styles.category} key={index}>
                    <LimitChar limit={15} word={tag}></LimitChar>
                  </div>
                );
              })}
            </div>
            <div className={styles.utils}>
              <div className={styles.icon}>
                <BsBookmarkPlus />
              </div>
              <div className={styles.icon}>
                <BiCommentDetail />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card_right}>
          <img
            src={props.blogData.bannerImage}
            width="100%"
            height="100%"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
// import React from "react";
// import { BsBookmarkPlus, BsFillBookmarkCheckFill } from "react-icons/bs";
// import { BiLike, BiCommentDetail } from "react-icons/bi";
// import LimitChar from "../../LimitChar/LimitChar";
// import Image from "next/image";
// import styles from "./BlogCard.module.scss";

// const BlogCard = () => {
//   return (
//     <div className={styles.Blog_card}>
//       <div className={styles.user_profile}>
//         <div className={styles.profile}>
//           <div className={styles.image}>
//             <Image
//               src={"/assets/images/mySelf.jpg"}
//               width="100%"
//               height="100%"
//               layout="fill"
//               objectFit="cover"
//               alt="User Image"
//             />
//           </div>
//           <div className={styles.info}>
//             <div className={styles.name}>Shreyash</div>
//             <div className={styles.circle}></div>
//             <div className={styles.time}>1d ago</div>
//           </div>
//         </div>
//         <div className={styles.connections}>
//           <div className={styles.connect}>
//             <span>+</span>Follow
//           </div>
//         </div>
//       </div>
//       <div className={styles.blog_container}>
//         <div className={styles.card_left}>
//           <div className={styles.title}>
//             <LimitChar
//               limit={40}
//               word={"Build it better: Next.js API Handler"}
//             ></LimitChar>
//           </div>
//           <div className={styles.desc}>
//             <LimitChar
//               fitContent={true}
//               limit={200}
//               hoverhide={true}
//               word={
//                 "Next.js is a great tool for creating an all in one solution for your websites and web apps. It does this by combining your frontend and backend into one project allowing for more rapid development. As a whole, Next.js i Next.js is a great tool for creating an all in one solution for your websites and web apps. It does this by combining your frontend and backend into one project allowing for more rapid development. As a whole, Next.js i"
//               }
//             ></LimitChar>
//           </div>
//           <div className={styles.card_footer}>
//             <div className={styles.tags}>
//               <div className={styles.category}>
//                 <LimitChar limit={15} word={"Web development"}></LimitChar>
//               </div>
//             </div>
//             <div className={styles.utils}>
//               <div className={styles.icon}>
//                 <BsBookmarkPlus />
//               </div>
//               <div className={styles.icon}>
//                 <BiCommentDetail />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className={styles.card_right}>
//           <Image
//             src={"/assets/images/mySelf.jpg"}
//             width="100%"
//             height="100%"
//             layout="fill"
//             objectFit="cover"
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogCard;
