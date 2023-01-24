import Link from 'next/link';
import PostCard from '../PostCard';

const LetterList = ({ letters, type }) => {
  return (
    <>
      <div className="letters">
        <div className="letters__inner">
          {type === 'new' ? (
            <>
              {letters.length === 0 && (
                <div className="notice">편지가 존재하지 않습니다</div>
              )}
              {letters.map(({ id }) => (
                <Link href={`/letters/${id}`}>
                  <img className="letter" src="/image/letter.png"></img>
                </Link>
              ))}
            </>
          ) : (
            <>
              {letters.length === 0 && (
                <div className="notice">편지가 존재하지 않습니다</div>
              )}
              {letters.map((letter) => (
                <PostCard data={letter} size="" />
              ))}
            </>
          )}
        </div>
      </div>
      <style jsx>{`
        .letters {
          padding: 20px;
          &__inner {
            display: grid;
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr 1fr;
            grid-gap: 15px;
            margin-bottom: 20px;
            min-height: 500px;
            position: relative;

            .notice {
              position: absolute;
              width: 500px;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 24px;
              font-weight: 600;
            }

            .letter {
              width: 300px;
              cursor: pointer;
            }
          }
        }
      `}</style>
    </>
  );
};

export default LetterList;
