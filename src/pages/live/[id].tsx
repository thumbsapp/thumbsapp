import { useRouter } from 'next/router';
import LiveMatchView from '@/components/live/LiveMatchView';
import { useLiveStore } from '@/lib/stores/liveStore';
import { useEffect } from 'react';

export default function LiveMatchPage() {
  const router = useRouter();
  const { id } = router.query;
  const { currentMatch, fetchMatch } = useLiveStore();

  useEffect(() => {
    if (id && typeof id === 'string') {
      fetchMatch(id);
    }
  }, [id, fetchMatch]);

  if (!currentMatch) return <div>Loading...</div>;

  return (
    <div key={id} className="min-h-screen bg-gray-900">
      <LiveMatchView match={currentMatch} />
    </div>
  );
}
