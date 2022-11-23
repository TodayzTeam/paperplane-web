import Image from "next/image";
import Carousel from "../Carousel";
import Button from "./Button";
const BeforeLogin = () => {
  return (
    <>
      <div className="container">
        <div className="title">
          <div className="title1">누군가의 하늘로 날리는</div>
          <div className="title2">종이비행기</div>
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
        <div className="link-box">
          <div className="msg1">
            종이비행기를 통해
            <br />
            <span className="msg2">이야기 나누러 가기</span>
          </div>
          <div className="buttons">
            <Button color="#6B85A4" text="회원가입" onClick={() => {}} />
            <Button color="white" text="로그인" onClick={() => {}} />
          </div>
        </div>
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
          text-align: center;
          font-weight: 700;
        }
        .title1 {
          font-size: 46px;
          color: #6b85a4;
          margin-bottom: 20px;
        }
        .title2 {
          font-size: 52px;
          color: #7c96d8;
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
        .link-box {
          text-align: center;
          font-weight: 700;
        }
        .msg1 {
          font-size: 32px;
          color: #9197b9;
          margin-bottom: 100px;
        }
        .msg2 {
          font-size: 40px;
          color: #7e88c0;
        }
        .buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
        }
      `}</style>
    </>
  );
};

export default BeforeLogin;
