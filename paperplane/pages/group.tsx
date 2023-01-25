/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import GroupCard from "../components/group/GroupCard";
import PostCard from "../components/letter/PostCard";
import Modal from "../components/group/Modal";
import { useEffect, useState } from "react";
import Axios from "axios";
import { useRouter } from "next/router";

export default function group() {
  const [modalVisible, setModalVisible] = useState<Array<boolean>>([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [groupList, setGroupList] = useState<Array<Object>>([]);
  const [groupUser, setGroupUser] = useState<Array<Object>>([]);
  const [selectedGroup, setSelectedGroup] = useState<Object>({});
  const [groupLetter, setGroupLetter] = useState<Array<Object>>([]);
  let accessToken: string | null;
  const router = useRouter();

  if (typeof window !== "undefined") {
    // Perform localStorage action
    accessToken = localStorage.getItem("token");
  }

  // useEffect(() => {
  //   console.log(modalVisible);
  // }, [modalVisible]);

  useEffect(() => {
    // 내가 속한 그룹
    Axios.get("/api/group/mygroup", {
      headers: {
        AccessToken: accessToken,
      },
    })
      .then((response) => {
        console.log(response.data);
        setGroupList(response.data);
        setSelectedGroup({ 0: response.data[0] });
      })
      .catch((error) => {
        alert(error.response.data.message);
        if (error.response.data.status === 401) {
          router.push("/login");
        }
      });
  }, []);

  useEffect(() => {
    if (selectedGroup[0] && selectedGroup[0].id) {
      // 그룹 상세 정보
      Axios.get(`/api/group/search/${selectedGroup[0].code}`)
        .then((response) => {
          console.log(response.data);
          // setGroupDetail(response.data);
        })
        .catch((error) => alert(error.response.data.message));
      // 그룹원 목록
      Axios.get(`/api/group/users/${selectedGroup[0].id}`).then((response) => {
        setGroupUser(response.data);
        // console.log(response.data);
      });
      Axios.get(`/api/post/list/${selectedGroup[0].id}`, {
        headers: {
          AccessToken: accessToken,
        },
      }).then((response) => {
        console.log(response.data);
        setGroupLetter(response.data);
      });
    }
  }, [selectedGroup]);

  // modal click
  const modalClickHandler = (modalNumber: number) => {
    // modalVisible[modalNumber] => true 나머지 => false
    setModalVisible(modalVisible.map((modal, idx) => idx === modalNumber));
    console.log("clicked");
  };
  // modal close handler
  const modalCloseHandler = () => {
    setModalVisible(new Array(8).fill(false));
  };

  const groupHandler = (tag: Object) => {
    console.log("selectedGroup : " + tag.name);
    setSelectedGroup(groupList.filter((group) => group.id === tag.id));
  };

  const Groups = groupList.map((group, idx) => {
    return (
      <li
        className="tag-container"
        style={{ display: "inline-block", marginRight: "20px" }}
        key={idx}
      >
        <button
          style={{
            minWidth: "92px",
            height: "41px",
            backgroundColor:
              selectedGroup[0]?.id === group?.id
                ? "var(--color-primary-deep)"
                : "var(--color-primary-default)",
            borderRadius: "20px",
            color: "#fff",
            padding: "0 30px",
            fontSize: "18px",
            outline: 0,
            border: 0,
          }}
          onClick={() => groupHandler(group)}
          type="button"
        >
          {group.name}
        </button>
      </li>
    );
  });

  return (
    <div className="container">
      <div className="title">그룹____</div>
      <div className="group-container">
        <nav style={{ width: "920px", display: "flex", alignItems: "center" }}>
          <ul className="group-list">{Groups}</ul>
          <button
            type="button"
            onClick={() => modalClickHandler(0)}
            style={{ margin: "100px 19px 110px" }}
          >
            <Image
              src="/image/group-add.svg"
              alt={"그룹 추가"}
              width={41}
              height={41}
              // style={{ margin: "85px 19px 120px" }}
            />
          </button>
        </nav>
        {Groups.length > 0 ? (
          <div className="content-box">
            <aside className="group-box">
              <div className="list-title-box">
                <h1 style={{ color: "#E890A5", margin: 0, fontSize: "40px" }}>
                  {selectedGroup[0]?.name}
                </h1>
              </div>
              <div className="member-title">
                <span style={{ fontSize: "18px", color: "#585858" }}>
                  구성원
                </span>
                <div
                  className="mix-button"
                  onClick={() => modalClickHandler(5)}
                >
                  <div style={{ color: "#787878" }}>초대 코드 복사</div>
                  <Image
                    src="/image/link.svg"
                    alt={"초대 코드 복사"}
                    width={35}
                    height={35}
                  />
                </div>
              </div>
              {/* 구성원 컴포넌트 */}
              <ul className="member-list">
                {groupUser?.map((user, idx) => {
                  return (
                    <li key={idx}>
                      <Image
                        style={{ borderRadius: "50%" }}
                        src={user.profileImageUrl}
                        alt={user.name}
                        width={100}
                        height={100}
                      />
                    </li>
                  );
                })}
              </ul>
              <button type="button" onClick={() => modalClickHandler(6)}>
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
                  minWidth: "490px",
                }}
              >
                <div className="search-bar">
                  검색어
                  <Image
                    src="/image/search.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                </div>
                {groupLetter?.map((letter, idx) => {
                  return <PostCard key={idx} data={letter} size={"BIG"} />;
                })}
              </div>
            </main>
            <Modal
              name={selectedGroup[0] && selectedGroup[0].name}
              code={selectedGroup[0] && selectedGroup[0].code}
              visible={modalVisible}
              closeHandler={modalCloseHandler}
              clickHandler={modalClickHandler}
            />
          </div>
        ) : (
          <Modal
            name={selectedGroup[0] && selectedGroup[0].name}
            code={selectedGroup[0] && selectedGroup[0].code}
            visible={modalVisible}
            closeHandler={modalCloseHandler}
            clickHandler={modalClickHandler}
          />
        )}
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
          min-height: 1000px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
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
          justify-content: space-between;
          align-items: center;
          border: 1px solid var(--color-gray-02);
          border-radius: 18px;
          padding: 6px 14px 6px 25px;
          margin-right: 20px;
          margin-bottom: 50px;
        }
      `}</style>
    </div>
  );
}
