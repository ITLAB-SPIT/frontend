import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailChimpForm";
import logo from "./assets/img/logo.svg";

import navItem1 from "./assets/img/nav-icon1.svg";
import navItem2 from "./assets/img/nav-icon2.svg";
import navItem3 from "./assets/img/nav-icon3.svg";
import styles from "./Footer.module.scss";
// import styles from './Banner.module.scss';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className="align-items:center">
          <MailchimpForm />
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
