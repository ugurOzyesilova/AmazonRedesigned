import React, { useState } from "react";
import "../style/Footer.css";

const Footer = () => {
  const [footerData, setFooterData] = useState([
    {
      title: "Get to Know Us",
      content: [
        "Careers",
        "Blog",
        "About Amazon",
        "Amazon Tours",
        "Amazon Devices",
      ],
    },
    {
      title: "Let Us Help You",
      content: [
        "Amazon and COVID-19",
        "Your Account",
        "Your Orders",
        "Shipping Policies",
        "Amazon Assistant",
      ],
    },
    {
      title: "Payment Products",
      content: [
        "Amazon Business Card",
        "Shop with Points",
        "Reload Your Balance",
        "Amazon Currency Converter",
        "Gift Cards",
      ],
    },
    {
      title: "Make Money with Us",
      content: [
        "Host an Amazon Hub",
        "Self-Publish with Us",
        "Become an Affiliate",
        "Sell apps on Amazon",
        "Sell on Amazon Business",
      ],
    },
  ]);

  return (
    <div className="footer">
      {footerData.map((data) => (
        <div className="footer__data">
          <h1>{data.title}</h1>
          <div>{data.content.map((content)=><span>- {content} -</span>)}</div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
