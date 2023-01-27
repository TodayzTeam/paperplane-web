import Image from "next/image";
import { useRouter } from "next/router";
import Carousel from "../home/Carousel";
import Button from "./Button";
import useScrollFadeIn from "./hooks/useScrollFadeIn";

const AfterLogin = () => {
  const animatedItem1 = useScrollFadeIn("up", 1, 0);
  const animatedItem2 = useScrollFadeIn("up", 1, 0);
  const animatedItem3 = useScrollFadeIn("up", 1, 0);
  const router = useRouter();

  return (
    <>
      <div className="container">
        <div className="title" {...animatedItem1}>
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
            <Button
              color="#6B85A4"
              text="편지 쓰기"
              onClick={() => {
                router.push("/letters/newletter");
              }}
            />
          </div>
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
        <Carousel />
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          width: 100%;
          padding: 10%;
          font-family: "Pretendard" !important;
        }
        .title {
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 700;
          gap: 100px;
          margin-bottom: 88px;
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
          margin-bottom: 340px;
          font-weight: 700;
        }
        .list {
        }
        .list-title {
          color: white;
          font-size: 40px;
          font-weight: 300;
        }
      `}</style>
    </>
  );
};

export default AfterLogin;
