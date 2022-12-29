import Image from "next/image";
type propsType = {
  title: string;
  content: string;
};
export default function LetterDetailPage(props: propsType) {
  return (
    <div className="container">
      <div className="content-wrapper">
        <main className="content-box">
          <div className="head-box">
            <span className="title">종이비행기</span>
            <div className="stamp">
              <Image
                src={"/image/stamp.png"}
                alt={"우표"}
                width={100}
                height={80}
              />
            </div>
          </div>
          <p className="content">
            오늘의팀이 바라본 현대 사회의 모습은 모든 게 빠르게 흘러가고 세상에
            발맞추기 바쁜 시대이자, 그 어느 때보다 서로에 대한 이해가 필요해진
            시점이지만 표현과 글이 어색한 시대로, 마음을 공유하는 일이 쉽지
            않습니다. 저희는 ‘서로를 위로해주는 공간이 있다면?’ 이라는 질문에서
            시작하여, 익명 아래 편하게 대화를 나눌 수 있고, 서로를 드러내지
            않고도 전할 수 있는 이야기를 통해 위안을 얻을 수 있는 서비스를
            만들어보고자 했습니다. 종이비행기는 익명의 편지를 불특정한 대상에게
            랜덤으로 전달하는 서비스인데요, 내가 날린 편지가 어디로 도착할지
            모른다는 종이비행기의 특징이 저희 서비스와 닮아 이름을 그대로
            가져왔습니다. 오늘의 팀의 ‘종이비행기’는 모든 게 빠르게 흘러가는
            시대, 위로가 부족한 시대에 하루 한 편지로 내 속도에 맞게 소통할 수
            있는 곳, 익명 편지로 부담 없이 감정을 나눌 수 있는 곳이 되고자
            합니다.
          </p>
          <div className="from-box">
            <p style={{ marginTop: "50px", marginBottom: "20px" }}>
              2022년 11월 26일
            </p>
            <p>익명의 비행사</p>
          </div>
        </main>
        <div
          style={{
            border: "1px solid var(--color-gray-02)",
            margin: "80px -5px 100px",
            background: "var(--color-gray-02)",
          }}
        />
        <div className="reply-wrapper">
          <div className="text-box">
            <span>답장이 있어요!</span>
            <div className="click-box">
              <p>편지 눌러 확인하기</p>
              <Image
                src={"/image/arrow-right.svg"}
                alt="더보기"
                width={25}
                height={25}
              />
            </div>
          </div>
          <div className="reply">
            <Image
              src="/image/letter.png"
              alt="답장 온 편지"
              width={300}
              height={200}
              style={{ marginLeft: "45px" }}
            />
          </div>
          <div className="reply">
            <Image
              className="reply"
              src="/image/letter.png"
              alt="답장 온 편지"
              width={300}
              height={200}
              style={{ marginLeft: "50px" }}
            />
          </div>
        </div>
        <div
          style={{
            border: "1px solid var(--color-gray-02)",
            margin: "100px -5px 120px",
            background: "var(--color-gray-02)",
          }}
        />
        <div style={{ margin: "0 auto" }}>
          <button className="btn-back">뒤로 가기</button>
        </div>
      </div>

      <style jsx>{`
        .container {
          font-family: "Pretendard" !important;
          background: var(--color-primary-light);
          color: black;
        }
        .content-wrapper {
          display: flex;
          flex-direction: column;
          margin: 0px auto;
          padding: 275px 0;
          max-width: 900px;
          width: 100%;
        }
        .content-box {
          width: 100%;
          margin: 5px;
          padding: 108px 120px 140px;
          box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1), 20px 25px 0px #faf8f5;
          background: #fffdf9;
          border-radius: 10px;
        }
        .head-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 50px;
        }
        .title {
          color: var(--color-primary-deep);
          font-weight: 700;
          font-size: 40px;
        }
        .stamp:hover {
          transform: scale(1.1);
        }
        .content {
          font-size: 20px;
          line-height: 250%;
          letter-spacing: 0.05rem;
          margin: 0;
        }
        .from-box > p {
          text-align: right;
          color: var(--color-gray-04);
          margin: 0;
          font-size: 18px;
        }
        .reply-wrapper {
          display: flex;
        }
        .reply:hover {
          transform: translate(0, -10px);
        }
        .text-box {
          display: flex;
          justify-content: flex-end;
          flex-direction: column;
          width: 184px;
          margin-left: 13px;
        }
        .text-box > span {
          color: var(--color-primary-dark);
          font-weight: 700;
          font-size: 32px;
        }
        .click-box {
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        .click-box > p {
          color: var(--color-gray-03);
          font-weight: 700;
          font-size: 18px;
          margin-right: 5px;
        }
        .btn-back {
          background: var(--color-primary-deep);
          border-radius: 35px;
          padding: 25px 40px;
          font-weight: 700;
          width: 143px;
          height: 69px;
          outline: 0;
          border: 0;
        }
        .btn-back:hover {
          background: white;
          color: var(--color-primary-deep);
          border: 1px solid var(--color-primary-deep);
        }
      `}</style>
    </div>
  );
}
