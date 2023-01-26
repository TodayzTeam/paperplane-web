import {
  getSentPost,
  getGroupSentPost,
} from '../../components/letterbox/util/api';
import { useState } from 'react';
import { useEffect } from 'react';
import usePage from '../../components/letterbox/hooks/usePage';
import Textbox from '../../components/letterbox/Textbox';
import LetterList from '../../components/letterbox/LetterList';
import Pagination from '../../components/letterbox/Pagination';
import Navigation from '../../components/letterbox/Navigation';

export default function sent() {
  const randomPage = usePage(0);
  const groupPage = usePage(0);
  const [letters, setLetters] = useState([]);
  const [groupLetters, setGroupLetters] = useState([]);

  const getLetters = async (page: number) => {
    const letters = await getSentPost(page);
    setLetters(letters);
  };

  const getReadedLetters = async (page: number) => {
    const letters = await getGroupSentPost(page);
    setGroupLetters(letters);
  };

  useEffect(() => {
    getLetters(randomPage.page);
  }, [randomPage.page]);

  useEffect(() => {
    getReadedLetters(groupPage.page);
  }, [groupPage.page]);

  return (
    <>
      <div className="letterbox-container">
        <div className="inner-box">
          <div className="title">편지함______</div>
          <div className="letterbox">
            <div className="letterbox__inner">
              <Textbox title="랜덤 편지" sub="무작위로 보낸 편지에요" />
              <LetterList letters={letters} type="read" />
            </div>
            <Pagination
              page={randomPage.page}
              onPageDown={randomPage.onPageDown}
              onPageUp={randomPage.onPageUp}
            />
            <hr />
            <div className="letterbox__inner">
              <Textbox title="그룹 편지" sub="그룹에게 보낸 편지에요" />
              <LetterList letters={groupLetters} type="read" />
            </div>
            <Pagination
              page={groupPage.page}
              onPageDown={groupPage.onPageDown}
              onPageUp={groupPage.onPageUp}
            />
          </div>
        </div>
        <Navigation />
      </div>
      <style jsx>{`
        .letterbox-container {
          display: flex;
          margin: 80px auto;
          width: 70%;

          .inner-box {
            flex-grow: 1;
          }

          .title {
            color: #3d5470;
            font-size: 52px;
            font-weight: 700;
          }
          .letterbox {
            padding-left: 160px;

            hr {
              color: #bababa;
            }

            &__inner {
              padding: 40px 0;
              display: flex;
            }
          }
        }
      `}</style>
    </>
  );
}
