import css from "styled-jsx/css";
import Image from "next/image";

const style = css`
  .card-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fffdf9;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    padding: 22px 28px 28px 39px;
    margin: 27px 34px;
  }
  .name-box {
    color: black;
  }
`;

const GroupCard = () => {
  return (
    <article>
      <div className="card-container">
        <div className="name-box">
          <h1>오늘의팀</h1>
        </div>
        <div className="person-box">
          <div className="">
            <Image src="/image/stranger.svg" alt={""} width={32} height={32} />
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </article>
  );
};

export default GroupCard;
