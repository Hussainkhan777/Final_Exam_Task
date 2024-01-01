import React from "react";
import Navbar from "./Navbar";
import AllProducts from "./AllProducts";
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap"; // Import the necessary Bootstrap components

export default function () {
  return (
    <>
      <Navbar />
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h1>Discover New Arrivals</h1>
          </Col>
        </Row>
      </Container>
      <AllProducts />
      <Footer />
    </>
  );
}
