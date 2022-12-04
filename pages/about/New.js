import React, { useRef, useEffect, useState } from "react";

const New = ({ name, mouseCoords, Id, animationDelay }) => {
  // const eid = useRef();
  // const ref = useRef();
  // // const [activePhoto, setActivePhoto] = useState(null);
  // const [onDiv, setOnDiv] = useState(false);

  // useEffect(() => {
  //   let diamentions = eid.current.getBoundingClientRect();
  //   let left = diamentions.left;
  //   let width = diamentions.width;

  //   let top = diamentions.top;
  //   let height = diamentions.height;

  //   // fetching coordinates of element

  //   let centerX = left + width / 2;
  //   let centerY = top + height / 2;

  //   // shifting origin to center of element
  //   let mouseX = mouseCoords.x - centerX;
  //   let mouseY = -(mouseCoords.y - centerY);

  //   // generating angle from coordinates

  //   let rad = Math.atan2(mouseY, mouseX); // In radians
  //   let deg = rad * (180 / Math.PI);

  //   let w;
  //   if (onDiv || (mouseCoords.x === 0 && mouseCoords.y === 0)) {
  //     w = "8px";
  //     ref.current.style.backgroundSize = "cover";
  //   } else {
  //     ref.current.style.backgroundSize = "";
  //     if (deg < 22.5 && deg >= -22.5) {
  //       w = "-50px";
  //     } else if (deg < 67.5 && deg >= 22.5) {
  //       w = "-108px";
  //     } else if (deg < 112.5 && deg >= 67.5) {
  //       w = "-165px";
  //     } else if (deg < 157.5 && deg >= 112.5) {
  //       w = "-223px";
  //     } else if ((deg < 180 && deg >= 157.5) || (deg < -157.5 && deg >= -180)) {
  //       w = "-280px";
  //     } else if (deg < -112.5 && deg >= -157.5) {
  //       w = "-335px";
  //     } else if (deg < -67.5 && deg >= -112.5) {
  //       w = "-395px";
  //     } else if (deg < -22.5 && deg >= -67.5) {
  //       w = "-450px";
  //     }
  //   }
  //   let x = w + " 0px";
  //   ref.current.style.backgroundPosition = x;
  // }, [mouseCoords, onDiv]);

  return (
    <div>shreyash</div>
    //   <div
    //     ref={eid}
    //     className="eid smooth-fade-in"
    //     style={{ animationDelay: `${animationDelay}s` }}
    //   >
    //     <div
    //       ref={ref}
    //       className="w-16 h-16 rounded-full bg-cover bg-center"
    //       style={{
    //         backgroundImage: `url(${name})`,
    //         animationDelay: `${animationDelay}s !important`,
    //         filter: !(onDiv || (mouseCoords.x === 0 && mouseCoords.y === 0))
    //           ? "grayscale(100%)"
    //           : "grayscale(0%)",
    //       }}
    //       onMouseOver={() => setOnDiv(true)}
    //       onMouseLeave={() => setOnDiv(false)}
    //       data-title={Id}
    //     ></div>
    //   </div>
  );
};

export default New;
