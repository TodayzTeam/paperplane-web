const Circle = ({ text, active }) => {
  return (
    <>
      <div className={`circle ${active && "active"}`}>{text}</div>
      <style jsx>{`
        .circle {
          margin: 20px auto;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background-color: #b1cdeb;
          color: white;
          text-align: center;
          line-height: 100px;
          font-size: 12px;
          font-weight: bold;
          cursor: pointer;
        }
        .active {
          width: 140px;
          height: 140px;
          line-height: 140px;
          font-size: 16px;
          background-color: #3d5470;
        }
      `}</style>
    </>
  );
};

export default Circle;
