import React, { useContext } from "react";
import { Context } from "../StateManagement/Context";
import "../style/Cart.css";
import CartProduct from "./CartProduct";

const Cart = () => {
  const { basket } = useContext(Context);

  const { removefromBasket } = useContext(Context);

  let basketTotal = basket.length > 1 ? basket.reduce((amount, item) => item.price + amount, 0): null;

  console.log(basket);
  console.log(basket.length);
  console.log(basketTotal);

  return (
    <>
      <div className="cart">
        {basket.length === 0 ? (
          <p className="cart__explanation">
            Your cart is empty Ugurcan Ozyesilova
          </p>
        ) : (
          <>
            <div className="cart__products">
              {basket.map((product) => (
                <CartProduct
                  image={product.image}
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                />
              ))}
            </div>
            <div className="cart__total">
              <h2>
                Total<span>: {basketTotal} $</span>
              </h2>
              <button>Order</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
