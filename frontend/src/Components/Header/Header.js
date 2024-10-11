import React from "react";
import { Container, Row, Col, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import ke from "../../assets/images/KE.jpg";
import en from "../../assets/images/en.png";
import pt from "../../assets/images/pt-pt.png";
import fr from "../../assets/images/fr.png";
import am from "../../assets/images/am.png";
import logo from "../../assets/images/logo.png";
import '../styles/Header.css'
const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/ Modules",
    display: "Modules",
  },
  {
    path: "/Available jobs",
    display: "Available Jobs",
  },
  {
    path: "/supplierlogin",
    display: "Supplier World",
  },
  {
    path: "/Buyer World",
    display: "Buyer World",
  },
  {
    path: "/Clients",
    display: "Clients",
  },
  {
    path: "Contact Us",
    display: "Contact Us",
  },

  {
    path: "",
  },
];
const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <Container>
          <Row>
            <Col lg-6 md-6 sm-6>
              <div className="header-top-left">
                <span className="d-flex align-items-center gap-1">
                  <img src={en}  alt="english"/> English
                </span>
                <span className="d-flex align-items-center gap-1">
                  <img src={ke} alt="swahili" /> Swahili
                </span>
                <span className="d-flex align-items-center gap-1">
                  <img src={fr} alt="france"/>
                  Français
                </span>
                <span className="d-flex align-items-center gap-1">
                  <img src={pt} alt="france" />
                  Português
                </span>
                <span className="d-flex align-items-center gap-1">
                  <img src={am} alt="amhric" /> Amharic
                </span>
                {/* <span className='header-top-help'>
            <i class="ri-phone-fill"></i> +254 741934896
            </span> */}
              </div>
            </Col>
            <Col lg-6 md-6 sm-6>
              <div
                className="header-top-right d-flex align-items-center
justify-content-end gap-3"
              >
                <Link to="/" className="d-flex align-items-center gap-1">
                  <i class="ri-facebook-fill"></i>
                </Link>
                <Link to="/" className="d-flex align-items-center gap-1">
                  <i class="ri-twitter-line"></i>
                </Link>
                <Link to="/" className="d-flex align-items-center gap-1">
                  <i class="ri-instagram-fill"></i>
                </Link>
                <Link to="/" className="d-flex align-items-center gap-1">
                  <i class="ri-linkedin-fill"></i>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="header-middle">
        <Container>
          <Row>
            <Col lg-4 md-3 sm-4>
            <div className="logo">
  <Link to="/" className="d-flex align-items-center gap-3">
    <img src={logo} alt="logo" className="responsive-logo" />
  </Link>
</div>

            </Col>
            <Col lg-2 md-3 sm-0 className="text-end">
            </Col>
            <Col lg-3 md-3 sm-4>
              <div className="header-location d-flex align-items-center gap-2">
                <span>
                  {" "}
                  <i className="ri-phone-line" style={{color: 'rgb(0, 153, 51)'}}></i>

                </span>
                <div className="header-location-content">
                  <h4>+254 709 557 000</h4>
                </div>
              </div>
            </Col>
            <Col lg-3 md-3 sm-4>
              <div className="header-location d-flex align-items-center gap-2 ">
                <span>
                  {" "}
                  <i class="ri-mail-line" style={{color: 'rgb(0, 153, 51)'}}></i>
                </span>
                <div className="header-location-content">
                  <h4>info@tendersure.africa</h4>
                </div>
              </div>
            </Col>
            <Col lg-3 md-3 sm-4>
              <div className="header-location d-flex align-items-center gap-2 ">
                <span>
                  {" "}
                  <i class="ri-map-pin-line" style={{color: 'rgb(0, 153, 51)'}}></i> 
                </span>
                <div className="header-location-content">
                <h4>Two Rivers, North Tower, 2nd
                Floor</h4>
                </div>
              </div>
            </Col>
            

          </Row>
        </Container>
      </div>
      <div className="main-navbar">
        <Container>
          <div className="navigation-wrapper d-flex align-items-center justify-content-between">
            <span className="mobile-menu">
              <i class="ri-menu-line"></i>
            </span>
            <div className="navigation">
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink to={item.path} className="nav-item" key={index}>
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="nav-right">
              <div
                className="search-box d-flex align-items-center
justify-content-end"
              >
                <input
                  type="text"
                  id=""
                  name="search"
                
                  className="d-flex align-items-center"
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
