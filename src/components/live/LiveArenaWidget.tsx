import { useLiveStore } from '@/lib/stores/liveStore';
import Link from 'next/link';

export default function LiveArenaWidget() {
  const { liveMatches } = useLiveStore();

  return (
    <div>
      <h3 className="font-bold mb-3">Live Arenas</h3>
      <div className="space-y-3">
        {liveMatches.slice(0, 3).map(match => (
          <Link key={match.id} href={`/live/${match.id}`} className="block bg-card-bg p-3 rounded-lg hover:bg-opacity-80">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">{match.title}</p>
                <p className="text-xs text-text-secondary">{match.playerA} vs {match.playerB}</p>
              </div>
              <span className="text-xs text-primary">{match.spectators} watching</span>
            </div>
            <div className="mt-2 text-sm text-accent-green">Score: {match.score}</div>
          </Link>
        ))}
        <Link href="/live" className="text-sm text-primary">View all arenas</Link>
      </div>
    </div>
  );
}