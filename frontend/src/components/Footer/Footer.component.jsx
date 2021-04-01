import { Facebook, GitHub, Instagram, Twitter } from "@material-ui/icons";
import React from "react";
import "./style.scss";

const FooterComponent = () => {
  return (
    <div className="footer">
      <div className="news-letter">
        <h4>Newsletter</h4>
        <p>
          Subscribe to be the first to hear about our exclusive offers and
          latest arrivals.
        </p>
      </div>
      <div className="shop-district">
        <h4>Shop District</h4>
        <p>
          See our latest products featuring premium materials and simple designs
        </p>
        <ul>
          <li>All Clothing</li>
          <li>Best Sellers</li>
          <li>Premium Tees</li>
          <li>Workspace</li>
        </ul>
      </div>
      <div className="customer-care">
        <h4>Customer Care</h4>
        <p>
          Learn more about our secure checkout, quick ship & get the help you
          need
        </p>
        <ul>
          <li> Contact Us </li>
          <li> Fit & Size Guide </li>
          <li> Return Policy </li>
          <li>FAQs</li>
        </ul>
      </div>
      <div className="get-in-touch">
        <h4>Get in touch</h4>
        <p> 1.877.555.9300</p>
        <div className="social-media">
          <Facebook />
          <GitHub />
          <Twitter />
          <Instagram />
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
