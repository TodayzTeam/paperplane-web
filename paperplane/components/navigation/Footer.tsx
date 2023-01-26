const Footer = () => {
  return (
    <>
      <footer>
        <div>이용약관</div>
        <div>|</div>
        <div>개인정보 처리방침</div>
      </footer>
      <style jsx>{`
        footer {
          height: 200px;
          background-color: #b1cdeb;
          padding: 40px;
          font-weight: 700;
          font-size: 20px;
          color: #3d5470;
          display: flex;
          justify-content: center;
          gap: 20px;
          & > div {
            cursor: pointer;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
