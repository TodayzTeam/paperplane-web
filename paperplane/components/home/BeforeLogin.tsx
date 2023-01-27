import Image from "next/image";
import { useRouter } from "next/router";
import Carousel from "../home/Carousel";
import Button from "./Button";
import useScrollFadeIn from "./hooks/useScrollFadeIn";
const BeforeLogin = () => {
  const animatedItem1 = useScrollFadeIn("up", 1, 0);
  const animatedItem2 = useScrollFadeIn("up", 1, 0);
  const animatedItem3 = useScrollFadeIn("up", 1, 0);
  const animatedItem4 = useScrollFadeIn("up", 1, 0);
  const router = useRouter();
  return (
    <>
      <div className="container">
        <div className="title" {...animatedItem1}>
          <div className="title1">누군가의 하늘로 날리는</div>
          <div className="title2">종이비행기</div>
        </div>
        <div className="sub" {...animatedItem2}>
          편지로 마음을 전해보세요
          <Image src="/image/arrow.svg" alt={""} width={50} height={50} />
        </div>
        <div className="list" {...animatedItem3}>
          <div className="list-title">
            많은 공감을 얻은
            <br />
            <p style={{ fontSize: "46px", margin: 0 }}>이 달의 편지</p>
          </div>
        </div>
        <div className="carousel">
          <Carousel />
        </div>
        <div className="link-box" {...animatedItem4}>
          <div className="msg1">
            종이비행기를 통해
            <br />
            <span className="msg2">이야기 나누러 가기</span>
          </div>
          <div className="buttons">
            <Button
              color="#6B85A4"
              text="회원가입"
              onClick={() => {
                router.push("/login");
              }}
            />
            <Button
              color="white"
              text="로그인"
              onClick={() => {
                router.push("/login");
              }}
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          width: 100%;
          padding: 7%;
        }
        .title {
          text-align: center;
          font-weight: 700;
          margin-bottom: 300px;
          margin-top: 150px;
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
          margin-bottom: 330px;
        }
        .list {
          margin-left: 20px;
        }
        .list-title {
          color: white;
          font-size: 40px;
          font-weight: 400;
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
        .carousel {
          margin-bottom: 260px;
        }
      `}</style>
    </>
  );
};

export default BeforeLogin;
