import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Axios from "axios";

const GROUP_DUMMY = [
  {
    groupId: 0,
    groupName: "잇타",
  },
  {
    groupId: 1,
    groupName: "오늘의팀",
  },
];
const KEYWORD_DUMMY = ["해외여행", "여행", "책"];

export default function Newletter() {
  const router = useRouter();

  type InputType = {
    title: string;
    content: string;
    recipient: number;
    hashtag: Array<string>;
  };

  const result = useState<Array<string>>(KEYWORD_DUMMY);
  const [inputs, setInputs] = useState<InputType | null>({
    title: "",
    content: "",
    recipient: -1,
    hashtag: [],
  });

  const titleInputRef = useRef<undefined>(null);

  const { title, content, recipient, hashtag } = inputs;

  useEffect(() => {
    console.log(inputs);
  }, [inputs]);

  const inputHandler = (e: any) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const titleHandler = (e: any) => {
    if (e.target.value.length > 0) {
      if (!e.target.parentElement.classList.contains("active")) {
        e.target.parentElement.classList.add("active");
      }
    } else {
      e.target.parentElement.classList.remove("active");
    }
  };

  const recipientHandler = (e: any) => {
    // console.log(e.target.parentElement.classList);
    if (e.target.parentElement.classList.contains("active")) {
      e.target.parentElement.classList.remove("active");
    } else {
      e.target.parentElement.classList.add("active");
    }
  };

  const onClick = (e: any, groupId: number, groupName: string) => {
    const btn = e.target.parentElement.parentElement.children[0];
    btn.innerText = groupName;
    btn.parentElement.classList.remove("active");
    // groupId : 전체(-1), 나머지 고유 groupId 값
    setInputs({
      ...inputs,
      ["recipient"]: groupId,
    });
  };

  const hashtagHandler = (e: any, method: string) => {
    // add : 더하기
    // remove : 삭제
    if (method == "add") {
      setInputs({
        ...inputs,
        ["hashtag"]: [...hashtag, e.target.innerText.slice(1)],
      });
    } else {
      setInputs({
        ...inputs,
        ["hashtag"]: hashtag.filter(
          (word) => word !== e.target.innerText.slice(1)
        ),
      });
    }
  };

  const submitHandler = () => {
    // 제출하고 페이지 이동(홈으로)
    const formdata = new FormData();

    formdata.append("title", title);
    formdata.append("content", content);
    formdata.append("receiveGroup", "RAND");
    formdata.append("color", "RED");
    formdata.append("isReply", "false");
    formdata.append("keyword", JSON.stringify(hashtag));

    Axios.post(`/api/post/create`, formdata, {
      headers: {
        userId: 1,
      },
    });
    router.push("/");
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div className="title">편지쓰기____</div>
        <main className="write-container">
          <div className="load-box">
            <button className="load-letter">임시저장한 편지 불러오기</button>
          </div>
          <section className="write-wrapper">
            {/* 편지 쓰는 컴포넌트 */}
            <div className="write-title-box">
              <input
                name={"title"}
                type={"text"}
                className={"input-title"}
                onChange={(event) => {
                  inputHandler(event);
                  titleHandler(event);
                }}
                maxLength={20}
                placeholder={"제목 입력하기"}
                ref={titleInputRef}
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
                name={"content"}
                className="write-box"
                placeholder="당신의 이야기를 들려주세요"
                onChange={inputHandler}
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
              <div className="dropdown">
                <button
                  className="recipient-label"
                  type="button"
                  onClick={recipientHandler}
                >
                  전체
                </button>
                <ul className="recipient-options">
                  <>
                    <li
                      className="option"
                      onClick={(event) => onClick(event, -1, "전체")}
                    >
                      전체
                    </li>
                    {GROUP_DUMMY.map((group, idx) => {
                      return (
                        <li
                          key={idx}
                          className="option"
                          onClick={(event) =>
                            onClick(event, group.groupId, group.groupName)
                          }
                        >
                          {group.groupName}
                        </li>
                      );
                    })}
                  </>
                </ul>
              </div>
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
                <div className="hash-tag-container">
                  <div className="search-box">
                    <input
                      className="hash-tag"
                      type="text"
                      placeholder="검색어"
                    />
                  </div>
                  <div className="result-box">
                    {result[0]
                      ?.filter((all) => !hashtag.includes(all))
                      .map((word, idx) => {
                        return (
                          <span
                            key={idx}
                            className="result-tag"
                            onClick={(event) => hashtagHandler(event, "add")}
                          >
                            #{word}
                          </span>
                        );
                      })}
                  </div>
                  <div className="result-box">
                    {hashtag?.map((word, idx) => {
                      return (
                        <span
                          key={idx}
                          className="select-tag"
                          onClick={(event) => hashtagHandler(event, "remove")}
                        >
                          #{word}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div
            style={{
              border: "1px solid var(--color-gray-02)",
              marginBottom: "120px",
              width: "1000px",
              background: "var(--color-gray-02)",
            }}
          />
          <section className="submit-container">
            <button type="button" onClick={submitHandler}>
              보내기
            </button>
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
          color: var(--color-gray-03);
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
        .write-title-box.active > label {
          visibility: hidden;
        }
        .write-title-box.active > input {
          width: 1000px;
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
        .dropdown {
          display: flex;
          flex-flow: column;
        }
        .recipient-label {
          -moz-appearance: none;
          -webkit-appearance: none;
          appearance: none;
          font-family: "Pretendard";
          font-size: 15px;
          line-height: 18px;
          padding: 11px 22px;
          width: 270px;
          height: 40px;
          background: #fff url("/image/arrow-down.svg") no-repeat 93% 50%/20px
            10px;
          color: var(--color-gray-04);
          border: none;
          border-radius: 5px;
          box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);
          margin-right: 150px;
          text-align: left;
        }
        .dropdown .recipient-options {
          top: 28px;
          left: 0;
          width: 270px;
          background: white;
          color: var(--color-gray-04);
          list-style-type: none;
          padding: 0;
          border-radius: 5px;
          overflow: hidden;
          max-height: 0;
          transition: 0.3s ease-in;
          box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);
        }
        .dropdown.active .recipient-options {
          max-height: 500px;
        }
        .dropdown .option {
          padding: 11px 0px 11px 22px;
          transition: 0.1s;
        }
        .dropdown .option:hover {
          background: var(--color-gray-01);
          border: 1px solid var(--color-gray-03);
          border-radius: 5px;
        }
        .hash-tag-container {
          display: flex;
          flex-flow: column;
          width: 270px;
          margin-left: 100px;
          margin-top: 21px;
        }
        .search-box {
          height: 36px;
          border-radius: 18px;
          border: 1px solid var(--color-gray-02);
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #fff url("/image/btn-search.svg") no-repeat 93% 50%/20px
            26px;
        }
        .result-box {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-top: 10px;
        }
        .result-tag {
          outline: 0;
          min-width: 130px;
          height: 39px;
          margin-bottom: 10px;
          border: 1px solid var(--color-gray-02);
          border-radius: 20px;
          padding: 10px 44px 10px 25px;
          background: #fff url("/image/tag-check.svg") no-repeat 93% 50%/39px
            19px;
          font-size: 15px;
          color: var(--color-gray-04);
        }
        .select-tag {
          min-width: 130px;
          height: 39px;
          margin-bottom: 10px;
          border: 0;
          border-radius: 20px;
          padding: 10px 44px 10px 25px;
          background: var(--color-secondary-light) url("/image/tag-delete.svg")
            no-repeat 93% 50%/39px 19px;
          font-size: 15px;
          color: var(--color-gray-04);
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
        .submit-container {
          display: flex;
          justify-content: flex;
        }
        .submit-container > button {
          background: var(--color-primary-dark);
          width: 100px;
          height: 48px;
          text-align: center;
          outline: 0;
          border: 0;
          border-radius: 24px;
          margin-bottom: 200px;
        }
      `}</style>
    </div>
  );
}
