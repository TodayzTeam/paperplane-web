import React from 'react';
import { interest } from '../types';
import Tag from './Tag';

export default function TagList({ tagList, onToggle }) {
  return (
    <>
      <div className="tags">
        {tagList.length > 0 &&
          tagList.map((tag: interest) => (
            <Tag
              key={tag.id}
              keyword={tag.keyword}
              onClick={() => {
                onToggle(tag);
              }}
            />
          ))}
      </div>
      <style jsx>{`
        .tags {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }
      `}</style>
    </>
  );
}

export const MomoizedTagList = React.memo(TagList);
