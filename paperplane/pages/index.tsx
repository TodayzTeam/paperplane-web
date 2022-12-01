import { useState } from "react";

import PostCard from "../components/PostCard";
import Carousel from "../components/home/Carousel";
import AfterLogin from "../components/home/AfterLogin";
import BeforeLogin from "../components/home/BeforeLogin";

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <div className="home-container">
        <div
          style={{ textAlign: "center", cursor: "pointer", paddingTop: 100 }}
          onClick={() => {
            setIsLogin(!isLogin);
          }}
        >
          로그인 상태 바꾸기(임시)
        </div>
        <div>{isLogin ? <AfterLogin /> : <BeforeLogin />}</div>
      </div>
      <style jsx>{`
        .home-container {
          position: relative;
          top: -60px;
          width: 100%;
          background: url("/image/home_background.png") no-repeat;
          background-size: 100% 120%;
        }
      `}</style>
    </>
  );
}
