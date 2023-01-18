import axios from 'axios';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import Button from '../components/home/Button';
import Tag from '../components/signup/Tag';

export default function signup() {
  const router = useRouter();
  const [recommendInterest, setRecommendInterest] = useState([
    { id: 1, keyword: '고양이' },
    { id: 2, keyword: '고양이2' },
    { id: 3, keyword: '고양이3' },
  ]);
  const [searchedInterest, setSearchedInterest] = useState([]);
  const [selectedInterest, setSelectedInterest] = useState([]);

  const onSubmitInterest = () => {
    setUserInterest();
    //router.push('/');
  };

  const onAddSelectedTag = (tag) => {
    let isExist = false;
    selectedInterest.forEach(({ id }) => {
      if (id === tag.id) isExist = true;
    });

    if (!isExist) {
      const newSelectedInterest = [...selectedInterest, tag];
      setSelectedInterest(newSelectedInterest);
    }
  };

  const onRemoveSelectedTag = ({ id }) => {
    const newSelectedInterest = selectedInterest.filter((tag) => tag.id !== id);
    setSelectedInterest(newSelectedInterest);
  };

  let timer = null;
  const onChangeHandler = (e) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      searchInterest(e.target.value);
    }, 500);
  };

  const setUserInterest = async () => {
    const keywordArr = selectedInterest.map(({ keyword }) => keyword);
    const formData = new FormData();
    formData.append('keyword', JSON.stringify(keywordArr));

    try {
      const res = await axios.post('/api/user/interest', formData, {
        headers: {
          accessToken: `${localStorage.getItem('token')}`,
        },
      });
      if (res.status === 200) {
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getRecommendInterest = async () => {
    try {
      const res = await axios.get('/api/interest/recommend', {
        headers: {
          'Content-type': 'application/json',
          Accept: 'application/json',
        },
      });
      if (res.status === 200) {
        setRecommendInterest(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const searchInterest = async (keyword: string) => {
    try {
      const res = await axios.get(`/interest/search/${keyword}`, {
        headers: {
          'Content-type': 'application/json',
        },
      });
      if (res.status === 200) {
        setSearchedInterest(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecommendInterest();
  }, []);

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
            {selectedInterest.map(({ id, keyword }) => (
              <Tag
                key={id}
                keyword={keyword}
                onClick={() => {
                  onRemoveSelectedTag({ id });
                }}
              />
            ))}
          </div>
          <Button
            color="#3D5470"
            text="완료"
            onClick={() => {
              onSubmitInterest();
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
            <div className="tags">
              {searchedInterest.map((tag) => (
                <Tag
                  key={tag.id}
                  keyword={tag.keyword}
                  onClick={() => {
                    onAddSelectedTag(tag);
                  }}
                />
              ))}
            </div>
          </div>
          <div>
            <div className="right-box__recommend">
              <div className="right-box__text">
                다른 사람들은 이런 단어를 선택했어요!
              </div>
              <div className="tags">
                {recommendInterest.map((tag) => (
                  <Tag
                    key={tag.id}
                    keyword={tag.keyword}
                    onClick={() => {
                      onAddSelectedTag(tag);
                    }}
                  />
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
