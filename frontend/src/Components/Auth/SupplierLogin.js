import React from "react";
import { Col, Container,Row} from "reactstrap";
import logo from "../../assets/images/logo.png";

const SupplierLogin = () => {
  return (
    <>
      <div className="login">
        <div className="heading">
          <Container>
            <Row>
              <Col lg-6 md-6 sm-6>
                <div className="header-top-left">
                  <img src={logo} className="responsive_logo" />
                </div>
              </Col>
              <Col lg-6 md-6 sm-12>
                <div
                  className="header-top-right d-flex align-items-center
justify-content-end gap-3"
                >
                  <div class="dropdown">
                    <a
                      class="btn btn-secondary dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                   <i class="ri-global-line"></i> English (EN)
                    </a>

                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li>
                        <a class="dropdown-item" href="#">
                          Português
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                         Français
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                         Kiswahili
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                         Amharic
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="tutorial">
                    <h3 className="tutorial-header">
                     Tutorial Videos
                    </h3>

                  </div>
                  
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="loginslides">

        </div>
      </div>
    </>
  );
};

export default SupplierLogin;
