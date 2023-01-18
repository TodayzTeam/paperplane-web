import Image from "next/image";
import GroupCard from "../components/group/GroupCard";
import PostCard from "../components/PostCard";
import Modal from "../components/group/Modal";
import { useEffect, useState } from "react";
import Axios from "axios";

export default function group() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [modalVisible, setModalVisible] = useState<Array<boolean>>([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  let accessToken: string | null;

  if (typeof window !== "undefined") {
    // Perform localStorage action
    accessToken = localStorage.getItem("token");
  }

  // useEffect(() => {
  //   console.log(modalVisible);
  // }, [modalVisible]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // 내가 속한 그룹
    Axios.get("/api/group/mygroup", {
      headers: {
        AccessToken: accessToken,
      },
    })
      .then((response) => {
        // console.log(response.data);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  }, []);

  // modal click
  const modalClickHandler = (modalNumber: number) => {
    // modalVisible[modalNumber] => true 나머지 => false
    setModalVisible(modalVisible.map((modal, idx) => idx === modalNumber));
  };
  // modal close handler
  const modalCloseHandler = () => {
    setModalVisible(new Array(8).fill(false));
  };

  return (
    <div className="container">
      <div className="title">그룹____</div>
      <div className="group-container">
        <nav style={{ width: "920px", display: "flex", alignItems: "center" }}>
          <ul className="group-list">
            <li className="tag-container">
              <button className="tag-button">잇타</button>
            </li>
            <li className="tag-container">
              <button className="tag-button">오늘의팀</button>
            </li>
            <li className="tag-container">
              <button className="tag-button">오늘의팀오늘의팀</button>
            </li>
            <li className="tag-container">
              <button className="tag-button">오늘의팀오늘의팀오늘의팀</button>
            </li>
            <li className="tag-container">
              <button className="tag-button">오늘의팀오늘의팀오늘의팀</button>
            </li>
          </ul>
          <Image
            src="/image/group-add.svg"
            alt={"그룹 추가"}
            width={41}
            height={41}
            // style={{ margin: "85px 19px 120px" }}
            style={{ margin: "100px 19px 110px" }}
          />
        </nav>
        <div className="content-box">
          <aside className="group-box">
            <div className="list-title-box">
              <h1 style={{ color: "#E890A5", margin: 0, fontSize: "40px" }}>
                오늘의팀
              </h1>
            </div>
            <div className="member-title">
              <span style={{ fontSize: "18px", color: "#585858" }}>구성원</span>
              <div className="mix-button">
                <div style={{ color: "#787878" }}>초대 코드 복사</div>
                <button>
                  <Image
                    src="/image/link.svg"
                    alt={"초대 코드 복사"}
                    width={35}
                    height={35}
                  />
                </button>
              </div>
            </div>
            {/* 구성원 컴포넌트 */}
            <ul className="member-list">
              <li>
                <Image
                  src="/image/profile.svg"
                  alt=""
                  width={100}
                  height={100}
                />
              </li>
              <li>
                <Image
                  src="/image/profile.svg"
                  alt=""
                  width={100}
                  height={100}
                />
              </li>
              <li>
                <Image
                  src="/image/profile.svg"
                  alt=""
                  width={100}
                  height={100}
                />
              </li>
              <li>
                <Image
                  src="/image/profile.svg"
                  alt=""
                  width={100}
                  height={100}
                />
              </li>
              <li>
                <Image
                  src="/image/profile.svg"
                  alt=""
                  width={100}
                  height={100}
                />
              </li>
              <li>
                <Image
                  src="/image/profile.svg"
                  alt=""
                  width={100}
                  height={100}
                />
              </li>
            </ul>
            <button>
              <div className="mix-button">
                <Image
                  style={{ marginLeft: "13px" }}
                  src="/image/sign-out.svg"
                  alt={"그룹 나가기"}
                  width={35}
                  height={35}
                />
                <div style={{ marginLeft: "5px", color: "#FD9D74" }}>
                  그룹에서 나가기
                </div>
              </div>
            </button>
          </aside>
          <main className="letter-list">
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <div className="search-bar">
                <Image src="/image/search.svg" alt="" width={24} height={24} />
              </div>
              <PostCard data={[]} size={"BIG"} />
              <PostCard data={[]} size={"BIG"} />
              <PostCard data={[]} size={"BIG"} />
            </div>
          </main>
          <Modal
            name="오늘의 팀"
            code="45cca849-073e-4740-b228-72a9be8e350f"
            visible={modalVisible}
            closeHandler={modalCloseHandler}
            clickHandler={modalClickHandler}
          />
        </div>
      </div>
      <style jsx>{`
        .container {
          background-image: url("/image/background-group.png");
          color: black;
        }
        .title {
          font-size: 52px;
          color: var(--color-primary-deep);
          font-weight: 700;
          padding: 150px 0 0 142px;
        }
        .group-container {
          margin: 72px auto 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .content-box {
          display: flex;
          /* justify-content: center; */
        }
        .group-list::-webkit-scrollbar {
          display: none;
        }
        .group-list {
          max-width: 860px;
          margin: 100px 0 110px;
          list-style: none;
          overflow-x: scroll;
          white-space: nowrap;
          padding: 0;
        }
        .tag-container {
          display: inline-block;
          margin-right: 20px;
        }
        .tag-button {
          min-width: 92px;
          height: 41px;
          background-color: var(--color-primary-default);
          border-radius: 20px;
          /* color */
          color: #fff;
          padding: 0 30px;
          font-size: 18px;
        }
        .group-box {
          flex-basis: 390px;
          margin-right: 60px;
        }
        .list-title-box {
          flex: 1 1 0%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 80px;
        }
        .letter-list {
          flex-basis: 480px;
        }
        button {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          background-color: none;
          border: none;
          background-color: rgba(0, 0, 0, 0);
          padding: 0;
        }
        .member-title {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 23px;
        }
        .mix-button {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .member-list {
          display: flex;
          flex-wrap: wrap;
          width: 360px;
          height: 240px;
          list-style: none;
          padding: 0;
          margin: 0 auto 50px;
        }
        .member-list > li {
          margin-right: 30px;
          margin-bottom: 40px;
        }
        .member-list > li:nth-child(3n) {
          margin-right: 0;
        }
        .search-bar {
          width: 250px;
          height: 36px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          border: 1px solid var(--color-gray-02);
          border-radius: 18px;
          padding: 6px 14px;
          margin-right: 20px;
          margin-bottom: 50px;
        }
      `}</style>
    </div>
  );
}
