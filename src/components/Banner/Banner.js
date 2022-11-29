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
  "Stay in the flow with instant dev experiences. No more hours stashing/pulling/installing locally — just click, and start coding.";

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

                    {/* <div className={styles.tagline}>
                      Master the interview & land a job worth loving.
                    </div> */}

                    <button onClick={() => console.log("connect")}>
                      Lets Connect{" "}
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
