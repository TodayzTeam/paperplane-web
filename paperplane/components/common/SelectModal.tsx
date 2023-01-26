import { useEffect, useRef } from "react";

interface selectImpl {
  question: string;
  answer: string;
  closeHandler: any;
  confirmHandler: any;
  visible: any;
}

const SelectModal = (props: selectImpl) => {
  const { question, answer, closeHandler, confirmHandler, visible } = props;
  const bgd = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(visible);
    if (visible) {
      bgd.current.style = "z-index: 10";
    } else {
      bgd.current.style = "z-index: -1";
    }
  }, [visible]);

  return (
    <>
      <div className="container" style={{ marginTop: "46px" }} ref={bgd}>
        <img
          src={"/image/modal-blue.svg"}
          alt={"비행기"}
          style={{ marginBottom: "20px" }}
          width={60}
          height={60}
        />
        <div
          style={{
            fontSize: "18px",
            fontWeight: 700,
            textAlign: "center",
            color: "var(--color-gray-04)",
            marginBottom: "45px",
          }}
        >
          {question}
        </div>
        <div
          style={{
            width: "100%",
            height: "58px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <button className="left-btn" type="button" onClick={closeHandler}>
            취소
          </button>
          <button className="right-btn" type="button" onClick={confirmHandler}>
            {answer}
          </button>
        </div>
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          max-width: 450px;
          background-color: #fff;
          box-shadow: 2px 5px 7px 2px rgba(0, 0, 0, 0.15);
          border-radius: 30px;
          z-index: 11;
          position: fixed;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 40px;
          top: 300px;
          left: 0;
          right: 0;
          margin: 0 auto;
        }
        .left-btn {
          width: 50%;
          color: var(--color-gray-03);
          font-weight: 700;
          font-size: 15px;
          text-align: center;
          background: var(--color-gray-01);
          border-bottom-left-radius: 30px;
          outline: 0;
          border: 0;
        }
        .right-btn {
          width: 50%;
          color: white;
          font-weight: 700;
          font-size: 15px;
          text-align: center;
          background: var(--color-primary-dark);
          border-bottom-right-radius: 30px;
          outline: 0;
          border: 0;
        }
      `}</style>
    </>
  );
};

export default SelectModal;
