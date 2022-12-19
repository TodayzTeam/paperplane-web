import PostCard from "../PostCard";

const LetterList = ({ letters, type }) => {
  return (
    <>
      <div className="letters">
        <div className="letters__inner">
          {type === "new" ? (
            <>
              <img className="letter" src="/image/letter.png"></img>
              <img className="letter" src="/image/letter.png"></img>
              <img className="letter" src="/image/letter.png"></img>
            </>
          ) : (
            <>
              <PostCard data={""} size="" />
              <PostCard data={""} size="" />
              <PostCard data={""} size="" />
            </>
          )}
        </div>
        <div className="buttons">
          <div className="button left"></div>
          <div className="button right"></div>
        </div>
      </div>
      <style jsx>{`
        .letters {
          padding: 20px;
          &__inner {
            display: grid;
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr 1fr;
            grid-gap: 15px;
            margin-bottom: 20px;

            .letter {
              width: 300px;
              cursor: pointer;
            }
          }
          .buttons {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
            .button {
              width: 36px;
              height: 36px;
              border-radius: 50%;
              cursor: pointer;
            }
            .left {
              background: url("/image/left-arrow.svg") no-repeat center #b1bbc6;
            }
            .right {
              background: url("/image/right-arrow.svg") no-repeat center #b1bbc6;
            }
          }
        }
      `}</style>
    </>
  );
};

export default LetterList;
