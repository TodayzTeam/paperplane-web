import { useState } from 'react';
import LetterList from '../letterbox/LetterList';
import Textbox from '../letterbox/Textbox';
import Navigation from './Navigation';
import Pagination from './Pagination';

type Props = {
  letters: {};
  pageUp: number | (() => void);
  pageDown: number | (() => void);
};

export default function Layout({ letters, pageUp, pageDown }: Props) {
  const [readedPosts, setReadedPosts] = useState([]);

  const onHandleReadedPosts = async () => {};

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
            <Pagination />
            <hr />
            <div className="letterbox__inner">
              <Textbox title="읽은 편지" sub="지난 편지를 꺼내봐요." />
              <LetterList letters={''} type="read" />
            </div>
            <Pagination />
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
