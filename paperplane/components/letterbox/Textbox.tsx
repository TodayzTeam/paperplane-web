const Textbox = ({ title, sub }) => {
  return (
    <>
      <div className="text">
        <div className="text--bold">{title}</div>
        <div className="text--light">{sub}</div>
      </div>
      <style jsx>{`
        .text {
          width: 20%;
          padding-top: 100px;
          &--bold {
            font-weight: 700;
            font-size: 28px;
            margin-bottom: 15px;
          }

          &--light {
            font-size: 14px;
            font-weight: 500;
            word-break: keep-all;
            color: #bababa;
          }
        }
      `}</style>
    </>
  );
};

export default Textbox;
