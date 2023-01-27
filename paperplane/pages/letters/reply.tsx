import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Axios from "axios";
import Preview from "../../components/common/Preview";

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

export default function reply() {
  // 그룹 답장인지
  const router = useRouter();
  const originalId = router.query.data || "";
  const colorType = ["RED", "GREEN", "BLUE", "BLACK"];
  let accessToken: string | null;
  const [visible, setVisible] = useState<boolean>(false);

  type InputType = {
    title: string;
    content: string;
    recipient: string;
    hashtag: Array<string>;
  };
  type letterType = {
    id: string;
    title: string;
    content: string;
    date: Date;
    isLike: boolean;
  };

  const [inputs, setInputs] = useState<InputType | null>({
    title: "",
    content: "",
    recipient: "",
    hashtag: [],
  });
  const [originalLetter, setOriginalLetter] = useState<letterType>({
    id: "",
    title: "",
    content: "",
    date: new Date(),
    isLike: false,
  });

  const titleInputRef = useRef<undefined>(null);

  const { title, content, recipient } = inputs;

  if (typeof window !== "undefined") {
    accessToken = localStorage.getItem("token");
  }

  useEffect(() => {
    // original 편지의 title, content, 좋아요, date
    const formData = new FormData();
    formData.append("postIdList", String(originalId));
    Axios.all([
      Axios.get(`/api/post/info/${originalId}`, {
        headers: {
          AccessToken: accessToken,
        },
      }),
      Axios.post(`/api/post/option`, formData, {
        headers: {
          AccessToken: accessToken,
        },
      }),
    ]).then((response) => {
      setOriginalLetter({
        ...originalLetter,
        ["id"]: String(originalId),
        ["title"]: response[0].data[0].title,
        ["content"]: response[0].data[0].content,
        ["date"]: response[0].data[0].date,
        ["isLike"]: response[1].data[0].isLike,
      });
      if (response[0].data[0].group.id !== null) {
        setInputs({
          ...inputs,
          ["recipient"]: response[0].data[0].group.code,
        });
      }
    });
  }, []);

  const inputHandler = (e: any) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const modalCloseHandler = () => {
    setVisible(false);
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

  const submitHandler = () => {
    const formdata = new FormData();
    const color = colorType[Math.floor(Math.random() * 3)];
    formdata.append("title", title);
    formdata.append("content", content);
    if (recipient !== "") {
      formdata.append("receiveGroup", "GROUP");
      formdata.append("groupCode", recipient);
    } else {
      formdata.append("receiveGroup", "RAND");
    }
    formdata.append("color", color);
    formdata.append("isReply", "true");
    formdata.append("originId", String(originalId));

    Axios.post(`/api/post/create`, formdata, {
      headers: {
        AccessToken: accessToken,
      },
    })
      .then((repsonse) => {
        router.push("/");
      })
      .catch((error) => {
        alert(error.response.data.message);
        router.push("/");
      });
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div className="title">답장쓰기____</div>
        <main className="write-container">
          <div className="load-box">
            <button
              className="load-letter"
              type="button"
              onClick={() => {
                setVisible(true);
              }}
            >
              원본 편지 보기
            </button>
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
          </section>
          <section className="submit-container">
            <button type="button" onClick={submitHandler}>
              보내기
            </button>
          </section>
        </main>
        <Preview
          margin={200}
          letter={originalLetter}
          visible={visible}
          closeHandler={modalCloseHandler}
        />
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
          background: #fffdf9;
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
          border: 1px solid var(--color-gray-04);
          color: var(--color-gray-04);
          font-size: 16px;
          background: none;
          border-radius: 25px;
          padding: 15px 30px;
          font-weight: 700;
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
          color: white;
          font-weight: 700;
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
