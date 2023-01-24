type Props = {
  title: string;
};

export default function ProfileTitle({ title }: Props) {
  return (
    <>
      <div className="title">{title}</div>
      <style jsx>{`
        .title {
          font-weight: 700;
          font-size: 24px;
          color: #585858;
          margin-bottom: 50px;
        }
      `}</style>
    </>
  );
}
