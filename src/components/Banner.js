import React from "react";
import "../style/Banner.css";
import Tilt from "react-vanilla-tilt";
const Banner = () => {
  return (
    <div className="banner">
      <Tilt  className ="tilt">
        <div className="hero__card">
          <div className="hero__card__upper">
            <img
              className="hero__card__upper__left"
              src="https://1079life.com/wp-content/uploads/2018/12/amazon_PNG11.png"
              alt=""
            />
            <h3 className="hero__card__upper__right">gift card</h3>
          </div>
          <div className="hero__card__line" />
          <img
            className="hero__card__sim"
            src="https://img.icons8.com/plasticine/2x/sim-card-chip.png"
            alt=""
          />
          <div className="hero__card__lower">
            <h3 className="hero__card__lower__name">Ugurcan Ozyesilova</h3>
            <div className="hero__card__lower__circles">
              <div className="hero__card__lower__circle1" />
              <div className="hero__card__lower__circle1" />
            </div>
          </div>
        </div>
      </Tilt>
      <p className="hero__information">
        You are on amazon.com <br />
        You can also shop on Amazon Turkey, <br />
        for millions of products with fast local delivery.
        <br /> Click here to go to amazon.com.tr
      </p>
    </div>
  );
};

export default Banner;
