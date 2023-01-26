import Layout from '../../components/letterbox/Layout';
import {
  getReadedPosts,
  getReceivedPost,
} from '../../components/letterbox/util/api';
import { useState } from 'react';
import { useEffect } from 'react';
import usePage from '../../components/letterbox/hooks/usePage';
import Textbox from '../../components/letterbox/Textbox';
import LetterList from '../../components/letterbox/LetterList';
import Pagination from '../../components/letterbox/Pagination';
import Navigation from '../../components/letterbox/Navigation';

export default function received() {
  const newPage = usePage(0);
  const readPage = usePage(0);
  const [letters, setLetters] = useState([]);
  const [readedLetters, setReadedLetters] = useState([]);

  const getLetters = async (page: number) => {
    const letters = await getReceivedPost(page);
    setLetters(letters);
  };

  const getReadedLetters = async (page: number) => {
    const letters = await getReadedPosts(page);
    setReadedLetters(letters);
  };

  useEffect(() => {
    getLetters(newPage.page);
  }, [newPage.page]);

  useEffect(() => {
    getReadedLetters(readPage.page);
  }, [readPage.page]);

  return (
    <>
      <div className="letterbox-container">
        <div className="inner-box">
          <div className="title">편지함______</div>
          <div className="letterbox">
            <div className="letterbox__inner">
              <Textbox title="새 편지" sub="아직 읽지 않은 편지가 있어요" />
              <LetterList letters={letters} type="new" />
            </div>
            <Pagination
              page={newPage.page}
              onPageDown={newPage.onPageDown}
              onPageUp={newPage.onPageUp}
            />
            <hr />
            <div className="letterbox__inner">
              <Textbox title="읽은 편지" sub="지난 편지를 꺼내봐요." />
              <LetterList letters={readedLetters} type="read" />
            </div>
            <Pagination
              page={readPage.page}
              onPageDown={readPage.onPageDown}
              onPageUp={readPage.onPageUp}
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
          min-width: 1200px;
          background-color: white;

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
