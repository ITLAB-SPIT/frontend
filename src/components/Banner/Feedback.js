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
                  <h2>Feedbacks</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore ut, itaque illum voluptatem possimus odit et
                    repudiandae ratione nihil expedita. Enim facere illo
                    expedita hic, neque quod ipsam nam? Quibusdam? Lorem Ipsum
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry`s standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen
                    book.
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
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
