import Image from "next/image";
import GroupCard from "../components/group/GroupCard";
import PostCard from "../components/PostCard";

export default function group() {
  return (
    <>
      <div className="group-container">
        <aside className="group-list">
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
              <Image src="/image/profile.svg" alt="" width={100} height={100} />
            </li>
            <li>
              <Image src="/image/profile.svg" alt="" width={100} height={100} />
            </li>
            <li>
              <Image src="/image/profile.svg" alt="" width={100} height={100} />
            </li>
            <li>
              <Image src="/image/profile.svg" alt="" width={100} height={100} />
            </li>
            <li>
              <Image src="/image/profile.svg" alt="" width={100} height={100} />
            </li>
            <li>
              <Image src="/image/profile.svg" alt="" width={100} height={100} />
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
      </div>
      <style jsx>{`
        .group-container {
          display: flex;
          margin: 72px auto 30px;
          justify-content: center;
          background-image: url("/image/background-group.png");
          color: black;
        }
        .group-list {
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
          border: 1px solid #bababa;
          border-radius: 18px;
          padding: 6px 14px;
          margin-right: 20px;
          margin-bottom: 50px;
        }
      `}</style>
    </>
  );
}
