import Circle from "../components/letterbox/Circle";
import LetterList from "../components/letterbox/LetterList";
import Textbox from "../components/letterbox/Textbox";

export default function letterbox() {
  return (
    <>
      <div className="letterbox-container">
        <div className="inner-box">
          <div className="title">편지함______</div>
          <div className="letterbox">
            <div className="letterbox__inner">
              <Textbox title="새 편지" sub="아직 읽지 않은 편지가 있어요" />
              <LetterList letters={""} type="new" />
            </div>
            <hr />
            <div className="letterbox__inner">
              <Textbox title="읽은 편지" sub="지난 편지를 꺼내봐요." />
              <LetterList letters={""} type="read" />
            </div>
          </div>
        </div>
        <div className="letter-state">
          <Circle text="받은 편지" active={true} />
          <Circle text="보낸 편지" active={false} />
          <Circle text="수집한 편지" active={false} />
        </div>
      </div>
      <style jsx>{`
        .letterbox-container {
          display: flex;
          margin: 80px auto;
          width: 70%;

          .inner-box {
            flex-grow: 1;
          }

          .title {
            color: #3d5470;
            font-size: 52px;
            font-weight: 700;
          }
          .letterbox {
            padding-left: 160px;

            hr {
              color: #bababa;
            }

            &__inner {
              padding: 40px 0;
              display: flex;
            }
          }
        }
      `}</style>
    </>
  );
}
