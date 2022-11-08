// Homepage component
import React from 'react';
// import Background.css;
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from '../../components/navbar';
import Banner from '../../src/components/Banner/Banner.js';
import Feedback from '../../src/components/Banner/Feedback.js';
import WhyUs from '../../src/components/Banner/WhyUs.js';
import Contact from '../../src/components/Banner/Contact.js';
import Footer from '../../src/components/Banner/Footer.js';
import { Navbar } from '../../src/components/import.js';

const Homepage = () => {
    return ( 
        <div>
            <Navbar/>
            <Banner/>
            <WhyUs/>
            <Feedback/>
            <Contact/>
            <Footer/>
            {/* <Skills/> */}
        </div>
     );
    
}

export default Homepage;
