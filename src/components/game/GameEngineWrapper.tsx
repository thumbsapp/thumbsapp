import { Game } from '@/lib/types';
import { useEffect, useRef } from 'react';
import { deterministicEngine } from '@/lib/game-engines';

interface GameEngineWrapperProps {
  game: Game;
}

export default function GameEngineWrapper({ game }: GameEngineWrapperProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Initialize deterministic game engine
    if (canvasRef.current) {
      deterministicEngine.initialize(game, canvasRef.current);
    }
  }, [game]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{game.name}</h1>
      <canvas ref={canvasRef} className="w-full h-96 bg-card-bg rounded-lg" />
      <div className="mt-4 flex justify-between">
        <button className="bg-accent-green text-black px-6 py-2 rounded">Accept Challenge</button>
        <button className="bg-accent-blue text-white px-6 py-2 rounded">Shoutout</button>
        <button className="bg-accent-gold text-black px-6 py-2 rounded">Donate</button>
      </div>
    </div>
  );
}