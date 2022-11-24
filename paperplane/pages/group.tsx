import Image from "next/image";
import GroupCard from "../components/group/GroupCard";
import PostCard from "../components/PostCard";

export default function group() {
  return (
    <>
      <div className="group-container">
        <aside className="group-list">
          <nav className="list-title-box">
            <h2 style={{ margin: 0 }}>그룹 목록</h2>
            <div className="image-box">
              <button>
                <Image
                  style={{ marginRight: "5px" }}
                  src="/image/search.svg"
                  alt={"그룹 검색"}
                  width={32}
                  height={32}
                />
              </button>
              <button>
                <Image
                  src="/image/add.svg"
                  alt={"그룹 추가"}
                  width={40}
                  height={40}
                />
              </button>
            </div>
          </nav>
          {/* 그룹 컴포넌트 */}
          <GroupCard />
        </aside>
        <main className="letter-list">
          <div className="selected-title-box">
            <h1 style={{ color: "#E890A5", margin: 0 }}>오늘의팀</h1>
            <div className="image-box">
              <button>
                <Image
                  src="/image/link.svg"
                  alt={"초대 코드 복사"}
                  width={35}
                  height={35}
                />
              </button>
              <div style={{ color: "#787878" }}>초대 코드 복사</div>
              <button>
                <Image
                  style={{ marginLeft: "13px" }}
                  src="/image/sign-out.svg"
                  alt={"그룹 나가기"}
                  width={35}
                  height={35}
                />
              </button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <PostCard data={[]} size={"BIG"} />
            <PostCard data={[]} size={"BIG"} />
            <PostCard data={[]} size={"BIG"} />
          </div>
        </main>
        <div className="member-list">
          <Image src="/image/stranger.svg" alt={""} width={40} height={40} />
          <Image src="/image/stranger.svg" alt={""} width={40} height={40} />
          <Image src="/image/stranger.svg" alt={""} width={40} height={40} />
          <Image src="/image/stranger.svg" alt={""} width={40} height={40} />
          <Image src="/image/stranger.svg" alt={""} width={40} height={40} />
          <Image src="/image/stranger.svg" alt={""} width={40} height={40} />
        </div>
      </div>
      <style jsx>{`
        .group-container {
          display: flex;
          margin: 72px auto 30px;
          justify-content: center;
          background-image: url("/image/background-group.png");
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
          padding: 60px 40px 28px 60px;
        }
        .image-box {
          display: flex;
          align-items: center;
        }
        .letter-list {
          flex-basis: 480px;
        }
        .selected-title-box {
          flex: 1 1 0%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 60px 40px 10px 60px;
        }
        .member-list {
          display: flex;
          flex-direction: column;
          margin-top: 128px;
        }
        .member-list > img {
          margin-bottom: 5px;
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
      `}</style>
    </>
  );
}
