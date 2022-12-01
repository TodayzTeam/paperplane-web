import Image from "next/image";
import Carousel from "../Carousel";
import Button from "./Button";
const AfterLogin = () => {
  return (
    <>
      <div className="container">
        <div className="title">
          <Image
            src={"/image/letterbox.png"}
            alt={"우편함"}
            width={350}
            height={350}
            style={{ opacity: 0.7 }}
          />
          <div className="title-text">
            <div className="title1">당신을 위한 종이비행기</div>
            <div className="title2">편지로 마음을 전해보세요</div>
            <Button color="#6B85A4" text="편지 쓰기" onClick={() => {}} />
          </div>
        </div>
        <div className="sub">
          편지로 마음을 전해보세요
          <Image src="/image/arrow.svg" alt={""} width={50} height={50} />
        </div>
        <div className="list">
          <div className="list-title">
            많은 공감을 얻은
            <br />이 달의 편지
          </div>
        </div>
        <Carousel />
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          width: 100%;
          padding: 10%;
          gap: 300px;
        }
        .title {
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 700;
          gap: 150px;
        }
        .title-text {
          color: white;
        }
        .title1 {
          font-size: 52px;
          margin-bottom: 20px;
        }
        .title2 {
          font-size: 40px;
          margin-bottom: 80px;
        }
        .sub {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #ffffff;
          opacity: 80%;
          font-size: 22px;
          gap: 20px;
        }
        .list {
        }
        .list-title {
          color: white;
          font-size: 40px;
          font-weight: 700;
        }
      `}</style>
    </>
  );
};

export default AfterLogin;
