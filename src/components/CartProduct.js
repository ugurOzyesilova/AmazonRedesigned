import React, {useContext} from "react";
import { Context } from "../StateManagement/Context";
import "../style/CartProduct.css"

const CartProduct = ({description, image, title, price, id}) => {

const { removefromBasket } = useContext(Context);
  return (
    <div className="cartproduct">
      <img src={image} alt="" />
      <div className="cartproduct__info">
        <h3>{title}</h3>
      </div>
      <div className="cartproduct__remove">
        <strong>{price} $ </strong>
        <button onClick = {() => removefromBasket(id)}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
