import React, { useEffect } from "react";
import { APIs } from "../const/APIs";
import { useExamContext } from "../context/FinalExamContext";
import axios from "axios";
import { Row } from "react-bootstrap";
import SingleProduct from "./SingleProduct";

export default function AllProducts() {
  const { Products, setProducts } = useExamContext();
  const fetchAllData = async () => {
    await axios
      .get(APIs.Ecommerce.Products.getAllProducts)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {});
  };
  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <>
      {Products.map((product) => {
        return (
          <Row>
            {Products.map((product) => {
              return (
                <SingleProduct
                  key={product.id}
                  id={product.id}
                  price={product.price}
                  imageLink={product.image}
                  title={product.title}
                  catagory={product.catagory}
                />
              );
            })}
          </Row>
        );
      })}
    </>
  );
}
