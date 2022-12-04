import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "./assets/img/project-img1.png";
import projImg2 from "./assets/img/project-img2.jpg";
import projImg3 from "./assets/img/project-img3.png";
import { FeedBackCard } from "./FeedBackCard.js";
// import "animate.css";
import TrackVisibility from "react-on-screen";
import styles from "./Feedback.module.scss";
// import { isVisible } from "@testing-library/user-event/dist/utils";

const Feedback = () => {
  const feeds = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    // <section className={styles.project}>
    //   <Container>
    //     <Row>
    //       <Col>
    //         <TrackVisibility>
    //           {({ isVisible }) => (
    //             <div
    //               className={
    //                 isVisible ? "animate__animated animate__bounce" : ""
    //               }
    //             >
    //               <h2>Reviews that inspires us!</h2>
    //               <p>
    //                 Without change there is no innovation, creativity, or
    //                 incentive for improvement. Those who initiate change will
    //                 have a better opportunity to manage the change that is
    //                 inevitable.
    //               </p>
    //             </div>
    //           )}
    //         </TrackVisibility>
    //         <Tab.Container id={styles.projects_tabs} defaultActiveKey="first">
    //           {/* <Nav
    //             variant="pills"
    //             className={
    //               styles.nav_pills +
    //               " mb-5 justify-content-center align-items-center"
    //             }
    //             id={styles.pills_tab}
    //           > */}
    //           {/* <Nav.Item>
    //               <Nav.Link eventKey="first">Tab 1</Nav.Link>
    //             </Nav.Item>
    //             <Nav.Item>
    //               <Nav.Link eventKey="second">Tab 2</Nav.Link>
    //             </Nav.Item>
    //             <Nav.Item>
    //               <Nav.Link eventKey="third">Tab 3</Nav.Link>
    //             </Nav.Item>
    //           </Nav> */}
    //           <Tab.Content id="wow slideInUp">
    //             <Tab.Pane eventKey="first">
    //               <Row>
    //                 {feeds.map((project, index) => {
    //                   return <FeedBackCard key={index} {...project} />;
    //                 })}
    //               </Row>
    //             </Tab.Pane>
    //             <Tab.Pane eventKey="second">
    //               <Row>
    //                 {feeds.map((project, index) => {
    //                   return <FeedBackCard key={index} {...project} />;
    //                 })}
    //               </Row>
    //             </Tab.Pane>
    //             <Tab.Pane eventKey="third">
    //               <Row>
    //                 {feeds.map((project, index) => {
    //                   return <FeedBackCard key={index} {...project} />;
    //                 })}
    //               </Row>
    //             </Tab.Pane>
    //           </Tab.Content>
    //         </Tab.Container>
    //       </Col>
    //     </Row>
    //   </Container>
    // </section>

    // new review page------------->
    <section class={styles.reviews}>
      <div class={styles.reviews_title}>
        <p>Reviews</p>
      </div>
      <div>
        <div class={styles.reviews_row + " " + styles.row_first}>
          <div class={styles.reviews_card}>
            <img
              class={styles.card_img}
              src="https://temalcode-agency-portfolio.netlify.app/images/review1.png"
              alt=""
            ></img>

            <div class={styles.card_text}>
              <div class={styles.card_title}>
                <p>
                  “Excellent Information at one place with concised description”
                </p>
              </div>
              <div class={styles.card_para}>
                <p>
                  Practicing with Code.Int gave me the confidence I needed to
                  have a fun coding interview and eventually get the offers I
                  wanted.
                </p>
                <p>
                  Reading the experiences of other programmers helped me obtain
                  a wider perspective and understand what aspects I needed to
                  improve. Code.Int was great for this.{" "}
                </p>
              </div>

              <div class={styles.card_author}>
                <svg
                  width="9"
                  height="2"
                  viewBox="0 0 9 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.526123 1.13867H8.25949"
                    stroke="black"
                    stroke-width="0.822209"
                  />
                </svg>
                <p>CEO of SomeCompany</p>
              </div>
            </div>
          </div>

          <div class={styles.reviews_card}>
            <img
              class={styles.card_img}
              src="https://temalcode-agency-portfolio.netlify.app/images/review2.png"
              alt=""
            ></img>

            <div class={styles.card_text}>
              <div class={styles.card_title}>
                <p>“Provided a platform with utter necessity”</p>
              </div>
              <div class={styles.card_para}>
                <p>
                  Practicing with Code.Int gave me the confidence I needed to
                  have a fun coding interview and eventually get the offers I
                  wanted.
                </p>
                <p>
                  Adipiscing gravida rhoncus nunc, massa id. Et vestibulum
                  scelerisque morbi porttitor sapien. Feugiat faucibus gravida
                  sed adipiscing odio. Condimentum purus varius non{" "}
                </p>
              </div>

              <div class={styles.card_author}>
                <svg
                  width="9"
                  height="2"
                  viewBox="0 0 9 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.526123 1.13867H8.25949"
                    stroke="black"
                    stroke-width="0.822209"
                  />
                </svg>
                <p>CEO of SomeCompany</p>
              </div>
            </div>
          </div>

          <div class={styles.reviews_card}>
            <img
              class={styles.card_img}
              src="https://temalcode-agency-portfolio.netlify.app/images/review3.png"
              alt=""
            ></img>

            <div class={styles.card_text}>
              <div class={styles.card_title}>
                <p>“Excellent Team with Creative Mindset”</p>
              </div>
              <div class={styles.card_para}>
                <p>
                  Practicing with Code.Int gave me the confidence I needed to
                  have a fun coding interview and eventually get the offers I
                  wanted.
                </p>
                <p>
                  Adipiscing gravida rhoncus nunc, massa id. Et vestibulum
                  scelerisque morbi porttitor sapien. Feugiat faucibus gravida
                  sed adipiscing odio. Condimentum purus varius non{" "}
                </p>
              </div>

              <div class={styles.card_author}>
                <svg
                  width="9"
                  height="2"
                  viewBox="0 0 9 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.526123 1.13867H8.25949"
                    stroke="black"
                    stroke-width="0.822209"
                  />
                </svg>
                <p>CEO of SomeCompany</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div class={styles.reviews_row + " " + styles.row_second}>
          <div class={styles.reviews_card}>
            <div class={styles.card_img}>
              <img
                src="https://temalcode-agency-portfolio.netlify.app/images/review1.png"
                alt=""
              ></img>
            </div>
            <div class={styles.card_text}>
              <div class={styles.card_title}>
                <p>“Excellent Team with Creative Mindset”</p>
              </div>
              <div class={styles.card_para}>
                <p>
                  Practicing with Code.Int gave me the confidence I needed to
                  have a fun coding interview and eventually get the offers I
                  wanted.
                </p>
                <p>
                  Adipiscing gravida rhoncus nunc, massa id. Et vestibulum
                  scelerisque morbi porttitor sapien. Feugiat faucibus gravida
                  sed adipiscing odio. Condimentum purus varius non{" "}
                </p>
              </div>
              <p class={styles.card_author}>
                <svg
                  width="9"
                  height="2"
                  viewBox="0 0 9 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.526123 1.13867H8.25949"
                    stroke="black"
                    stroke-width="0.822209"
                  />
                </svg>
                CEO of SomeCompany
              </p>
            </div>
          </div>
          <div class={styles.reviews_card}>
            <div class={styles.card_img}>
              <img
                src="https://temalcode-agency-portfolio.netlify.app/images/review4.png"
                alt=""
              ></img>
            </div>
            <div class={styles.card_text}>
              <div class={styles.card_title}>
                <p>“Excellent Team with Creative Mindset”</p>
              </div>
              <div class={styles.card_para}>
                <p>
                  Practicing with Code.Int gave me the confidence I needed to
                  have a fun coding interview and eventually get the offers I
                  wanted.
                </p>
                <p>
                  Adipiscing gravida rhoncus nunc, massa id. Et vestibulum
                  scelerisque morbi porttitor sapien. Feugiat faucibus gravida
                  sed adipiscing odio. Condimentum purus varius non{" "}
                </p>
              </div>
              <p class={styles.card_author}>
                <svg
                  width="9"
                  height="2"
                  viewBox="0 0 9 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.526123 1.13867H8.25949"
                    stroke="black"
                    stroke-width="0.822209"
                  />
                </svg>
                CEO of SomeCompany
              </p>
            </div>
          </div>
          <div class={styles.reviews_card}>
            <div class={styles.card_img}>
              <img
                src="https://temalcode-agency-portfolio.netlify.app/images/review5.png"
                alt=""
              ></img>
            </div>
            <div class={styles.card_text}>
              <div class={styles.card_title}>
                <p>“Excellent Team with Creative Mindset”</p>
              </div>
              <div class={styles.card_para}>
                <p>
                  Practicing with Code.Int gave me the confidence I needed to
                  have a fun coding interview and eventually get the offers I
                  wanted.
                </p>
                <p>
                  Adipiscing gravida rhoncus nunc, massa id. Et vestibulum
                  scelerisque morbi porttitor sapien. Feugiat faucibus gravida
                  sed adipiscing odio. Condimentum purus varius non{" "}
                </p>
              </div>
              <p class={styles.card_author}>
                <svg
                  width="9"
                  height="2"
                  viewBox="0 0 9 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.526123 1.13867H8.25949"
                    stroke="black"
                    stroke-width="0.822209"
                  />
                </svg>
                CEO of SomeCompany
              </p>
            </div>
          </div>
        </div> */}
        <div class={styles.reviews_row + " " + styles.row_third}>
          <div class={styles.reviews_card}>
            <div class={styles.card_img}>
              <img
                src="https://temalcode-agency-portfolio.netlify.app/images/review6.png"
                alt=""
              ></img>
            </div>
            <div class={styles.card_text}>
              <div class={styles.card_title}>
                <p>“Excellent Team with Creative Mindset”</p>
              </div>
              <div class={styles.card_para}>
                <p>
                  Practicing with Code.Int gave me the confidence I needed to
                  have a fun coding interview and eventually get the offers I
                  wanted.
                </p>
                <p>
                  Adipiscing gravida rhoncus nunc, massa id. Et vestibulum
                  scelerisque morbi porttitor sapien. Feugiat faucibus gravida
                  sed adipiscing odio. Condimentum purus varius non{" "}
                </p>
              </div>
              <p class={styles.card_author}>
                <svg
                  width="9"
                  height="2"
                  viewBox="0 0 9 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.526123 1.13867H8.25949"
                    stroke="black"
                    stroke-width="0.822209"
                  />
                </svg>
                CEO of SomeCompany
              </p>
            </div>
          </div>
          <div class={styles.reviews_card}>
            <div class={styles.card_img}>
              <img
                src="https://temalcode-agency-portfolio.netlify.app/images/review7.png"
                alt=""
              ></img>
            </div>
            <div class={styles.card_text}>
              <div class={styles.card_title}>
                <p>“Excellent Team with Creative Mindset”</p>
              </div>
              <div class={styles.card_para}>
                <p>
                  Practicing with Code.Int gave me the confidence I needed to
                  have a fun coding interview and eventually get the offers I
                  wanted.
                </p>
                <p>
                  Adipiscing gravida rhoncus nunc, massa id. Et vestibulum
                  scelerisque morbi porttitor sapien. Feugiat faucibus gravida
                  sed adipiscing odio. Condimentum purus varius non{" "}
                </p>
              </div>
              <p class={styles.card_author}>
                <svg
                  width="9"
                  height="2"
                  viewBox="0 0 9 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.526123 1.13867H8.25949"
                    stroke="black"
                    stroke-width="0.822209"
                  />
                </svg>
                CEO of SomeCompany
              </p>
            </div>
          </div>
          <div class={styles.reviews_card}>
            <div class={styles.card_img}>
              <img
                src="https://temalcode-agency-portfolio.netlify.app/images/review1.png"
                alt=""
              ></img>
            </div>
            <div class={styles.card_text}>
              <div class={styles.card_title}>
                <p>
                  “Thanks for everything, you have a really solid product and
                  team and I will definitely recommend it further!”
                </p>
              </div>
              <div class={styles.card_para}>
                <p>
                  Practicing with Code.Int gave me the confidence I needed to
                  have a fun coding interview and eventually get the offers I
                  wanted.
                </p>
                <p>
                  Adipiscing gravida rhoncus nunc, massa id. Et vestibulum
                  scelerisque morbi porttitor sapien. Feugiat faucibus gravida
                  sed adipiscing odio. Condimentum purus varius non{" "}
                </p>
              </div>
              <p class={styles.card_author}>
                <svg
                  width="9"
                  height="2"
                  viewBox="0 0 9 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.526123 1.13867H8.25949"
                    stroke="black"
                    stroke-width="0.822209"
                  />
                </svg>
                CEO of SomeCompany
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
