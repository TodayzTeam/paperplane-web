import { useRouter } from "next/router";
import Axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import PostCard from "../../components/PostCard";

type letterType = {
  title: string;
  content: string;
  date: Date;
  reportCount: number;
  likeCount: number;
  group: string | null;
  interest: Array<string>;
  sender: sendType | null;
  receivers: Array<string>;
};

type PostType = {
  id: number;
  title: string;
  content: string;
  date: Date;
  postColor: string;
  likeCount: number;
};

type sendType = {
  name: string;
  email: string;
  profileImageUrl: string;
};

function LetterDetailPage() {
  const router = useRouter();
  const { id, background } = router.query;

  const [letter, setLetter] = useState<letterType>({
    title: "",
    content: "",
    date: new Date(),
    reportCount: 0,
    likeCount: 0,
    group: null,
    interest: [],
    sender: null,
    receivers: [],
  });
  const [isLike, setIsLike] = useState<boolean>(false);
  const [isReply, setIsReply] = useState<boolean>(false); // 보낸 답장 여부
  const [isReceived, setIsReceived] = useState<boolean>(false); // 받은 편지 여부
  const [isSent, setIsSent] = useState<boolean>(false); // 보낸 편지 여부
  const [replyCount, setReplyCount] = useState<number>(0); // 온 답장 개수
  const [originalLetter, setOriginalLetter] = useState<PostType>({
    id: 0,
    title: "",
    content: "",
    date: new Date(),
    postColor: "",
    likeCount: 0,
  });

  let accessToken: string | null;

  if (typeof window !== "undefined") {
    accessToken = localStorage.getItem("token");
  }

  // 받은 편지 / 보낸 편지 / 답장
  // 받은 편지 : receivers에 본인 있음
  // 보낸 편지 : sender가 본인
  // 답장 : ?

  useEffect(() => {
    const formData = new FormData();
    formData.append("postIdList", String(id));

    Axios.all([
      Axios.get(`/api/post/info/${id}`, {
        headers: {
          AccessToken: accessToken,
        },
      }),
      Axios.post(`/api/post/option`, formData, {
        headers: {
          AccessToken: accessToken,
        },
      }),
      Axios.get("/api/user/simple", {
        headers: {
          AccessToken: accessToken,
        },
      }),
    ]).then((response) => {
      console.log(response);
      console.log(response[0].data[0].sender.id);
      console.log(response[2].data.id);
      if (response[0].data[0].sender.id === response[2].data.id) {
        // 보낸 편지
        setIsSent(true);
        console.log("보낸 편지");
        // 답장 편지 받아야 함
      } else if (
        response[0].data[0].receivers.some(
          (user: any) => user.id === response[2].data.id
        )
      ) {
        // 받은 편지
        setIsReceived(true);
        console.log("받은 편지");
        // } else if (response[1].data[0].isReply) {
      } else if (true) {
        // 답장 편지
        // if (response[1].data[0].isReply) setOriginalLetter(response[0].data[1]);
        setOriginalLetter(response[0].data[1]);
        // setIsReply(response[1].data[0].isReply);
        setIsReply(true);
        console.log("hrer");
      }

      setIsLike(response[1].data[0].isLike);
      setLetter(response[0].data[0]);
    });
  }, []);

  const likeHandler = () => {
    // 좋아요
    //
  };
  return (
    <div className="container">
      <div className="content-wrapper">
        <main
          className="content-box"
          style={{ backgroundColor: background ? background : "#fffdf9" }}
        >
          <div className="head-box">
            <span className="title">{letter.title}</span>
            <button className="stamp" onClick={likeHandler}>
              {isLike ? (
                <Image
                  src={"/image/color-stamp.png"}
                  alt={"우표"}
                  width={100}
                  height={80}
                />
              ) : (
                <Image
                  src={"/image/mono-stamp.png"}
                  alt={"우표"}
                  width={100}
                  height={80}
                />
              )}
            </button>
          </div>
          <p className="content">{letter.content}</p>
          <div className="from-box">
            <p style={{ marginTop: "50px", marginBottom: "20px" }}>
              {new Date(letter.date).getFullYear()}년{" "}
              {new Date(letter.date).getMonth() + 1}월{" "}
              {new Date(letter.date).getDate()}일
            </p>
            <p>익명의 비행사</p>
          </div>
        </main>
        {isSent ? (
          <>
            {replyCount > 0 ? (
              <>
                <div
                  style={{
                    border: "1px solid var(--color-gray-02)",
                    margin: "80px -5px 100px",
                    background: "var(--color-gray-02)",
                  }}
                />
                <div className="reply-wrapper">
                  <div className="text-box">
                    <span>답장이 있어요!</span>
                    <div className="click-box">
                      <p>편지 눌러 확인하기</p>
                      <Image
                        src={"/image/arrow-right.svg"}
                        alt="더보기"
                        width={25}
                        height={25}
                      />
                    </div>
                  </div>
                  <div className="reply">
                    <Image
                      src="/image/letter.png"
                      alt="답장 온 편지"
                      width={300}
                      height={200}
                      style={{ marginLeft: "45px" }}
                    />
                  </div>
                  <div className="reply">
                    <Image
                      className="reply"
                      src="/image/letter.png"
                      alt="답장 온 편지"
                      width={300}
                      height={200}
                      style={{ marginLeft: "50px" }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    border: "1px solid var(--color-gray-02)",
                    margin: "100px -5px 80px",
                    background: "var(--color-gray-02)",
                  }}
                />
              </>
            ) : (
              <></>
            )}
          </>
        ) : (
          // 보낸 편지가 아니면
          <>
            {/* 신고하기 */}
            <div className="report-box">
              <button className="btn-report">문제 편지 신고하기</button>
            </div>
            {isReply && (
              <>
                <div
                  style={{
                    border: "1px solid var(--color-gray-02)",
                    margin: "100px -5px 80px",
                    background: "var(--color-gray-02)",
                  }}
                />
                <div className="reply-wrapper">
                  <div className="text-box">
                    <span>원본 편지 확인하기</span>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "var(--color-gray-03)",
                        marginBottom: "22px",
                      }}
                    >
                      위 편지는 우측 편지에 대한 답장입니다
                    </p>
                    <div className="click-box">
                      <p>편지 눌러 확인하기</p>
                      <Image
                        src={"/image/arrow-right.svg"}
                        alt="더보기"
                        width={25}
                        height={25}
                      />
                    </div>
                  </div>
                  <PostCard data={originalLetter} size={"BIG"} />
                </div>
                <div
                  style={{
                    border: "1px solid var(--color-gray-02)",
                    margin: "100px -5px 80px",
                    background: "var(--color-gray-02)",
                  }}
                />
              </>
            )}
          </>
        )}
        <div
          style={{
            marginTop: "60px",
          }}
        />
        {isReceived ? (
          <div style={{ margin: "0 auto" }}>
            <button className="btn-back">뒤로 가기</button>
            <button className="btn-reply">답장 쓰기</button>
          </div>
        ) : (
          <div style={{ margin: "0 auto" }}>
            <button className="btn-back">뒤로 가기</button>
          </div>
        )}
      </div>

      <style jsx>{`
        .container {
          font-family: "Pretendard" !important;
          background: var(--color-primary-light);
          color: black;
        }
        .content-wrapper {
          display: flex;
          flex-direction: column;
          margin: 0px auto;
          padding: 275px 0;
          max-width: 900px;
          width: 100%;
        }
        .content-box {
          width: 100%;
          margin: 5px;
          padding: 108px 120px 140px;
          box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1), 20px 25px 0px #faf8f5;
          border-radius: 10px;
        }
        .head-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 50px;
        }
        .title {
          color: var(--color-primary-deep);
          font-weight: 700;
          font-size: 40px;
        }
        .stamp {
          border: 0;
          outline: 0;
          padding: 0;
          background: none;
        }
        .stamp:hover {
          transform: scale(1.1);
        }
        .content {
          min-height: 200px;
          font-size: 20px;
          line-height: 250%;
          letter-spacing: 0.05rem;
          margin: 0;
        }
        .from-box > p {
          text-align: right;
          color: var(--color-gray-04);
          margin: 0;
          font-size: 18px;
        }
        .reply-wrapper {
          display: flex;
          justify-content: center;
        }
        .reply:hover {
          transform: translate(0, -10px);
        }
        .text-box {
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          flex-direction: column;
          margin-left: 13px;
          padding-bottom: 42px;
          margin-right: 50px;
        }
        .text-box > span {
          width: 100%;
          color: var(--color-primary-dark);
          font-weight: 700;
          font-size: 32px;
          text-align: right;
        }
        .click-box {
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        .click-box > p {
          color: var(--color-gray-03);
          font-weight: 700;
          font-size: 18px;
          margin-right: 5px;
        }
        .report-box {
          display: flex;
          justify-content: flex-end;
          margin-top: 44px;
        }
        .btn-report {
          color: var(--color-emphasize-dark);
          font-size: 13px;
          background: none;
          border: 0;
          outline: 0;
        }
        .btn-back {
          background: var(--color-primary-deep);
          border-radius: 35px;
          padding: 25px 40px;
          font-weight: 700;
          width: 143px;
          height: 69px;
          outline: 0;
          border: 0;
        }
        .btn-back:hover {
          background: white;
          color: var(--color-primary-deep);
          border: 1px solid var(--color-primary-deep);
        }
        .btn-reply {
          background: white;
          color: var(--color-primary-deep);
          border: 1px solid var(--color-primary-deep);
          margin-left: 40px;
          border-radius: 35px;
          padding: 25px 40px;
          font-weight: 700;
          width: 143px;
          height: 69px;
          outline: 0;
          border: 0;
        }
        .btn-reply:hover {
          background: var(--color-primary-deep);
          color: white;
        }
      `}</style>
    </div>
  );
}

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { id: "1" } }],
//     fallback: false,
//   };
// }
// export async function getStaticProps(context) {
//   // const id = context.params.id;
//   let letter = {};
//   const res = await Axios.get(`/post/info/1`);

//   return { letter: res };
// }

// export async function getServerSideProps() {
//   const res = await Axios.get(`/post/info/1`);
//   return { props: { res } };
// }

export default LetterDetailPage;
