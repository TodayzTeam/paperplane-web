export default function Pagination({ page, onPageDown, onPageUp }) {
  return (
    <>
      <div className="buttons">
        <button
          className="button left"
          disabled={page === 0}
          onClick={onPageDown}
        ></button>
        <button className="button right" onClick={onPageUp}></button>
      </div>
      <style jsx>{`
        .buttons {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          padding-right: 20px;
          .button {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border: none;
            cursor: pointer;

            &:disabled {
              background: url('/image/left-arrow.svg') no-repeat center #e8e8e8;
              cursor: not-allowed;
            }
          }
          .left {
            background: url('/image/left-arrow.svg') no-repeat center #b1bbc6;
          }
          .right {
            background: url('/image/right-arrow.svg') no-repeat center #b1bbc6;
          }
        }
      `}</style>
    </>
  );
}
