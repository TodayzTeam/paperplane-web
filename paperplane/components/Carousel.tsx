import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";

// import Swiper, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// const swiper = new Swiper(".swiper-container", {
//   modules: [Navigation],
//   spaceBetween: 30,
//   slidesPerView: 3,
//   loopAdditionalSlides: 1,
//   centeredSlides: true,
//   // roundLengths: true,
//   loop: true,
//   // loopAdditionalSlides: 30,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

const Carousel = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const settings = {
    spaceBetween: 30,
    navigation: {
      nextE1: ".swiper-button-next",
      prevE1: ".swiper-button-prev",
    },
    sildesPerView: 3,
    centeredSlides: true,
    loop: true,
    loopAdditionalSlides: 1,
  };

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
          >
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <PostCard />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <PostCard />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <PostCard />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <PostCard />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <PostCard />
              </SwiperSlide>
            </div>
            {/* <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div> */}
            <style jsx>{`
              .swiper-container {
                position: relative;
                width: 90vw;
                height: 300px;
              }

              .swiper-slide {
                height: 300px;
                width: 200px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 200ms linear;
                transform: scale(0.8);
              }
            `}</style>
          </Swiper>
        </>
      )}
    </>
  );
};

export default Carousel;

// react-slick

// const [activeSlide, setActiveSlide] = useState(0);

// const settings = {
//   dots: true,
//   className: "center",
//   centerMode: true,
//   infinite: true,
//   // centerPadding: "100px",
//   slidesToShow: 3,
//   speed: 500,
//   arrows: true,
//   // beforeChange: (current, next) => setActiveSlide({ activeSlide: next }),
// };
// return (
//   <>
//     <div className="container">
//       <h2> Single Item</h2>
//       <Slider {...settings}>
//         <div className="card-wrapper">
//           <PostCard />
//         </div>
//         <div>
//           <PostCard />
//         </div>
//         <div>
//           <PostCard />
//         </div>
//         <div>
//           <PostCard />
//         </div>
//         <div>
//           <PostCard />
//         </div>
//         <div>
//           <PostCard />
//         </div>
//       </Slider>
//     </div>
//     <style jsx>{style}</style>
//   </>
// );
