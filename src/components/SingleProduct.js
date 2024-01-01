import React from "react";

import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function SingleProduct({
  id,
  imageLink,
  price,
  title,
  description,
  catagory,
}) {
  return (
    <Col sm={12} md={6} lg={3} key={id}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imageLink} />{" "}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Price: {price}</Card.Text>{" "}
          <Link to={`/products/${id}`} className="btn btn-dark">
            Visit Product
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}
