import React, { useState, useEffect, useRef } from "react";
import PostCard from "../PostCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
        <>
          <Swiper
            className="swiper-container"
            slidesPerView={3}
            centeredSlides
            loop
            // onInit={(swiper) => {
            //   // @ts-ignore
            //   // eslint-disable-next-line no-param-reassign
            //   swiper.params.navigation.prevEl = prevRef.current;
            //   // @ts-ignore
            //   // eslint-disable-next-line no-param-reassign
            //   swiper.params.navigation.nextEl = nextRef.current;
            //   // swiper.navigation.update();
            // }}
            // navigation={{
            //   prevEl: prevRef.current ? prevRef.current : undefined,
            //   nextEl: nextRef.current ? nextRef.current : undefined,
            // }}
          >
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <PostCard data={[]} size={"SMALL"} />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <PostCard data={[]} size={"SMALL"} />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <PostCard data={[]} size={"SMALL"} />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <PostCard data={[]} size={"SMALL"} />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <PostCard data={[]} size={"SMALL"} />
              </SwiperSlide>
            </div>
            {/* <div className="swiper-button-prev" ref={prevRef}></div>
            <div className="swiper-button-next" ref={nextRef}></div> */}
            <style jsx>{`
              .swiper-container {
                position: relative;
                width: 90vw;
                height: 500px;
              }
              .swiper-slide {
                height: 300px;
                width: 200px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 200ms linear;
                transform: scale(1);
              }
            `}</style>
          </Swiper>
        </>
      )}
    </>
  );
};

export default Carousel;
