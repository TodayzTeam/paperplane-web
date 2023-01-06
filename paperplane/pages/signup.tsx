import Button from '../components/home/Button';
import Tag from '../components/signup/Tag';

const DUMMY = [
  {
    id: 1,
    keyword: '고양이',
  },
  {
    id: 2,
    keyword: '고양이',
  },
  {
    id: 3,
    keyword: '고양이',
  },
  {
    id: 4,
    keyword: '고양이',
  },
];

export default function signup() {
  const temp_tag = DUMMY.map((ele) => {
    return {
      isSelected: true,
      ...ele,
    };
  });
  return (
    <>
      <div className="signup__container">
        <div className="left-box">
          <div className="left-box__sub">
            당신에게 꼭 맞는 편지를 보내드릴게요
          </div>
          <div className="left-box__title">
            관심 있는 주제를
            <br />
            선택해주세요
          </div>
          <div className="tags">
            {temp_tag
              .filter((ele) => ele.isSelected === true)
              .map(({ id, keyword }) => (
                <Tag key={id} keyword={keyword} onClick={() => {}} />
              ))}
          </div>
          <Button color="#3D5470" text="완료" onClick={() => {}} />
        </div>
        <div className="right-box">
          <div className="right-box__search">
            <input
              className="right-box__input"
              type="text"
              placeholder="주제를 입력해주세요"
            />
            <div className="tags">
              {DUMMY.map((tag) => (
                <Tag key={tag.id} keyword={tag.keyword} onClick={() => {}} />
              ))}
            </div>
          </div>
          <div>
            <div className="right-box__recommend">
              <div className="right-box__text">
                다른 사람들은 이런 단어를 선택했어요!
              </div>
              <div className="tags">
                {DUMMY.map((tag) => (
                  <Tag key={tag.id} keyword={tag.keyword} onClick={() => {}} />
                ))}
              </div>
            </div>
          </div>
          <div className="right-box__next">다음에 하기</div>
        </div>
      </div>
      <style jsx>{`
        .signup__container {
          background-image: url('/image/signup_background.png');
          background-size: 100% 100%;
          background-position: center center;
          height: calc(100vh - 60px);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 100px;

          .left-box {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            gap: 20px;

            width: 400px;
            &__sub {
              font-size: 18px;
              color: #787878;
            }
            &__title {
              font-size: 40px;
              font-weight: 700;
              color: #585858;
            }
          }

          .right-box {
            width: 500px;
            padding: 50px;
            box-sizing: border-box;
            background: rgba(255, 255, 255, 0.75);
            border-radius: 15px;
            position: relative;

            &__search {
              margin-bottom: 50px;
            }

            &__input {
              border-radius: 20px;
              padding: 10px 20px;
              border: 1.5px solid #787878;
              width: 100%;
              height: 45px;
              margin-bottom: 20px;
            }

            &__text {
              font-size: 15px;
              margin-bottom: 20px;
            }

            &__next {
              position: absolute;
              right: 20px;
              bottom: -30px;
              font-size: 15px;
              color: #787878;
              text-decoration: underline;
              cursor: pointer;
            }
          }

          .tags {
            width: 100%;
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </>
  );
}
