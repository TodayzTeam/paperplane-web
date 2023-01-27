import React, { useState, useEffect, useRef } from "react";
import PostCard from "../letter/PostCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Axios from "axios";
import Preview from "../common/Preview";

type simpleLetterType = {
  id: string;
  title: string;
  content: string;
  date: Date;
  likeCount: number;
};

const Carousel = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [letters, setLetters] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [letter, setLetter] = useState<simpleLetterType>({
    id: "",
    title: "",
    content: "",
    date: new Date(),
    likeCount: 0,
  });

  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDomLoaded(true);
    Axios.get("/api/post/popular").then((response) => {
      console.log(response.data);
      setLetters(response.data);
    });
  }, []);

  const modalCloseHandler = () => {
    setModalVisible(false);
  };

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
              {letters?.map((letter, idx) => (
                <SwiperSlide key={idx} className="swiper-slide">
                  <PostCard
                    data={letter}
                    size={"SMALL"}
                    clickHandler={() => {
                      setLetter(letter);
                      setModalVisible(true);
                    }}
                  />
                </SwiperSlide>
              ))}
            </div>
            <Preview
              margin={20}
              letter={letter}
              visible={modalVisible}
              closeHandler={modalCloseHandler}
            />
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
