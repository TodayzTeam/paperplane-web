import css from "styled-jsx/css";
import Image from "next/image";
import { bgdData } from "../../json/background";
import Link from "next/link";

interface cardImpl {
  data: PostType;
  size: string;
  clickHandler: any | null;
}

type PostType = {
  id: number;
  title: string;
  content: string;
  date: Date;
  postColor: string;
  likeCount: number;
};

const style = css`
  .container {
    display: flex;
    margin: 20px;
    background-color: #fffdf9;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
  .big {
    padding: 45px 33px;
    width: 450px;
    height: 300px;
  }
  .small {
    padding: 35px 22px;
    width: 300px;
    height: 200px;
  }
  .left-box {
    width: 50%;
    float: left;
  }
  .right-box {
    width: 50%;
    float: right;
  }
  .content {
    height: 100%;
    font-family: Roboto;
    color: #585858;
    white-space: normal;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 5;
  }
  .small-content {
    font-size: 13px;
    line-height: 26px;
  }
  .big-content {
    font-size: 15px;
    line-height: 30px;
  }
  .small-line {
    border-left: 1px solid #eee3d9;
    height: 100%;
    margin: 0 8px;
  }
  .big-line {
    border-left: 1px solid #eee3d9;
    height: 100%;
    margin: 0 12px;
  }
  .info-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .image {
    display: block;
    margin-left: auto;
  }
  .big-title {
    margin-top: 66px;
    margin-bottom: 10px;
    color: black;
    font-size: 24px;
  }
  .big-date {
    display: block;
    margin: 0 0 0 auto;
    margin-left: auto;
    font-size: 15px;
    color: #787878;
    font-weight: 400;
  }
  .small-title {
    margin-top: 24px;
    margin-bottom: 10px;
    color: black;
    font-size: 18px;
  }
  .small-date {
    display: block;
    margin: 0 0 0 auto;
    margin-left: auto;
    font-size: 13px;
    color: #787878;
    font-weight: 400;
  }
`;
const PostCard = (props: cardImpl) => {
  const { data, size, clickHandler = "" } = props;
  // console.log(data);
  let bgd =
    (data && Object.keys(data).length > 0 && bgdData[data.postColor]) ||
    "#FFFAF3";

  return (
    <Link
      href={{
        pathname: `/letters/detail`,
        query: { id: data.id, background: bgd },
      }}
      onClick={clickHandler}
    >
      {size === "BIG" ? (
        <div className="container big" style={{ background: data ? bgd : "" }}>
          <div className="left-box">
            <div className="content big-content">{data.content}</div>
          </div>
          <div className="big-line" />
          <div className="right-box">
            <div className="info-wrapper">
              <Image
                className="image"
                alt="프로필"
                src="/profile.png"
                width={60}
                height={75}
              />
              <h2 className="big-title">{data.title}</h2>
              <h4 className="big-date">
                {new Date(data.date).getFullYear()}년{" "}
                {new Date(data.date).getMonth() + 1}월{" "}
                {new Date(data.date).getDate()}일
              </h4>
            </div>
          </div>
        </div>
      ) : (
        <div className="container small">
          <div className="left-box">
            <div className="content small-content">{data.content}</div>
          </div>
          <div className="small-line" />
          <div className="right-box">
            <div className="info-wrapper">
              <Image
                className="image"
                alt="프로필"
                src="/profile.png"
                width={40}
                height={50}
              />
              <h2 className="small-title">{data.title}</h2>
              <h4 className="small-date">
                {new Date(data.date).getFullYear()}년{" "}
                {new Date(data.date).getMonth() + 1}월{" "}
                {new Date(data.date).getDate()}일
              </h4>
            </div>
          </div>
        </div>
      )}

      <style jsx>{style}</style>
    </Link>
  );
};

export default PostCard;
