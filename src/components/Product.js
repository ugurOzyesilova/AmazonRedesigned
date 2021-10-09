import React, { useContext, useState } from "react";
import "../style/Product.css";
import { Context } from "../StateManagement/Context";

const Product = ({ title, image, description, price, id }) => {
  const { addtoBasket } = useContext(Context);
  const [showButton, setShowButton] = useState("Add to Card")
  const [disable, setDisable] = useState(false);


  const firedFunction = () => {
    setDisable(true)
    setShowButton("Product Added")
    addtoBasket({ title, price, id, image });
  }

  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product__info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="product__add">
        <strong>{price} $ </strong>
        <button disabled={disable} onClick={firedFunction}>{showButton}</button>
      </div>
    </div>
  );
};

export default Product;
