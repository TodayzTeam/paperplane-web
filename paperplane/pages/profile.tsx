import Button from '../components/home/Button';
import AlarmDiv from '../components/profile/alarm/AlarmDiv';
import Toggle from '../components/profile/alarm/Toggle';
import ProfileTitle from '../components/profile/ProfileTitle';
import Tag from '../components/signup/tag/Tag';

export default function profile() {
  return (
    <>
      <div className="user__container">
        <header className="header-text">설정____</header>
        <main className="main">
          <div className="main__information">
            <ProfileTitle title="내 정보" />
            <div className="box">
              <div className="box__profile"></div>
              <div className="box__input">
                <div className="input__container">
                  <div className="input__title">이름</div>
                  <input type="text" />
                </div>
                <div className="input__container">
                  <div className="input__title">이메일</div>
                  <input type="email" />
                  <button className="email__button">이메일 변경</button>
                </div>
              </div>
            </div>
          </div>
          <div className="main__keyword">
            <ProfileTitle title="나의 관심 키워드" />
            <div className="keyword__box">
              <Tag keyword="게임" onClick={() => {}} />
            </div>
            <div className="keyword__notice">
              선택한 키워드와 관련된 편지 위주로 받아요.
            </div>
          </div>
          <div className="main__alarm">
            <ProfileTitle title="알림 설정" />
            <div className="alarm__textbox">
              <div>알림 센터</div>
              <div>이메일</div>
            </div>
            <AlarmDiv title="편지 수신" data={{ web: true, email: false }} />
            <AlarmDiv title="답장" data={{ web: true, email: false }} />
            <hr />
            <AlarmDiv
              title="이 달의 편지 선정"
              data={{ web: true, email: false }}
            />
            <AlarmDiv title="이 달의 편지" data={{ web: true, email: false }} />
            <hr />
            <AlarmDiv title="그룹원 알림" data={{ web: true, email: false }} />
          </div>
        </main>
        <div className="button__wrapper">
          <Button color="#3D5470" text="저장" onClick={() => {}} />
        </div>
      </div>

      <style jsx>{`
        .user__container {
          padding: 100px 140px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 100px;
          background-image: url('/image/background-group.png');

          .header-text {
            width: 100%;
            text-align: left;
            font-weight: 700;
            font-size: 52px;
            color: #3d5470;
          }
          .main {
            background: #fffdf9;
            box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
            border-radius: 20px;
            width: 1200px;
            padding: 120px;
            display: flex;
            flex-direction: column;
            gap: 100px;

            .box {
              display: flex;
              align-items: center;
              gap: 150px;

              &__profile {
                width: 150px;
                height: 150px;
                border-radius: 50%;
                border: 3px solid #bababa;
                background: url('/image/letter.png');
              }

              &__input {
                display: flex;
                flex-direction: column;
                gap: 20px;

                .input__container {
                  display: flex;
                  align-items: center;
                  gap: 15px;

                  .input__title {
                    font-weight: 400;
                    font-size: 16px;
                    color: #787878;
                    width: 50px;
                  }

                  input {
                    border: 1px solid #bababa;
                    border-radius: 10px;
                    padding: 10px;
                    color: #585858;
                    font-size: 16px;
                    font-family: 'Roboto';
                  }

                  .email__button {
                    background: #bababa;
                    border-radius: 20px;
                    padding: 10px 15px;
                    border: none;
                    font-weight: 700;
                    font-size: 12px;
                    color: #ffffff;
                    cursor: pointer;
                  }
                }
              }
            }

            &__keyword {
              .keyword__box {
                background: rgba(234, 234, 234, 0.5);
                border-radius: 10px;
                padding: 20px;
                display: flex;
                flex-wrap: wrap;
                gap: 20px;
                min-height: 180px;
              }
              .keyword__notice {
                margin-top: 10px;
                font-size: 15px;
                color: #787878;
                text-align: right;
              }
            }

            &__alarm {
              .alarm__textbox {
                display: flex;
                justify-content: flex-end;
                gap: 100px;
                font-size: 15px;
                color: #787878;
                div {
                  width: 65px;
                  text-align: center;
                }
              }
              hr {
                border: 1px solid #eaeaea;
                margin: 40px 0;
              }
            }
          }

          .button__wrapper {
            display: flex;
            width: 100%;
            padding: 0 120px;
            justify-content: flex-end;
          }
        }
      `}</style>
    </>
  );
}
