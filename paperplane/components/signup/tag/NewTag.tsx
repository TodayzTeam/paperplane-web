import { useState } from 'react';

interface tagProps {
  keyword: string;
  onClick: () => void;
}

const NewTag = (props: tagProps) => {
  const { keyword, onClick } = props;

  return (
    <>
      <div
        className="tag__container"
        onClick={() => {
          onClick();
        }}
      >
        '{keyword}' 추가하기
        <img src="/image/pink-plus.svg" />
      </div>
      <style jsx>{`
        .tag__container {
          display: inline-flex;
          align-items: center;
          border-radius: 20px;
          border: 1px solid #e890a5;
          background-color: none;
          color: #585858;
          font-size: 15px;
          padding: 10px 25px;
          cursor: pointer;
          gap: 10px;

          &:hover {
            opacity: 0.8;
            transition: opacity 0.1s linear;
          }
        }
      `}</style>
    </>
  );
};

export default NewTag;
