import axios from "axios";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import contactImg from "./assets/img/contact-img.svg";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./Contact.module.scss";

const Contact = () => {
  const formInitialState = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialState);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setState] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    axios
      .post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/contact-interview-experiences`,
        formDetails
      )
      .then((response) => {
        if (response.status === 200) {
          alert("Message sent successfully");
          // toast.success("", {
          //   className: styles.error_container,
          // });
          setButtonText("Send");
          setFormDetails(formInitialState);
        }
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
        alert("Message not sent");
        setButtonText("Send");
      });
  };

  const CloseButton = ({ closeToast }) => (
    <i className={"material-icons " + styles.close_icon} onClick={closeToast}>
      <AiOutlineCloseCircle size={"2rem"} />
    </i>
  );

  return (
    <section className={styles.contact} id="connect">
      <Container>
        <Row className="align-items:center">
          <Col md={5}>
            <img src={contactImg.src} alt="Contact Us"></img>
          </Col>
          <Col>
            <h2>Get in touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={5} className="px-1" style={{ marginRight: "2rem" }}>
                  <input
                    type="text"
                    value={formDetails.firstname}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstname", e.target.value)}
                  ></input>
                </Col>
                <Col sm={5} className="px-1" style={{ marginRight: "2rem" }}>
                  <input
                    type="text"
                    value={formDetails.lastname}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastname", e.target.value)}
                  ></input>
                </Col>
                <Col sm={5} className="px-1" style={{ marginRight: "2rem" }}>
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  ></input>
                </Col>
                <Col sm={5} className="px-1" style={{ marginRight: "2rem" }}>
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone No."
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  ></input>
                </Col>
                <Col sm={5} className="px-1" style={{ marginRight: "3rem" }}>
                  <textarea
                    style={{ height: "8rem", width: "57rem" }}
                    row="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                  <button type="submit" style={{ borderRadius: "1rem" }}>
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p className={status.success ? "success" : "danger"}>
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
