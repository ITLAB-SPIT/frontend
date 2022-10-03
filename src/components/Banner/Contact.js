import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "./assets/img/contact-img.svg";

const Contact = () =>{
    const formInitialState = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    };
    
    const [formDetails, setFormDetails] = useState(formInitialState);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setState] = useState({});
    
    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    } 
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      setButtonText("Sending...");
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
      let result = response.json();
      setFormDetails(formInitialState);
      if (result.code == 200) {
        setState({ success: true, message: "Message sent successfully" });
        setButtonText("Sent");
      } else {
        setState({
          success: false,
          message: "Something went wrong. Please try again!!",
        });
        setButtonText("Couldn't send");
      }
    };

    return (
      <section className="contact" id="connect">
        <Container>
          <Row className="align-items:center">
            <Col md={6}>
              <img src={contactImg} alt="Contact Us"></img>
            </Col>
            <Col>
              <h2>Get in touch</h2>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.firstName}
                      placeholder="First Name"
                      onChange={(e) => onFormUpdate("firstName", e.target.value)}
                    ></input>
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.lastName}
                      placeholder="Last Name"
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    ></input>
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="Email address"
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                    ></input>
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      type="tel"
                      value={formDetails.phone}
                      placeholder="Phone No."
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                    ></input>
                  </Col>
                  <Col sm={6}> 
                  <textarea row ="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}/> 
                  <button type = "submit"><span>{buttonText}</span></button>
                  </Col>
                  {
                    status.message &&
                    <Col>
                        <p className={status.success ? "success": "danger"}>
                            {status.message}
                        </p>
                    </Col>
                  }
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    );
}

export default Contact;