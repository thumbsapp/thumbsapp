import { Match } from '@/lib/types';
import Avatar from '../avatar/Avatar';
import { useWebSocket } from '@/hooks/useWebSocket';
import { useEffect, useState } from 'react';

interface LiveMatchViewProps {
  match: Match;
}

export default function LiveMatchView({ match }: LiveMatchViewProps) {
  const { socket, isConnected } = useWebSocket();
  const [score, setScore] = useState(match.score);
  const [spectators, setSpectators] = useState(match.spectators);

  useEffect(() => {
    if (!socket) return;
    socket.emit('join-match', match.id);
    socket.on('match-update', (data) => {
      setScore(data.score);
      setSpectators(data.spectators);
    });
    return () => {
      socket.off('match-update');
    };
  }, [socket, match.id]);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">{match.title}</h1>
        <span className="text-sm bg-primary px-2 py-1 rounded">🔴 LIVE · {spectators} watching</span>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="text-center">
          <Avatar user={{ handle: match.playerA }} size="xl" />
          <p className="mt-2 font-semibold">{match.playerA}</p>
          <p className="text-3xl font-bold text-accent-green">{score.split('-')[0]}</p>
        </div>
        <div className="text-center">
          <Avatar user={{ handle: match.playerB }} size="xl" />
          <p className="mt-2 font-semibold">{match.playerB}</p>
          <p className="text-3xl font-bold text-accent-green">{score.split('-')[1]}</p>
        </div>
      </div>
      <div className="mt-8">
        {/* Game engine will be embedded here */}
        <div className="bg-card-bg h-64 rounded-lg flex items-center justify-center">
          Game View (Deterministic Engine)
        </div>
      </div>
    </div>
  );
}