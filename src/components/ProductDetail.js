import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { APIs } from "../const/APIs";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  const fetchProductById = async () => {
    await axios
      .get(APIs.Ecommerce.Products.getSingleProduct + `/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {});
  };
  useEffect(() => {
    fetchProductById();
  }, []);

  return (
    <>
      <Navbar />;
      <div className="div">
        <div className="row">
          <div className="col-sm-12 col-lg-3 col-xl-3 col-md-12">
            <img
              width={400}
              height={400}
              className={""}
              src={product.image}
              alt=""
            />
          </div>
          <div className="col-sm-12 flex align-items-center justify-content-center col-lg-8 col-xl-8 col-md-12 ">
            <h3 className={""}>{product.title}</h3>
            <h1 className={""}>Price: Rs.${product.price}</h1>
            <p className={"align-items-center justify"}>
              {product.description}
            </p>
          </div>
        </div>
      </div>
      <Footer />;
    </>
  );
}
