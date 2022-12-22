import { useState } from "react";
import Image from "next/image";

export default function newletter() {
  return (
    <div className="container">
      <div className="title">편지쓰기____</div>
      <main className="write-container">
        <div className="load-box">
          <button className="load-letter">임시저장한 편지 불러오기</button>
        </div>
        <section className="write-wrapper">
          {/* 편지 쓰는 컴포넌트 */}
          <div className="write-title-box">
            <input
              type={"text"}
              className={"input-title"}
              onChange={() => {}}
              placeholder={"제목 입력하기"}
            />
            <label className="title-description">제목을 입력하세요.</label>
          </div>
          <div className="content-wrapper">
            <span className="image">
              <Image
                alt="종이비행기"
                src="/image/paperplane.png"
                width={113}
                height={104}
              />
            </span>

            <textarea
              className="write-box"
              placeholder="당신의 이야기를 들려주세요"
            />
            <div className="back-box" />
          </div>
          <div
            style={{
              border: "1px solid var(--color-gray-02)",
              marginBottom: "100px",
              width: "1000px",
              background: "var(--color-gray-02)",
            }}
          />
        </section>
        <section className="recipient-box">{/* 받는 사람 */}</section>
      </main>
      <style jsx>{`
        .container {
          font-family: "Pretendard" !important;
          background-image: url("/image/background-group.png");
          color: black;
        }
        .title {
          font-size: 52px;
          color: var(--color-primary-deep);
          font-weight: 700;
          padding: 150px 0 0 142px;
        }
        .write-container {
          margin: 72px auto 30px;
          display: flex;
          max-width: 1000px;
          width: 100%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .write-wrapper {
          display: flex;
          flex-direction: column;
          color: #eca0a0;
          width: 100%;
        }
        .load-box {
          display: flex;
          justify-content: flex-end;
          width: 100%;
        }
        .content-wrapper {
          position: relative;
          height: 530px;
          margin-bottom: 150px;
        }
        .image {
          position: absolute;
          left: 0;
          top: 265px;
          z-index: 2;
          /* transform: rotate(1.69deg); */
        }
        .write-box {
          position: absolute;
          font-family: "Pretendard";
          padding: 55px;
          left: 65px;
          top: 0;
          background: #f9fbff;
          border: 0.5px solid var(--color-primary-deep);
          height: 500px;
          max-width: 890px;
          width: 90%;
          z-index: 1;
          font-size: 15px;
          color: var(--color-gray-04);
        }
        .write-box:focus {
          outline: none;
        }
        .write-box::placeholder {
          color: var(--color-gray-02);
        }
        .back-box {
          position: absolute;
          left: 95px;
          top: 30px;
          height: 500px;
          max-width: 890px;
          width: 90%;
          background: white;
          z-index: 0;
          border: 0.5px solid var(--color-primary-dark);
          border-radius: 20px;
        }
        .load-letter {
          border: 1px solid var(--color-secondary-deep);
          color: var(--color-secondary-deep);
          font-size: 18px;
          background: none;
          border-radius: 25px;
          padding: 15px 30px;
        }
        .write-title-box {
          display: flex;
          justify-content: flex-start;
          align-items: flex-end;
          padding: 10px;
          margin-bottom: 49px;
          margin-left: 15px;
        }
        .input-title {
          color: var(--color-primary-deep);
          background: transparent;
          border: 0 solid black;
          font-size: 40px;
          font-weight: 700;
          width: 250px;
          height: 48px;
          margin-right: 25px;
        }
        .input-title:focus {
          outline: none;
        }
        .input-title::placehoder {
          color: var(--color-primary-deep);
          opacity: 0.5;
        }
        .input-title::-webkit-input-placeholder {
          color: var(--color-primary-deep);
          opacity: 0.5;
        }
        .input-title:-ms-input-placeholder {
          color: var(--color-primary-deep);
          opacity: 0.5;
        }
        .recipient-box {
          display: flex;
          color: blue;
        }
        .letter-list {
          flex-basis: 480px;
        }
      `}</style>
    </div>
  );
}
