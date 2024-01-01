import React, { useEffect } from "react";
import { APIs } from "../const/APIs";
import { useExamContext } from "../context/FinalExamContext";
import axios from "axios";
import { Card } from "react-bootstrap"; // Import the Card component

export default function AllProducts() {
  const { Products, setProducts } = useExamContext();
  const fetchAllData = async () => {
    await axios
      .get(APIs.Ecommerce.Products.getAllProducts)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <>
      {Products.map((product) => {
        return (
          <div>
            <Card style={{ width: "18rem" }} key={product.id}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Price: {product.price}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </>
  );
}
