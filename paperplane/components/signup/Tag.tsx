import { useState } from 'react';

interface tagProps {
  color?: string;
  keyword: string;
  onClick: () => void;
}

const Tag = (props: tagProps) => {
  const { color = '#E890A5', keyword, onClick } = props;
  const textColor = color === '#fff' ? color : '#fff';
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <div
        className="tag__container"
        onClick={() => {
          onClick();
        }}
      >
        {keyword}
        {isChecked ? '✅' : '+'}
      </div>
      <style jsx>{`
        .tag__container {
          display: flex;
          align-items: center;
          border-radius: 20px;
          background-color: ${color};
          color: ${textColor};
          font-size: 15px;
          padding: 10px 25px;
          cursor: pointer;

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
