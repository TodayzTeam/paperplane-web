import { useRouter } from 'next/router';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../components/home/Button';
import {
  getRecommendInterest,
  searchInterest,
  setUserInterest,
} from '../components/signup/api';
import Header from '../components/signup/Header';
import { MomoizedTagList } from '../components/signup/tag/TagList';
import { interest } from '../components/signup/types';
import { setToken } from '../util/api';
import * as loginActions from '../store/modules/login';
import NewTag from '../components/signup/tag/NewTag';

export default function signup() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [keyword, setKeyword] = useState('');
  const [searchedInterest, setSearchedInterest] = useState(Array<interest>);
  const [recommendInterest, setRemmendInterest] = useState(Array<interest>);
  const [selectedInterest, setSelectedInterest] = useState(Array<interest>);

  const onToggleSelectedInterest = useCallback(
    (interest: interest) => {
      const { id } = interest;

      let isExist = false;
      selectedInterest.forEach((interest, idx) => {
        if (interest.id === id) {
          isExist = true;
          const tempInterests = [...selectedInterest];
          tempInterests.splice(idx, 1);
          setSelectedInterest(tempInterests);
        }
      });

      if (!isExist) {
        const newInterests = [...selectedInterest, interest];
        setSelectedInterest(newInterests);
      }
    },
    [selectedInterest]
  );

  const Login = useCallback(() => {
    dispatch(loginActions.login());
  }, [dispatch]);

  // 관심사 검색 이벤트 & api 호출
  let timer: ReturnType<typeof setTimeout>;
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(async () => {
      const keyword = e.target.value;
      const searchedData = await searchInterest(keyword);
      if (!searchedData.length) {
        setKeyword(keyword);
      }
      setSearchedInterest(searchedData);
    }, 500);
  };

  // 추천 관심사
  const getRecommend = async () => {
    const interestList = (await getRecommendInterest()) || [];
    setRemmendInterest(interestList);
  };

  // 관심사 등록
  const setInterest = async () => {
    const keywords = selectedInterest.map(({ keyword }) => keyword);
    if (await setUserInterest(keywords)) {
      alert('추가되었습니다!');
      Login();
      router.push('/');
    } else {
      alert('잠시 후 다시 시도해 주세요');
    }
  };

  const setNewInterest = async (keyword) => {
    if (await setUserInterest([keyword])) {
      Login();
    } else {
      alert('잠시 후 다시 시도해 주세요');
    }
  };

  useEffect(() => {
    setToken(localStorage.getItem('token'));
    getRecommend();
  }, []);

  return (
    <>
      <div className="signup__container">
        <div className="left-box">
          <Header />
          <MomoizedTagList
            tagList={selectedInterest}
            onToggle={onToggleSelectedInterest}
          />
          <Button
            color="#3D5470"
            text="완료"
            onClick={() => {
              setInterest();
            }}
          />
        </div>
        <div className="right-box">
          <div className="right-box__search">
            <input
              className="right-box__input"
              type="text"
              placeholder="관심 있는 주제를 검색하세요"
              onChange={onChangeHandler}
            />
            {searchedInterest.length === 0 && keyword.length !== 0 && (
              <NewTag
                keyword={keyword}
                onClick={() => {
                  setNewInterest(keyword);
                  setKeyword('');
                }}
              />
            )}
            <MomoizedTagList
              tagList={searchedInterest}
              onToggle={onToggleSelectedInterest}
            />
          </div>
          <div>
            <div className="right-box__recommend">
              <div className="right-box__text">
                다른 사람들은 이런 단어를 선택했어요!
              </div>
              <MomoizedTagList
                tagList={recommendInterest}
                onToggle={onToggleSelectedInterest}
              />
            </div>
          </div>
          <div
            className="right-box__next"
            onClick={() => {
              router.push('/');
            }}
          >
            다음에 하기
          </div>
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
        }
      `}</style>
    </>
  );
}
