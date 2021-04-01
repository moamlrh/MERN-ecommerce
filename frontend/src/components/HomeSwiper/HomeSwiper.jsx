import React from "react";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";

import { Swiper } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";

import SwiperSlider from "./SwiperSlider";
import "./style.scss";

SwiperCore.use([Pagination, Navigation, Autoplay]);

function HomeSwiper() {
  return (
    <div className="swiper-component">
      <Swiper
        loop
        className="swiper"
        slidesPerView={1}
        navigation={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlider />
      </Swiper>
    </div>
  );
}

export default HomeSwiper;
