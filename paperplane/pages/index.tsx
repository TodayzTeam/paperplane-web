import { useState } from "react";

import PostCard from "../components/PostCard";
import Carousel from "../components/Carousel";
import AfterLogin from "../components/home/AfterLogin";
import BeforeLogin from "../components/home/BeforeLogin";

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <div className="home-container">
        <Carousel />
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
          background: linear-gradient(#a5bed8, #fff);
        }
      `}</style>
    </>
  );
}
