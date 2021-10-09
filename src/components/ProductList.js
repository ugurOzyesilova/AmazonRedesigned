import "../style/ProductList.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";


const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
      setProducts(res.data);
    });
  }, []);

  

  return (
    <>
    <div className="productlist">
      {products.slice(10, 18).map((product) => (
        <Product
          id = {product.id}
          title={product.title}
          image={product.image}
          price={product.price}
          description={product.description.slice(0, 190) + "..."}
        />
      ))}
    </div>
 
    </>
  );
};

export default ProductList;
