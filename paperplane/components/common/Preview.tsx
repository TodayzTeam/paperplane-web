import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Axios from "axios";

interface letterImpl {
  letter: letterType | simpleLetterType;
  visible: any;
  closeHandler: any;
  margin: number;
}

type letterType = {
  id: string;
  title: string;
  content: string;
  date: Date;
  isLike: boolean;
};

type simpleLetterType = {
  id: string;
  title: string;
  content: string;
  date: Date;
  likeCount: number;
};

const Preview = (props: letterImpl) => {
  const { letter, visible, closeHandler, margin } = props;
  const bgd = useRef<HTMLDivElement>(null);
  const [isLike, setIsLike] = useState<boolean>(letter?.isLike || false);
  let accessToken: string | null;

  if (typeof window !== "undefined") {
    accessToken = localStorage.getItem("token");
  }

  useEffect(() => {
    if (visible) {
      bgd.current.style = "z-index: 10; opacity: 1";
    } else {
      bgd.current.style = "z-index: -1; opacity: 0";
    }
  }, [visible]);

  const likeHandler = () => {
    if (!letter.likeCount) {
      if (isLike) {
        // 좋아요 취소
        Axios.get(`/api/post/like/cancel/${letter.id}`, {
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
        Axios.get(`/api/post/like/push/${letter.id}`, {
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
    }
  };

  return (
    <div className="container" ref={bgd}>
      <img
        className="btn-exit"
        src="/image/exit.svg"
        width={40}
        height={40}
        onClick={() => closeHandler()}
      />
      <div className="head-box">
        <span className="title">{letter.title}</span>
        <button className="stamp" type="button" onClick={likeHandler}>
          {isLike ? (
            <Image
              src={"/image/color-stamp.png"}
              alt={"우표"}
              width={55}
              height={44}
            />
          ) : (
            <Image
              src={"/image/mono-stamp.png"}
              alt={"우표"}
              width={55}
              height={44}
            />
          )}
        </button>
      </div>
      <p className="content">{letter.content}</p>
      <div className="from-box">
        <p style={{ marginTop: "30px", marginBottom: "10px" }}>
          {new Date(letter.date).getFullYear()}년{" "}
          {new Date(letter.date).getMonth() + 1}월{" "}
          {new Date(letter.date).getDate()}일
        </p>
        <p>익명의 비행사</p>
      </div>
      <style jsx>{`
        .container {
          width: 500px;
          background: #fffdf9;
          box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          position: absolute;
          padding: 70px;
          top: ${margin}px;
          left: 0;
          right: 0;
          margin: 0 auto;
          z-index: 11;
        }
        .btn-exit {
          position: absolute;
          top: -20px;
          left: 0;
          right: -490px;
          margin: 0 auto;
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
          margin-bottom: 30px;
        }
        .title {
          color: var(--color-primary-deep);
          font-weight: 700;
          font-size: 28px;
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
          min-height: 150px;
          font-size: 13px;
          line-height: 250%;
          letter-spacing: 0.05rem;
          margin: 0;
        }
        .from-box > p {
          text-align: right;
          color: var(--color-gray-04);
          margin: 0;
          font-size: 13px;
        }
      `}</style>
    </div>
  );
};

export default Preview;
