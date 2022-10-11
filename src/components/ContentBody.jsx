import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import "swiper/css/bundle";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../components/ContentBody.css";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export const ContentBody = ({ items }) => {
  const bodyItems = useRef(null);
  if (items.length != 0) {
    console.log(items[0].recipe.label);
  }
  return (
    <>
      <div className="recipeContent" ref={bodyItems}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <div className="itemsContainer">
            {items.map((item, index) => {
              return (
                <SwiperSlide>
                  <div className="recipeItem" key={index}>
                    <img
                      src={item["recipe"]["image"]}
                      alt=""
                      className="recipeImg"
                    />
                    <div className="recipeTitle">
                      {item["recipe"]["label"].substr(0, 20)}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </>
  );
};
