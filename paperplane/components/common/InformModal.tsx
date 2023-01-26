import { useEffect, useRef } from "react";

interface informImpl {
  sentence: string;
  clickHandler: any;
  visible: any;
}
const InformModal = (props: informImpl) => {
  const { sentence, clickHandler, visible } = props;

  const bgd = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
          {sentence}
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
          <button className="btn" type="button" onClick={clickHandler}>
            확인
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
        }
        .btn {
          width: 100%;
          color: white;
          background: var(--color-primary-dark);
          font-size: 15px;
          font-weight: 700;
          text-align: center;
          outline: 0;
          border: 0;
          border-radius: 0px 0px 30px 30px;
          height: 58px;
        }
      `}</style>
    </>
  );
};

export default InformModal;
