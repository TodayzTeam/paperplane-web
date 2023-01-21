export default function Header() {
  return (
    <>
      <div className="sub">당신에게 꼭 맞는 편지를 보내드릴게요</div>
      <div className="title">
        관심 있는 주제를
        <br />
        선택해주세요
      </div>
      <style jsx>{`
        .sub {
          font-size: 18px;
          color: #787878;
        }
        .title {
          font-size: 40px;
          font-weight: 700;
          color: #585858;
        }
      `}</style>
    </>
  );
}
