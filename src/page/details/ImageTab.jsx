import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./ImageTab.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function ImageTab({ data }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div id="image-tab">
      <Swiper
        spaceBetween={10}
        navigation={false}
        centeredSlides={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2"
      >
        {data.images.map((image, i) => (
          <SwiperSlide key={i}>
            <img src={image.image} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={2}
        slidesPerView={data.images.length}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {data.images.map((image, i) => (
          <SwiperSlide key={i}>
            <img src={image.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
