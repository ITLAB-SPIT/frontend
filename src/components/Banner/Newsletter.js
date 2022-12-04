import axios from "axios";
import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import styles from "./Newsletter.module.scss";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("Submit");
  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  var message = { isValid: false, message: "Invalid input" };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setText("Sending...");
    if (email.length === 0) {
      message.message = "Please enter your email.";
      alert(message.message);
      setText("Submit");
    } else if (!validateEmail(email)) {
      message.message = "Please enter a valid email address.";
      alert(message.message);
      setText("Submit");
    } else {
      message.isValid = true;
      message.message = "Valid input.";
      axios
        .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/news-subscription`, {
          email: email,
        })
        .then((response) => {
          if (response.status === 200) {
            alert("Congrats you have subscribed to our newsletter.");
            setText("Submit");
            setEmail("");
          } else {
            alert("Something went wrong. Please try again later.");
            setText("Submit");
          }
        })
        .catch((error) => {
          console.log("error");
          console.log(error);
          alert("Message not sent");
          setText("Submit");
        });
    }
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <Col lg={12}>
      <div className={styles.news_letter_bx}>
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Subscribe to our Newsletter<br></br> & Never miss latest updates
            </h3>
            {status === "sending" && <Alert>Sending...</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className={styles.new_email_bx}>
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
                <button type={styles.submit}>{text}</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
