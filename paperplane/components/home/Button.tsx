interface buttonImpl {
  color: string;
  text: string;
  onClick: () => void;
}

const Button = (props: buttonImpl) => {
  const { color, text, onClick } = props;
  return (
    <>
      <div className="button" onClick={onClick}>
        {text}
      </div>
      <style jsx>{`
        .button {
          background-color: ${color};
          color: ${color === "white" ? "#6B85A4" : "white"};
          border-radius: 24px;
          border: 1px solid #6b85a4;
          font-size: 15px;
          font-weight: 700;
          padding: 15px 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          width: fit-content;
        }
        .button:hover {
          opacity: 0.8;
          transition: opacity 0.1s linear;
        }
      `}</style>
    </>
  );
};

export default Button;
