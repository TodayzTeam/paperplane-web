import { useState } from 'react';

interface tagProps {
  color?: string;
  keyword: string;
  onClick: () => void;
}

const Tag = (props: tagProps) => {
  const { color = '#E890A5', keyword, onClick } = props;
  const [isChecked, setIsChecked] = useState(false);
  const backColor = isChecked ? '#E890A5' : '#fff';
  const textColor = isChecked ? '#fff' : '#585858';

  return (
    <>
      <div
        className="tag__container"
        onClick={() => {
          onClick();
          setIsChecked(!isChecked);
        }}
      >
        {keyword}
        {isChecked ? (
          <img src="/image/check.svg" />
        ) : (
          <img src="/image/pink-plus.svg" />
        )}
      </div>
      <style jsx>{`
        .tag__container {
          display: inline-flex;
          align-items: center;
          border-radius: 20px;
          border: 1px solid #e890a5;
          background-color: ${backColor};
          color: ${textColor};
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

export default Tag;
