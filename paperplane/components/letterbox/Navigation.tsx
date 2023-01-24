import Link from 'next/link';
import { useRouter } from 'next/router';
import Circle from './Circle';

export default function Navigation() {
  const router = useRouter();
  const subPath = router.pathname.substring(11);

  const activeHandler = (path: string) => {
    return subPath === path;
  };
  return (
    <>
      <div className="letter-state">
        <Link href="/letterbox/received">
          <Circle text="받은 편지" active={activeHandler('received')} />
        </Link>
        <Link href="/letterbox/sent">
          <Circle text="보낸 편지" active={activeHandler('sent')} />
        </Link>
        <Link href="/letterbox/kept">
          <Circle text="수집한 편지" active={activeHandler('kept')} />
        </Link>
      </div>
    </>
  );
}
