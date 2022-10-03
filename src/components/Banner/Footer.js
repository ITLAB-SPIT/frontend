import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailChimpForm";
import logo from "./assets/img/logo.svg";
import navItem1 from "./assets/img/nav-icon1.svg";
import navItem2 from "./assets/img/nav-icon2.svg";
import navItem3 from "./assets/img/nav-icon3.svg";

export const Footer= () => {
    return (
      <footer className="footer">
        <Container>
          <Row className="align-items:center">
            <MailchimpForm />

            <Col size ={12} sm={6}>
              <img src={logo} alt="Logo"></img>
            </Col>
            <Col sm={6} className="text-center text-sm-end">
              <div className="social-icon">
                <a href="#">
                  <img src={navItem1} alt="" />{" "}
                </a>
                <a href="#">
                  <img src={navItem2} alt="" />{" "}
                </a>
                <a href="#">
                  <img src={navItem3} alt="" />{" "}
                </a>
              </div>
              <p>CopyRight 2k22. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
}