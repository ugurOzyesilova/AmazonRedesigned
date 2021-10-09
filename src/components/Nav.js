import React, {useContext} from "react";
import {Context} from "../StateManagement/Context"
import "../style/Nav.css";
import Avatar from "@material-ui/core/Avatar";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import { Link } from "react-router-dom";


const NavandModal = () => {

  const { basket } = useContext(Context);

  return (
    <>
      <nav className="nav">
        <Link to="/">
          <img
            src="https://i.pinimg.com/originals/71/3a/45/713a458f915977f6599326cf699cd37f.gif"
            alt=""
          />
        </Link>

        <div className="nav__right">
          <div className="search">
            <input
              className="search__input"
              type="text"
              placeholder="Search on AMAZON"
            />
            <div className="search__button">
              <SearchIcon
                style={{
                  height: "30px",
                  width: "30px",
                  border: "3px solid #ffa724",
                  background: "#ffa724",
                  borderRadius: "5px",
                  padding: "3px",
                }}
              />
            </div>
          </div>
          <LanguageIcon
            style={{
              height: "30px",
              width: "30px",
              color: "#fff",
              border: "3px solid #ffa724",
              background: "#ffa724",
              borderRadius: "5px",
              padding: "3px",
              margin: "5px",
            }}
          />

          <Avatar
            style={{
              height: "30px",
              width: "30px",
              margin: "5px",
              color: "#ffff",
              border: "3px solid #ffa724",
              background: "#ffa724",
              borderRadius: "5px",
            }}
          />
          <Link to="/yourcart">
            <ShoppingBasketOutlinedIcon
              style={{
                height: "30px",
                width: "30px",
                margin: "5px",
                marginTop: "12px",
                color: "#ffff",
                border: "3px solid #ffa724",
                background: "#ffa724",
                borderRadius: "5px",
                padding: "3px",
                cursor: "pointer",
              }}
           />
           <span>{basket.length}</span>
            
            
          </Link>

          <MenuOpenIcon
            style={{
              height: "30px",
              width: "30px",
              color: "#fff",
              margin: "5px",
            }}
          />
        </div>
      </nav>
    </>
  );
};

export default NavandModal;
