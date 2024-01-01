import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container className="py-5">
        <Row>
          <Col md={3}>
            <h5>Company Information</h5>
            <p>
              About Us <br />
              Latest Posts <br />
              Contact Us <br />
              Shop
            </p>
          </Col>
          <Col md={3}>
            <h5>Helpful Links</h5>
            <p>
              Tracking <br />
              Order Status <br />
              Delivery <br />
              Shipping Info <br />
              FAQ
            </p>
          </Col>
          <Col md={3}>
            <h5>Useful Links</h5>
            <p>
              Special Offers <br />
              Gift Cards <br />
              Advertising <br />
              Terms of Use
            </p>
          </Col>
          <Col md={3}>
            <div>
              <h5>Get in the Know</h5>
              <div className="d-flex align-items-center justify-content-between">
                <p>Enter email</p>
                <img
                  className="h-12 w-12"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </div>
            </div>
          </Col>
        </Row>
        <hr />
        <Row className="align-items-center justify-content-between">
          <Col md={2}>
            <p>© 2020 FasTech Systems Private Limited Sukkur</p>
          </Col>
          <Col md={2}>
            <p>Privacy Policy Terms & Conditions</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
