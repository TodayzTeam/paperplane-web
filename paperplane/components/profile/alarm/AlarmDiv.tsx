import Toggle from './Toggle';

type Props = {
  title: string;
  data: {
    web: boolean;
    email: boolean;
  };
};

export default function AlarmDiv({ title, data }: Props) {
  const { web, email } = data;
  return (
    <>
      <div className="alarm__container">
        <div className="title">{title}</div>
        <div className="toggles">
          <Toggle initialState={web} />
          <Toggle initialState={email} />
        </div>
      </div>
      <style jsx>{`
        .alarm__container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;

          .title {
            font-size: 18px;
          }
          .toggles {
            display: flex;
            gap: 100px;
          }
        }
      `}</style>
    </>
  );
}
