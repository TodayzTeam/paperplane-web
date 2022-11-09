import { useState } from "react";
import PostCard from "../components/PostCard";
import Carousel from "../components/Carousel";

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <div className="container">
        {/* Carousel */}
        <Carousel />
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          width: 100%;
          height: 100vh;
          background: linear-gradient(white, #eee3d9);
        }
      `}</style>
    </>
  );
}
