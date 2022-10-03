import { useState , useEffect} from "react";
import {Navbar,Nav,Container} from "react-bootstrap";
import logo from './assets/img/logo.svg';
import navItem1 from './assets/img/nav-icon1.svg';
import navItem2 from './assets/img/nav-icon2.svg';
import navItem3 from './assets/img/nav-icon3.svg';



export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScrolled = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScrolled);

        return () => window.removeEventListener("scroll", onScrolled);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toogle-icon"> </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Trending
              </Nav.Link>
              <Nav.Link
                href="#Projects"
                className={
                  activeLink === "Projects" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("Projects")}
              >
                Roadmap
              </Nav.Link>
              <Nav.Link
                href="#Projects"
                className={
                  activeLink === "Projects" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("Projects")}
              >
                Profile
              </Nav.Link>
              <Nav.Link
                href="#Projects"
                className={
                  activeLink === "Projects" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("Projects")}
              >
                About
              </Nav.Link>
            </Nav>
            

            {/* <span className="navbar-text">
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
              <button className="vvd" onClick={() => console.log("connect")}>
                <span>Connect krte hain</span>
              </button>
            </span> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

