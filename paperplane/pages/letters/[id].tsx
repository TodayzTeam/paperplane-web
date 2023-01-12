import { useRouter } from "next/router";
import Axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
type propsType = {
  letter: letterType;
};
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
type sendType = {
  name: string;
  email: string;
  profileImageUrl: string;
};

function LetterDetailPage(props: propsType) {
  const router = useRouter();
  const { id } = router.query;
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

  // 받은 편지 / 보낸 편지 / 답장
  // 받은 편지 : receivers에 본인 있음
  // 보낸 편지 : sender가 본인
  // 답장 : ?

  useEffect(() => {
    Axios.get("/api/post/info/1").then((res) => {
      console.log(res.data);
      setLetter(res.data);
    });
  }, []);
  return (
    <div className="container">
      <div className="content-wrapper">
        <main className="content-box">
          <div className="head-box">
            <span className="title">{letter.title}</span>
            <div className="stamp">
              <Image
                src={"/image/stamp.png"}
                alt={"우표"}
                width={100}
                height={80}
              />
            </div>
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
            margin: "100px -5px 120px",
            background: "var(--color-gray-02)",
          }}
        />
        <div style={{ margin: "0 auto" }}>
          <button className="btn-back">뒤로 가기</button>
        </div>
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
          background: #fffdf9;
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
        }
        .reply:hover {
          transform: translate(0, -10px);
        }
        .text-box {
          display: flex;
          justify-content: flex-end;
          flex-direction: column;
          width: 184px;
          margin-left: 13px;
        }
        .text-box > span {
          color: var(--color-primary-dark);
          font-weight: 700;
          font-size: 32px;
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
