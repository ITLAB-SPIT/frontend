// Homepage component
import React from 'react';
import { Container , Row, Col} from "react-bootstrap";
// import { BrowserRouter } from 'react-router-dom';
import { Footer, Navbar } from "../../src/components/Navbar/Navbar.jsx";

const Banner = () => {
    return ( 
        <div>
            <section className="Homepage" id='home'>
            {/* <Navbar /> */}
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <div>Hello</div>
                        <button onClick={() => console.log("Button is working")}>Loreum</button>
                    
                        <button onClick={() => console.log("Second button is working")}>Ipsum</button>
                    </Col>
                </Row>
            </Container>
            {/* <Footer /> */}
       </section>
        </div>
     );
    
}

export default Banner;