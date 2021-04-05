import React, { useEffect, useState } from "react";
import { Button, Divider, IconButton } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";
import axios from "axios";
import { toast } from "react-toastify";

import "./style.scss";
import { LoadingCircular } from "../../../components/Loading/loading";
import ProductTabs from "./components/product-tabs";

function ProductPage({ match }) {
  const { id } = match.params;
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`/products/get-product-by-id/${id}`);
        console.log(data);
        setProduct(data.product);
      } catch (error) {
        setError(error.response.data.msg);
        toast.error(error.response.data.msg);
      }
    })();
  }, [id]);

  if (error) return <h1>{error}</h1>;
  if (!product) return <LoadingCircular />;

  return (
    <React.Fragment>
      <div className="product-page">
        <div className="container-div">
          <div className="images">
            <img src="http://placekitten.com/900/300" alt={product.title} />
          </div>
          <div className="informations">
            <div className="title">
              <h3>{product.title}</h3>
            </div>
            <div className="rating">
              <Rating
                value={product.rating || 0}
                title={`${product.reviews.length || 0} review`}
                style={{ opacity: "1" }}
                disabled
              />
            </div>
            <div className="price">
              <span>${product.price}</span>
            </div>
            <div className="body">
              <p>{product.description}</p>
              <div className="categories">
                {product.catogeries &&
                  product.catogeries.map((catogery, idx) => (
                    <span className={idx}>{catogery}</span>
                  ))}
              </div>
            </div>
            <Divider />
            <div className="add-more-or-remove">
              <div className="puls-mins">
                <IconButton>
                  <Remove />
                </IconButton>
                <span>3</span>
                <IconButton>
                  <Add />
                </IconButton>
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

export default ProductPage;
