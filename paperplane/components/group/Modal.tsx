import { useState, useRef } from "react";
import { useRouter } from "next/router";
import Axios from "axios";

const Modal = ({ clickHandler, closeHandler, code = "", visible }) => {
  const bgd = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const [groupName, setGroupName] = useState<string>("");

  const inputHandler = (e: any, type: string) => {
    const content = e.target.parentElement.children[0].value;
    console.log(content);
    if (type === "JOIN") {
      // 초대 코드에 해당하는 그룹 이름 확인하기
      // 틀리면 주황색 글씨로 틀렸다고 알림, 맞으면 groupName 설정
      setGroupName("오늘의팀");
      clickHandler(2); // 입장하겠냐는 컨펌 안내
    } else if (type === "CREATE") {
      setGroupName(content);
      clickHandler(4);
    }
  };

  const confirmHandler = async (type: string) => {
    if (type === "JOIN") {
      // 그룹 조인 요청 url 수정 필요
      // await Axios.post(`/api/group/join?code=`, {
      //   headers: {
      //     accessToken:
      //       "",
      //   },
      // });
      // router.reload();
    } else if (type === "CREATE") {
      // await Axios.post(`/api/group/create?name=${groupName}`, {
      //   headers: {
      //     accessToken:
      //       "",
      //   },
      // });
      // router.reload();
    } else {
      // 그룹 나가기
      console.log("그룹 나가기");
      clickHandler(7);
    }
  };
  return (
    <>
      <div className="background" ref={bgd} />
      {visible[0] ? (
        <div className="container" style={{ padding: "32px 24px 24px" }}>
          <button
            className="cancel-button"
            onClick={closeHandler}
            type="button"
          >
            <img src="/image/modal-delete.svg" width={40} height={40} />
          </button>
          <img
            src={"/image/modal-blue.svg"}
            alt={"비행기"}
            style={{ marginBottom: "27px" }}
            width={60}
            height={60}
          />
          <div className="button-wrapper">
            <button
              className="select-button"
              onClick={() => {
                clickHandler(1);
              }}
              type="button"
            >
              초대코드로 입장하기
            </button>
            <button className="select-button" onClick={() => clickHandler(3)}>
              그룹 만들기
            </button>
          </div>
        </div>
      ) : visible[1] ? (
        // 초대코드로 입장하기
        <>
          <div className="container">
            <button
              className="cancel-button"
              onClick={closeHandler}
              type="button"
            >
              <img src="/image/modal-delete.svg" width={40} height={40} />
            </button>
            <div
              style={{
                fontSize: "18px",
                fontWeight: 700,
                textAlign: "center",
                color: "var(--color-gray-04)",
                marginBottom: "30px",
              }}
            >
              초대코드로 입장하기
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <input type={"text"} placeholder="코드를 입력하세요." />
              <button
                className="whole-btn"
                type="button"
                onClick={(event) => {
                  inputHandler(event, "JOIN");
                }}
              >
                입력
              </button>
            </div>
          </div>
        </>
      ) : // 입장하시겠습니까?
      visible[2] ? (
        <>
          <div className="container" style={{ marginTop: "46px" }}>
            <img
              src={"/image/modal-blue.svg"}
              alt={"비행기"}
              style={{ marginBottom: "20px" }}
              width={60}
              height={60}
            />
            <div
              style={{
                fontSize: "18px",
                fontWeight: 700,
                textAlign: "center",
                color: "var(--color-gray-04)",
                marginBottom: "45px",
              }}
            >
              &#39;{groupName}&#39;에 입장하시겠습니까?
            </div>
            <div
              style={{
                width: "100%",
                height: "58px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <button className="left-btn" type="button" onClick={closeHandler}>
                취소
              </button>
              <button
                className="right-btn"
                type="button"
                onClick={() => confirmHandler("JOIN")}
              >
                입장하기
              </button>
            </div>
          </div>
        </>
      ) : visible[3] ? (
        <>
          <div className="container">
            <button
              className="cancel-button"
              onClick={closeHandler}
              type="button"
            >
              <img src="/image/modal-delete.svg" width={40} height={40} />
            </button>
            <div
              style={{
                fontSize: "18px",
                fontWeight: 700,
                textAlign: "center",
                color: "var(--color-gray-04)",
                marginBottom: "30px",
              }}
            >
              그룹 만들기
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <input type={"text"} placeholder="그룹명을 정해주세요." />
              <button
                className="whole-btn"
                type="button"
                onClick={(event) => {
                  inputHandler(event, "CREATE");
                }}
              >
                확인
              </button>
            </div>
          </div>
        </>
      ) : visible[4] ? (
        <>
          <div className="container" style={{ marginTop: "46px" }}>
            <img
              src={"/image/modal-blue.svg"}
              alt={"비행기"}
              style={{ marginBottom: "20px" }}
              width={60}
              height={60}
            />
            <div
              style={{
                fontSize: "18px",
                fontWeight: 700,
                textAlign: "center",
                color: "var(--color-gray-04)",
                marginBottom: "45px",
              }}
            >
              &#39;{groupName}&#39;을 만드시겠습니까?
            </div>
            <div
              style={{
                width: "100%",
                height: "58px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <button className="left-btn" type="button" onClick={closeHandler}>
                취소
              </button>
              <button
                className="right-btn"
                type="button"
                onClick={() => confirmHandler("CREATE")}
              >
                만들기
              </button>
            </div>
          </div>
        </>
      ) : visible[5] ? (
        <>
          <div className="container" style={{ marginTop: "33px" }}>
            <button
              className="cancel-button"
              onClick={closeHandler}
              type="button"
            >
              <img src="/image/modal-delete.svg" width={40} height={40} />
            </button>
            <img
              src={"/image/modal-blue.svg"}
              alt={"비행기"}
              style={{ marginBottom: "19px" }}
              width={60}
              height={60}
            />
            <div
              style={{
                fontSize: "18px",
                fontWeight: 700,
                textAlign: "center",
                color: "var(--color-gray-04)",
                marginBottom: "11px",
              }}
            >
              0n3uI_T3ann{code}
            </div>
            <span style={{ marginBottom: "32px" }}>{groupName} 초대코드</span>
            <div
              style={{
                width: "100%",
                height: "58px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <button
                className="whole-btn"
                type="button"
                onClick={(event) => {
                  // 코드 복사
                }}
              >
                초대코드 복사하기
              </button>
            </div>
          </div>
        </>
      ) : visible[6] ? (
        <>
          <div className="container" style={{ marginTop: "46px" }}>
            <img
              src={"/image/modal-red.svg"}
              alt={"비행기"}
              style={{ marginBottom: "20px" }}
              width={60}
              height={60}
            />
            <div
              style={{
                fontSize: "18px",
                fontWeight: 700,
                textAlign: "center",
                color: "var(--color-gray-04)",
                marginBottom: "11px",
              }}
            >
              {groupName}에서 나가시겠습니까?
            </div>
            <span style={{ marginBottom: "32px" }}>
              그룹에서 나가면 주고 받은 편지가 사라져요.
            </span>
            <div
              style={{
                width: "100%",
                height: "58px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <button className="left-btn" type="button" onClick={closeHandler}>
                취소
              </button>
              <button
                className="right-btn"
                style={{ background: "var(--color-emphasize-dark)" }}
                type="button"
                onClick={() => confirmHandler("OUT")}
              >
                나가기
              </button>
            </div>
          </div>
        </>
      ) : visible[7] ? (
        <>
          <div className="container" style={{ marginTop: "46px" }}>
            <img
              src={"/image/modal-blue.svg"}
              alt={"비행기"}
              style={{ marginBottom: "20px" }}
              width={60}
              height={60}
            />
            <div
              style={{
                fontSize: "18px",
                fontWeight: 700,
                textAlign: "center",
                color: "var(--color-gray-04)",
                marginBottom: "45px",
              }}
            >
              {groupName}에서 나갔습니다.
            </div>
            <div
              style={{
                width: "100%",
                height: "58px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <button
                className="whole-btn"
                type="button"
                onClick={(event) => {
                  router.reload();
                }}
              >
                확인
              </button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      <style jsx>{`
        .background {
          background-color: var(--color-black);
          opacity: 0.5;
          z-index: 10;
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          box-sizing: border-box;
        }
        .container {
          width: 100%;
          max-width: 450px;
          background-color: #fff;
          box-shadow: 2px 5px 7px 2px rgba(0, 0, 0, 0.15);
          border-radius: 30px;
          z-index: 11;
          position: fixed;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 40px;
        }
        .cancel-button {
          background: none;
          position: absolute;
          top: -15px;
          right: -15px;
        }
        .button-wrapper {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .select-button {
          max-width: 400px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 0.05em;
          margin-bottom: 15px;
          color: var(--color-gray-03);
          background: var(--color-primary-light);
          border-radius: 10px;
          height: 58px;
          border: 0;
          outline: 0;
        }
        .cancel-button {
          border: 0;
          outline: 0;
        }
        input[type="text"] {
          color: black;
          background: none;
          border: 0;
          height: 40px;
          max-width: 280px;
          width: 60%;
          border-bottom: 1px solid var(--color-gray-03);
          margin-bottom: 60px;
        }
        .whole-btn {
          width: 100%;
          color: white;
          background: var(--color-primary-dark);
          font-size: 15px;
          font-weight: 700;
          text-align: center;
          outline: 0;
          border: 0;
          border-radius: 0px 0px 30px 30px;
          height: 58px;
        }
        .left-btn {
          width: 50%;
          color: var(--color-gray-03);
          font-weight: 700;
          font-size: 15px;
          text-align: center;
          background: var(--color-gray-01);
          border-bottom-left-radius: 30px;
          outline: 0;
          border: 0;
        }
        .right-btn {
          width: 50%;
          color: white;
          font-weight: 700;
          font-size: 15px;
          text-align: center;
          background: var(--color-primary-dark);
          border-bottom-right-radius: 30px;
          outline: 0;
          border: 0;
        }
      `}</style>
    </>
  );
};

export default Modal;
