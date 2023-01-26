import { getLikedPost } from '../../components/letterbox/util/api';
import { useState } from 'react';
import { useEffect } from 'react';
import usePage from '../../components/letterbox/hooks/usePage';
import Textbox from '../../components/letterbox/Textbox';
import LetterList from '../../components/letterbox/LetterList';
import Pagination from '../../components/letterbox/Pagination';
import Navigation from '../../components/letterbox/Navigation';

export default function kept() {
  const page = usePage(0);
  const [letters, setLetters] = useState([]);

  const getLetters = async (page: number) => {
    const letters = await getLikedPost(page);
    setLetters(letters);
  };

  useEffect(() => {
    getLetters(page.page);
  }, [page.page]);

  return (
    <>
      <div className="letterbox-container">
        <div className="inner-box">
          <div className="title">편지함______</div>
          <div className="letterbox">
            <div className="letterbox__inner">
              <Textbox title="수집한 편지" sub="" />
              <LetterList letters={letters} type="read" />
            </div>
            <Pagination
              page={page.page}
              onPageDown={page.onPageDown}
              onPageUp={page.onPageUp}
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
            max-width: 1060px;

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
