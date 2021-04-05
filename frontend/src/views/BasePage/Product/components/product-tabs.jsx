import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {
  Avatar,
  Button,
  Divider,
  MenuItem,
  MenuList,
  TextField,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { toast } from "react-toastify";
import axios from "axios";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function ProductTabs({ product }) {
  const [index, setIndex] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [reviewValue, setReviewValue] = useState("");
  const [reviews, setReviews] = useState([...product.reviews]);
  const handleChange = (event, newValue) => setIndex(newValue);

  const handleAddReviewClicked = async () => {
    if (!reviewText || !reviewValue) return;
    try {
      const { data } = await axios.post(
        `/products/add-new-reviews/${product._id}`,
        {
          text: reviewText,
          rating: reviewValue,
        }
      );
      setReviews([...reviews, data.review]);
      setReviewValue("");
      setReviewText("");
    } catch (error) {
      const err =
        error.response.data.msg || "There is unknown Error, Try again !";
      toast.error(err);
    }
  };

  return (
    <div className="product-tabs">
      <Tabs value={index} onChange={handleChange}>
        <Tab label="Full Description" {...a11yProps(0)} />
        <Tab label={`Reviews (${reviews.length})`} {...a11yProps(1)} />
        <Tab label="Shipping" {...a11yProps(2)} />
      </Tabs>
      <Description index={index} product={product} />
      <Reviews
        index={index}
        product={product}
        reviews={reviews}
        reviewValue={reviewValue}
        setReviewValue={setReviewValue}
        reviewText={reviewText}
        setReviewText={setReviewText}
        handleAddReviewClicked={handleAddReviewClicked}
      />
      <Shipping index={index} />
    </div>
  );
}


const Description = ({ index, product }) => (
  <TabPanel value={index} index={0}>
    <div className="description">
      <p>{product.description}</p>
    </div>
  </TabPanel>
);
const Shipping = ({ index }) => (
  <TabPanel value={index} index={2}>
    <div className="shipping">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto ut
        qui voluptatum non nesciunt ipsum minus nostrum culpa animi.
      </p>
    </div>
  </TabPanel>
);
const Reviews = ({
  index,
  reviews,
  reviewValue,
  setReviewValue,
  reviewText,
  setReviewText,
  handleAddReviewClicked,
}) => (
  <TabPanel value={index} index={1}>
    <div className="reviews">
      <MenuList>
        {reviews.length !== 0 ? (
          reviews.map((review) => (
            <div className="review-list">
              <MenuItem key={review._id} className="item">
                <div className="user-info">
                  <Avatar />
                  <Typography>{review.text}</Typography>
                </div>
                <Rating disabled value={review.rating} />
              </MenuItem>
            </div>
          ))
        ) : (
          <Typography>There is no reviews on this product yet !</Typography>
        )}
      </MenuList>
      <Divider className="divider" />
      <div className="review-input">
        <Rating
          value={reviewValue}
          onChange={(_, val) => setReviewValue(val)}
          className="rating"
        />
        <TextField
          fullWidth
          rows={3}
          multiline
          value={reviewText}
          variant="outlined"
          className="text-field"
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Your opinion about this product.."
        />
        <Button variant="outlined" onClick={handleAddReviewClicked}>
          Add Your Review
        </Button>
      </div>
    </div>
  </TabPanel>
);
