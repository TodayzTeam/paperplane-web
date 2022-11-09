import css from "styled-jsx/css";
import Image from "next/image";

const style = css`
  .container {
    display: flex;
    padding: 35px 22px;
    background-color: #fffdf9;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
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
    font-size: 13px;
  }
  .line {
    border-left: 1px solid #eee3d9;
    height: 100%;
    margin: 0 8px;
  }
  .info-wrapper {
    display: flex;
    flex-direction: column;
    float: right;
  }
  .image {
    display: block;
    margin-left: auto;
  }
  h2 {
    margin-top: 24px;
    margin-bottom: 10px;
    color: black;
    font-size: 18px;
  }
  h4 {
    display: block;
    margin: 0 0 0 auto;
    margin-left: auto;
    font-size: 13px;
    color: #787878;
    font-weight: 400;
  }
`;
const PostCard = () => {
  return (
    <article>
      <div className="container">
        <div className="left-box">
          <div className="content">
            종이비행기는 익명의 편지를 불특정한 대상에게 랜덤으로 전달하는
            서비스인데요, 내가 날린 편지가...
          </div>
        </div>
        <div className="line" />
        <div className="right-box">
          <div className="info-wrapper">
            <Image
              className="image"
              alt="프로필"
              src="/profile.png"
              width={40}
              height={50}
            />
            <h2>익명의 편지</h2>
            <h4>YYYY.MM.DD</h4>
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </article>
  );
};

export default PostCard;
