import { Button, Divider, MenuItem, MenuList } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";
import React, { useState } from "react";

import "./style.scss";

function ProductPage() {
  const [product, setProduct] = useState(null);
  return (
    <React.Fragment>
      <div className="product-page">
        <div className="container-div">
          <div className="images">
            <img src="http://placekitten.com/900/900" alt="" />
          </div>
          <div className="informations">
            <div className="title">
              <h3>THIS IS THE TITLE</h3>
            </div>
            <div className="rating">
              <Rating />
            </div>
            <div className="price">
              <span>$55.00</span>
            </div>
            <div className="body">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
                ex libero optio dignissimos quae reiciendis molestias officiis
                facere at molestiae.
              </p>
              <div className="categories">
                <span>computer</span>
                <span>tech</span>
                <span>books</span>
              </div>
            </div>
            <Divider />
            <div className="add-more-or-remove">
              <div className="puls-mins">
                <Remove className="icon min" />
                <span>3</span>
                <Add className="icon plus" />
              </div>
              <div className="add-to-cart">
                <Button variant="outlined">ADD TO CART</Button>
              </div>
            </div>
          </div>
        </div>
        <Divider />
        <ProductTabs product={product} />
        <Divider />
      </div>
    </React.Fragment>
  );
}

const ProductTabs = ({ product }) => {
  const [index, setIndex] = useState(0);
  const [tab, setTab] = useState([
    { id: 0, title: "Description" },
    { id: 1, title: "REVIEWS (0)" },
    { id: 2, title: "Shipping & Delivery" },
  ]);

  return (
    <div className="tabs">
      <div className="tab-name">
        {tab.map((tab) => (
          <h4 key={tab.id} onClick={() => setIndex(tab.id)}>
            {tab.title}
          </h4>
        ))}
      </div>
      <div className="tab-info">
        {index === 0 && (
          <div className="description">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
              veniam sed neque non repudiandae illo nobis, officiis doloribus, a
              minus dolorem itaque ipsa placeat dicta voluptatibus totam labore
              aperiam cupiditate! Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Obcaecati inventore modi magni illum, eligendi
              porro necessitatibus aperiam delectus explicabo maiores! Neque
              odit ipsam repudiandae, voluptas aperiam aliquam dolorem a
              incidunt!
            </p>
          </div>
        )}

        {index === 1 && (
          <div className="reviews">
            <MenuList>
              <MenuItem>this is first reveiew</MenuItem>
            </MenuList>
          </div>
        )}

        {index === 2 && (
          <div className="shipping">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              iusto ut qui voluptatum non nesciunt ipsum minus nostrum culpa
              animi.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;




