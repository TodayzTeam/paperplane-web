import Link from 'next/link';
import { useRouter } from 'next/router';
import Circle from '../letterbox/Circle';
import LetterList from '../letterbox/LetterList';
import Textbox from '../letterbox/Textbox';

export default function Layout() {
  const router = useRouter();
  const subPath = router.pathname.substring(11);

  const activeHandler = (path) => {
    return subPath === path;
  };

  return (
    <>
      <div className="letterbox-container">
        <div className="inner-box">
          <div className="title">편지함______</div>
          <div className="letterbox">
            <div className="letterbox__inner">
              <Textbox title="새 편지" sub="아직 읽지 않은 편지가 있어요" />
              <LetterList letters={''} type="new" />
            </div>
            <hr />
            <div className="letterbox__inner">
              <Textbox title="읽은 편지" sub="지난 편지를 꺼내봐요." />
              <LetterList letters={''} type="read" />
            </div>
          </div>
        </div>
        <div className="letter-state">
          <Link href="/letterbox/received">
            <Circle text="받은 편지" active={activeHandler('received')} />
          </Link>
          <Link href="/letterbox/sended">
            <Circle text="보낸 편지" active={activeHandler('sended')} />
          </Link>
          <Link href="/letterbox/kept">
            <Circle text="수집한 편지" active={activeHandler('kept')} />
          </Link>
        </div>
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
