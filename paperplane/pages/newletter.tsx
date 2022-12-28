import { useState } from "react";
import Image from "next/image";

export default function newletter() {
  return (
    <div className="container">
      <form>
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
          <section className="recipient-wrapper">
            <span className="send-title">받는 사람</span>
            <div className="recipient-content">
              {/* 받는 사람 선택하기 */}
              <select className="recipient-dropdown">
                <option value="whole">전체</option>
                <option value="whole">전체</option>
                <option value="whole">전체</option>
                <option value="whole">전체</option>
              </select>
              <div style={{ display: "flex", flexFlow: "column" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ margin: "0 36px 0 0", width: "65px" }}>
                    #해시태그
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      margin: 0,
                      color: "var(--color-gray-02)",
                    }}
                  >
                    해시태그에 관심이 있는 사람들에게 편지가 전송돼요.
                  </p>
                </div>
                <div className="search-box">
                  <input
                    className="hash-tag"
                    type="text"
                    placeholder="검색어"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </form>
      <style jsx>{`
        .container {
          font-family: "Pretendard" !important;
          background: white;
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
          margin-left: 55px;
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
        .send-title {
          color: var(--color-primary-deep);
          background: transparent;
          border: 0 solid black;
          font-size: 40px;
          font-weight: 700;
          margin-bottom: 90px;
        }
        .recipient-wrapper {
          display: flex;
          width: 100%;
          margin-top: 100px;
          flex-flow: column;
          margin: 0 auto;
          width: 80%;
        }
        .recipient-content {
          display: flex;
          flex-flow: row;
          margin-bottom: 136px;
        }
        .recipient-dropdown {
          -moz-appearance: none;
          -webkit-appearance: none;
          appearance: none;
          font-family: "Pretendard";
          font-size: 15px;
          line-height: 18px;
          padding: 11px 22px;
          width: 270px;
          height: 40px;
          background: #fff url("image/arrow-down.svg") no-repeat 93% 50%/20px
            10px;
          color: var(--color-gray-04);
          border: none;
          border-radius: 5px;
          box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);
          margin-right: 150px;
        }
        .search-box {
          width: 270px;
          height: 36px;
          border-radius: 18px;
          border: 1px solid var(--color-gray-02);
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left: 100px;
          margin-top: 21px;
        }
        .hash-tag {
          background: transparent;
          border: none;
          height: 18px;
          margin-left: 25px;
          color: var(--color-gray-04);
        }
        .hash-tag:focus {
          outline: none;
        }
        .letter-list {
          flex-basis: 480px;
        }
      `}</style>
    </div>
  );
}
