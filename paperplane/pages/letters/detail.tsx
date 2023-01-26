import { useRouter } from "next/router";
import Axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import PostCard from "../../components/letter/PostCard";
import SelectModal from "../../components/common/SelectModal";
import InformModal from "../../components/common/InformModal";
import { GetServerSideProps } from "next";

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
  const [replyList, setReplyList] = useState<Array<Object>>([]); // 온 답장 개수
  const [alreadySentReply, setAlreadySentReply] = useState<boolean>(false); // 이미 답장을 보낸 받은 편지인가
  const [originalLetter, setOriginalLetter] = useState<PostType>({
    id: 0,
    title: "",
    content: "",
    date: new Date(),
    postColor: "",
    likeCount: 0,
  });

  const [modalVisible, setModalVisible] = useState<Array<boolean>>([
    false,
    false,
  ]);

  let accessToken: string | null;

  if (typeof window !== "undefined") {
    accessToken = localStorage.getItem("token");
  }

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
      console.log(response[0]);
      console.log(response[1]);
      console.log(response[2]);
      if (response[0].data[0].sender.id === response[2].data.id) {
        if (!response[1].data[0].isReply) {
          console.log("보낸 편지, 답장이 아님");
          setIsSent(true);
          if (response[0].data.length > 1)
            setReplyList(response[0].data.slice(1));
        } else {
          console.log("답장한 편지");
          // if (response[1].data[0].isReply) setOriginalLetter(response[0].data[1]);
          setOriginalLetter(response[0].data[1]);
          // setIsReply(response[1].data[0].isReply);
          setIsReply(true);
          setIsSent(true);
        }
      } else if (
        response[0].data[0].receivers.some(
          (user: any) => user.id === response[2].data.id
        )
      ) {
        console.log("받은 편지");
        setIsReceived(true);
        setIsSent(false);
        if (response[0].data.length > 1) setAlreadySentReply(true);
      }

      setIsLike(response[1].data[0].isLike);
      setLetter(response[0].data[0]);
    });
  }, [id]);

  const reportHandler = (type: string) => {
    if (type === "FIRST") {
      console.log("리포트 버튼 클릭");
      setModalVisible([true, false]);
    } else {
      Axios.get(`/api/post/report/${id}`, {
        headers: {
          AccessToken: accessToken,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            setModalVisible([false, true]);
          }
        })
        .catch((error) => {
          alert(error.response.data.message);
          router.back();
        });
    }
  };

  const modalCloseHandler = () => {
    setModalVisible([false, false]);
  };

  const likeHandler = () => {
    if (isLike) {
      // 좋아요 취소
      Axios.get(`/api/post/like/cancel/${id}`, {
        headers: {
          AccessToken: accessToken,
        },
      })
        .then((response) => {
          if (response.status === 200) setIsLike(false);
        })
        .catch((error) => {
          console.log(error.response.data.message);
        });
    } else {
      Axios.get(`/api/post/like/push/${id}`, {
        headers: {
          AccessToken: accessToken,
        },
      })
        .then((response) => {
          if (response.status === 200) setIsLike(true);
        })
        .catch((error) => {
          console.log(error.response.data.message);
        });
    }
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
        {isSent && (
          <>
            {isReply ? (
              <>
                <div className="report-box">
                  <button
                    className="btn-report"
                    type="button"
                    onClick={() => reportHandler("FIRST")}
                  >
                    문제 편지 신고하기
                  </button>
                </div>
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
                  <PostCard
                    data={originalLetter}
                    size={"BIG"}
                    clickHandler={() =>
                      router.push({
                        pathname: "/letters/detail",
                        query: { id: originalLetter.id },
                      })
                    }
                  />
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
              <>
                {replyList.length > 0 && (
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
                      <div className="letter-wrapper">
                        {replyList.map((reply, idx) => (
                          <div
                            key={idx}
                            className="reply"
                            onClick={() =>
                              router.push({
                                pathname: "/letters/detail",
                                query: { id: reply.id },
                              })
                            }
                          >
                            <Image
                              src="/image/letter.png"
                              alt="답장 온 편지"
                              width={300}
                              height={200}
                              style={{ marginLeft: "45px" }}
                            />
                          </div>
                        ))}
                        {replyList.map((reply, idx) => (
                          <div
                            key={idx}
                            className="reply"
                            onClick={() =>
                              router.push({
                                pathname: "/letters/detail",
                                query: { id: reply.id },
                              })
                            }
                          >
                            <Image
                              src="/image/letter.png"
                              alt="답장 온 편지"
                              width={300}
                              height={200}
                              style={{ marginLeft: "45px" }}
                            />
                          </div>
                        ))}
                        {replyList.map((reply, idx) => (
                          <div
                            key={idx}
                            className="reply"
                            onClick={() =>
                              router.push({
                                pathname: "/letters/detail",
                                query: { id: reply.id },
                              })
                            }
                          >
                            <Image
                              src="/image/letter.png"
                              alt="답장 온 편지"
                              width={300}
                              height={200}
                              style={{ marginLeft: "45px" }}
                            />
                          </div>
                        ))}
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
                )}
              </>
            )}
          </>
        )}
        {isReceived ? (
          <>
            <div className="report-box">
              <button
                className="btn-report"
                type="button"
                onClick={() => reportHandler("FIRST")}
              >
                문제 편지 신고하기
              </button>
            </div>
            <div
              style={{
                marginTop: "60px",
              }}
            />
            <div style={{ margin: "0 auto" }}>
              <button
                className="btn-back"
                type="button"
                onClick={() => router.back()}
              >
                뒤로 가기
              </button>
              {!alreadySentReply && (
                <button
                  className="btn-reply"
                  type="button"
                  onClick={() =>
                    router.push({
                      pathname: "/letters/reply",
                      query: { data: id },
                    })
                  }
                >
                  답장 쓰기
                </button>
              )}
            </div>
          </>
        ) : (
          <div style={{ margin: "0 auto" }}>
            <button
              className="btn-back"
              type="button"
              onClick={() => router.back()}
            >
              뒤로 가기
            </button>
          </div>
        )}
        <SelectModal
          question={"신고하시겠습니까?"}
          answer={"신고하기"}
          closeHandler={modalCloseHandler}
          confirmHandler={reportHandler}
          visible={modalVisible[0]}
        />
        <InformModal
          sentence={"신고가 완료되었습니다."}
          clickHandler={() => router.back()}
          visible={modalVisible[1]}
        />
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
        .letter-wrapper {
          max-width: 690px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
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

export default LetterDetailPage;
// export async function getServerSideProps(context: any) {
//   console.log(context.query);
//   // const formData = new FormData();
//   // formData.append("postIdList", String(context.query.id));
//   try {
//     const res = await Axios.all([
//       Axios.get(`/api/post/info/${context.query.id}`, {
//         headers: {
//           AccessToken: context.query.accessToken,
//         },
//       }),
//       // Axios.post("/post/option", formData, {
//       //   headers: {
//       //     AccessToken: context.query.accessToken,
//       //   },
//       // }),
//       Axios.post("/user/simple", {
//         headers: {
//           AccessToken: context.query.accessToken,
//         },
//       }),
//     ]);
//     // const response = await getDetailedPost(context.query.id);
//     console.log(response);
//     return {
//       props: {},
//     };
//   } catch (err) {
//     console.log(err);
//     return {
//       props: {},
//     };
//   }
// }
export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
