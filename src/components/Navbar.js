import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
// import { FaShoppingCart } from "react-icons/fa";// Import the cart icon

export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg" className="justify-content-center">
      {" "}
      {/* Add the justify-content-center class */}
      <Navbar.Brand href="#home">Grace</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        {" "}
        {/* Add the justify-content-center class */}
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/allproducts">
            All Products
          </Nav.Link>
          <Nav.Link as={Link} to="/services">
            Services
          </Nav.Link>
          <Nav.Link as={Link} to="/topsellers">
            Top Sellers
          </Nav.Link>
          {/* <Nav.Link as={Link} to="/cart">
            <FaShoppingCart /> Cart
          </Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
