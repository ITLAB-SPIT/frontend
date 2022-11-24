import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Banner.module.scss";
// import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import Picture from "./assets/img/companyLogo.png";
// import styles from './Banner.module.scss';
import TrackVisibility from "react-on-screen";
// import { isVisible } from "@testing-library/user-event/dist/utils";
// import Globe from "react-globe.gl";

const name = "Tech.";
const info =
  "Reduced object rendering time by 75% by applying Floyd’s algorithm, leading to a 10% reduction in system boot time.";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Interviews", "Workshops", "Internships"];
  const period = 2100;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 4);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(period / fullText.length);
    }
  };
  // <Globe pointsData={myData} />;
  // return <Globe />;
  return (
    <div className={styles.Main_Container}>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <section className={styles.banner} id={styles.home}>
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    {/* <span className="tagline"> Welcome to my Portfolio</span> */}
                    <h1 className={styles.Crack}>Crack</h1>
                    <h1 className={styles.Tech}>
                      {" "}
                      {name}
                      <span className={styles.wrap}>{text}</span>
                    </h1>
                    <p>{info}</p>

                    <span className={styles.tagline}>
                      {/* <svg class="icon-arrow after" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 403.8 200.3" style="enable-background:new 0 0 403.8 200.3;" xml:space="preserve"> */}
                      <style type="text/css">
                        {/* .st0 {
            fill: #E5EFF5;
          } */}
                      </style>
                      <g>
                        <g>
                          <path
                            class="st0"
                            d="M25.2,114.3h317.3L290,166.6c-5.9,5.8-5.9,15.3-0.1,21.2c5.8,5.9,15.3,5.9,21.2,0.1l78.3-77.9c0,0,0,0,0,0
               c5.9-5.8,5.9-15.4,0-21.2c0,0,0,0,0,0l-78.3-77.9c-5.9-5.8-15.4-5.8-21.2,0.1c-5.8,5.9-5.8,15.4,0.1,21.2l52.6,52.3H25.2
               c-8.3,0-15,6.7-15,15C10.2,107.6,16.9,114.3,25.2,114.3z"
                          />
                        </g>
                      </g>
                      {/* </svg> */}
                      <span>Loreum</span>
                    </span>

                    <span className={styles.tagline}>
                      {/* <svg class="icon-arrow after" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 403.8 200.3" style="enable-background:new 0 0 403.8 200.3;" xml:space="preserve"> */}
                      <style type="text/css">
                        {/* .st0 {
            fill: #E5EFF5;
          } */}
                      </style>
                      <g>
                        <g>
                          <path
                            class="st0"
                            d="M25.2,114.3h317.3L290,166.6c-5.9,5.8-5.9,15.3-0.1,21.2c5.8,5.9,15.3,5.9,21.2,0.1l78.3-77.9c0,0,0,0,0,0
               c5.9-5.8,5.9-15.4,0-21.2c0,0,0,0,0,0l-78.3-77.9c-5.9-5.8-15.4-5.8-21.2,0.1c-5.8,5.9-5.8,15.4,0.1,21.2l52.6,52.3H25.2
               c-8.3,0-15,6.7-15,15C10.2,107.6,16.9,114.3,25.2,114.3z"
                          />
                        </g>
                      </g>
                      {/* </svg> */}
                      <span>Ipsum</span>
                    </span>
                    {/* <span className={styles.tagline}> Ipsum</span> */}

                    <button onClick={() => console.log("connect")}>
                      Let's Connect{" "}
                      <ArrowRightCircle size="25"></ArrowRightCircle>
                    </button>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5} id={styles.pageImg}>
              <div className={styles.earth}></div>
              {/* <img src={Picture.src} alt="Header Img" /> */}
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Banner;
