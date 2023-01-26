export default function SearchInput() {
  return (
    <>
      <div className="search-box">
        <input className="hash-tag" type="text" placeholder="검색어" />
      </div>
      <style jsx>{`
        .search-box {
          width: 270px;
          height: 40px;
          border-radius: 30px;
          border: 1px solid var(--color-gray-02);
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #fff url('/image/btn-search.svg') no-repeat 93% 50%/20px
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
      `}</style>
    </>
  );
}
