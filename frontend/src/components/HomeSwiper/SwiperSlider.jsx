import React from "react";
import { Button } from "@material-ui/core";
import { SwiperSlide } from "swiper/react";

const SwiperSlider = () => {
  return (
    <SwiperSlide
      className="swiper-slide"
      style={{ backgroundImage: `url('http://placekitten.com/900/1000')` }}
    >
      <div className="slide-info">
        <div className="container-div">
          <div className="text">
            <h3>This is Headphon</h3>
            <p>This is Just shop and some information about it </p>
          </div>
          <div className="info-btn">
            <Button className="btn" variant="outlined" color="primary">
              Buy Now !
            </Button>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default SwiperSlider;
