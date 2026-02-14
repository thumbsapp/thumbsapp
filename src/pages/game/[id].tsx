import { useRouter } from 'next/router';
import GameEngineWrapper from '@/components/game/GameEngineWrapper';
import { useGameStore } from '@/lib/stores/gameStore';
import { useEffect } from 'react';

export default function GamePage() {
  const router = useRouter();
  const { id } = router.query;
  const { currentGame, loadGame } = useGameStore();

  useEffect(() => {
    if (id && typeof id === 'string') {
      loadGame(id);
    }
  }, [id, loadGame]);

  if (!currentGame) return <div>Loading...</div>;

  return (
    <div key={id} className="min-h-screen bg-gray-900">
      <GameEngineWrapper game={currentGame} />
    </div>
  );
}
