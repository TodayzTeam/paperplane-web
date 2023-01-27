import PostCard from "../letter/PostCard";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";

type Props = {
  letters: [];
  type: string;
};

const LetterList = ({ letters, type }: Props) => {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const onChangeHandler = (e: ChangeEvent) => {
    setKeyword(e.target.value);
  };
  return (
    <>
      <div className="letters">
        <div className="search-input__wrapper">
          <div className="search-box">
            <input
              className="hash-tag"
              type="text"
              placeholder="검색어"
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="letters__inner">
          {type === "new" ? (
            <>
              {letters?.length === 0 && (
                <img className="notice" src="/image/noletter.png" />
              )}
              {letters?.map(({ id }) => (
                <img
                  className="letter"
                  src="/image/letter.png"
                  onClick={() => {
                    router.push({
                      pathname: "/letters/detail",
                      query: { id },
                    });
                  }}
                ></img>
              ))}
            </>
          ) : (
            <>
              {letters?.length === 0 && (
                <img className="notice" src="/image/noletter.png" />
              )}
              {letters
                ?.filter(
                  ({ title, content }: { title: string; content: string }) =>
                    title.includes(keyword) || content.includes(keyword)
                )
                .map((letter) => (
                  <PostCard data={letter} size="" clickHandler={null} />
                ))}
            </>
          )}
        </div>
      </div>
      <style jsx>{`
        .letters {
          padding: 20px;
          width: 100%;
          max-width: 712px;

          .search-input__wrapper {
            display: flex;
            justify-content: flex-end;

            .search-box {
              width: 270px;
              height: 40px;
              border-radius: 30px;
              border: 1px solid var(--color-gray-02);
              display: flex;
              flex-direction: column;
              justify-content: center;
              background: #fff url("/image/btn-search.svg") no-repeat 93% 50%/20px
                26px;

              input {
                width: 220px;
                height: 40px;
                border-radius: 25px;
                border: none;
                padding-left: 20px;
                margin-right: 50px;
                box-sizing: border-box;
                outline: none;
              }
            }
          }
          &__inner {
            display: grid;
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr 1fr;
            place-items: center center;
            grid-gap: 15px;
            margin-bottom: 20px;
            min-height: 500px;
            position: relative;

            .notice {
              position: absolute;
              left: calc(50% - 75px);
              top: 45%;
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
