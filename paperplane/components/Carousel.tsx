import Slider from "react-slick";
import css from "styled-jsx/css";
import PostCard from "./PostCard";

const style = css`
  .container {
    height: 100%;
    width: 100vw;
  }
  h2 {
    color: black;
  }
  Slider {
    color: black;
    width: 100%;
  }
`;

const Carousel = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div className="container">
      <h2>Center Mode</h2>
      <Slider {...settings}>
        <PostCard />
        <PostCard />
        <PostCard />
      </Slider>
    </div>
  );
};

export default Carousel;
