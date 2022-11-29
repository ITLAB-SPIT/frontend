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
    <section className={styles.project}>
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <h2>Reviews that inspires us!</h2>
                  <p>
                    Without change there is no innovation, creativity, or
                    incentive for improvement. Those who initiate change will
                    have a better opportunity to manage the change that is
                    inevitable.
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id={styles.projects_tabs} defaultActiveKey="first">
              <Nav
                variant="pills"
                className={
                  styles.nav_pills +
                  " mb-5 justify-content-center align-items-center"
                }
                id={styles.pills_tab}
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="wow slideInUp">
                <Tab.Pane eventKey="first">
                  <Row>
                    {feeds.map((project, index) => {
                      return <FeedBackCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {feeds.map((project, index) => {
                      return <FeedBackCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {feeds.map((project, index) => {
                      return <FeedBackCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Feedback;
