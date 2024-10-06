import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import logo from '../../assets/images/logo.png'
const quickLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/# ",
    display: "FAQ",
  },
  {
    path: "/",
    display: "Privacy Policy",
  },
  {
    path: "/",
    display: "Contact Us",
  },
  {
    path: "/",
    display: "Terms & Conditions",
  },
];
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
        <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer-link-title mb-4">Get In Touch</h5>
              <p className="office-info"><i class="ri-map-pin-fill"></i> Two Rivers,
              North Tower, 2nd Floor</p>
              <p className="office-info"> <i class="ri-mail-line"></i> info@tendersure.africa</p>
              <p className="office-info"> <i class="ri-phone-fill"></i> +254 709 557 000</p>
              <p className="office-info"><i class="ri-timer-line"></i> Office Time: 8.am - 7pm</p>
            </div>
          </Col>
          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer-link-title ">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="quick-links p-0 mt-3 ">
                    <Link to={item.path}><i class="ri-check-line"></i>  {item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>
   
          <Col lg="3" md="4">
            <div className="mb-4">
              <h5 className="footer-link-title">Sourcing Module Links</h5>
              <p className="section-description"><i class="ri-check-line"></i> Supplier Prequalification</p>
              <p className="section-description"><i class="ri-check-line"></i> Request for quotation</p>
              <p className="section-description"><i class="ri-check-line"></i> Tenders</p>

            </div>
          </Col>
          <Col lg-4 md-4 sm-12>
            <div className="logo footer-logo">
              <h1>
                <Link
                  to="/"
                  className="d-flex align-items-center
        gap-3"
                >
                    <img src={logo} className="responsive-logo" />
               
                </Link>
              </h1>
            </div>
            <p className="footer-logo-content">
            More and more leading organisations are playing the game by the rules, meaning there is no way back for the ones who are not yet using the system.
            </p>
          </Col>
 
          <Col lg="12">
            <div className="footer-bottom">
            <Row>
                <Col lg="6">
                <p className="copyright">
                Copyright © 2023 Tendersure Africa SEZ Ltd. All Rights Reserved.
                </p>
                </Col>

                <Col lg="6">
                <p className="bottom left" >
                <span>Home</span>
                <span>FAQ</span>
                <span>Privacy Policy</span>
                <span>Contact Us</span>
                <span>Terms & Conditions</span>

                </p>
                </Col>
            </Row>
            </div>
          </Col>
        
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
