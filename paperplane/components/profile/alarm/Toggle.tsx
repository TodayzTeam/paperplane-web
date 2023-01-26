import { useCallback, useState } from 'react';

type Props = {
  initialState: boolean;
};

export default function Toggle({ initialState }: Props) {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState((state) => !state), []);

  return (
    <>
      <div className="toggle__container">
        <input
          type="checkbox"
          className="toggle__input"
          checked={state}
          onChange={() => {}}
          style={{ display: 'none' }}
        />
        <div
          className="toggle__switch"
          onClick={() => {
            toggle();
          }}
        ></div>
      </div>
      <style jsx>{`
        .toggle__container {
          display: inline-block;
          cursor: pointer;
          user-select: none;
        }
        .toggle__input {
          display: none;

          &:checked + div {
            background: #6b85a4;
          }

          &:checked + div:after {
            left: calc(100% - 26px);
          }

          &:disabled + div {
            opacity: 0.7;
            cursor: not-allowed;

            &:after {
              opacity: 0.7;
            }
          }
        }
        .toggle__switch {
          width: 64px;
          height: 30px;
          padding: 2px;
          border-radius: 15px;
          background-color: #ccc;
          transition: background-color 0.2 ease-out;
          box-sizing: border-box;

          &:after {
            content: '';
            position: relative;
            left: 0;
            display: block;
            width: 26px;
            height: 26px;
            border-radius: 50%;
            background-color: white;
            transition: left 0.2s ease-out;
          }
        }
      `}</style>
    </>
  );
}
