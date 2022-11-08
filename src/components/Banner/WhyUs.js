import meter1 from "./assets/img/meter1.svg";
import meter2 from "./assets/img/meter2.svg";
import meter3 from "./assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "./assets/img/color-sharp.png";
import styles from "./WhyUs.module.scss";

const WhyUs = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className={styles.skill} id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.skill_bx}>
              <h2>Why us?</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className={styles.item}>
                  <img src={meter1.src} alt="Image" />
                  <h5>Tech</h5>
                </div>
                <div className={styles.item}>
                  <img src={meter2.src} alt="Image" />
                  <h5>FinTech</h5>
                </div>
                <div className={styles.item}>
                  <img src={meter3.src} alt="Image" />
                  <h5>NonTech</h5>
                </div>
                <div className={styles.item}>
                  <img src={meter1.src} alt="Image" />
                  <h5>Analyst</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

export default WhyUs;