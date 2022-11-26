import styles from "./about.module.scss";
import { useEffect, useState } from "react";
import New from "./New";

const About = () => {
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const obj1 = {
    akansha:
      "https://res.cloudinary.com/dl8hmamey/image/upload/v1669253389/akansha_qjeg2q.png",
    Shreyash:
      "https://res.cloudinary.com/dl8hmamey/image/upload/v1669253389/shreyash22_rw6h3i.png",
    shubham:
      "https://res.cloudinary.com/dl8hmamey/image/upload/v1669253389/shubham_togxnv.png",
  };

  useEffect(() => {
    const body = document.getElementById("body");
    body.style.height = "110%";
    body.onmousemove = (e) => {
      setMouseCoords({
        x: e.clientX,
        y: e.clientY,
      });
    };
  }, []);

  return (
    <div id="body" className={styles}>
      <h1 class="team-title text-center">Our Team</h1>
      <div
        // className="flex flex-wrap justify-center items-center h-fit my-auto mx-auto"
        style={{
          width: "65%",
          cursor: "crosshair",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {mouseCoords &&
          Object.keys(obj1).map((key, ind) => {
            return (
              <New
                key={key}
                name={obj1[key]}
                mouseCoords={mouseCoords}
                Id={key}
                animationDelay={(ind + 1) * 0.1}
              />
            );
          })}
      </div>
    </div>
  );
};

export default About;
