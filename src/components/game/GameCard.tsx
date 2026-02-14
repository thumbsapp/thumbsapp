import { Game } from '@/lib/types';
import Link from 'next/link';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <div className="bg-card-bg rounded-lg p-4">
      <h3 className="font-bold">{game.name}</h3>
      <p className="text-sm text-text-secondary mt-1">{game.description}</p>
      <div className="flex justify-between items-center mt-3">
        <span className="text-xs bg-background px-2 py-1 rounded">{game.category}</span>
        <span className="text-accent-green font-semibold">${game.minStake} - ${game.maxStake}</span>
      </div>
      <Link href={`/game/${game.id}`} className="mt-3 block text-center bg-primary text-white py-2 rounded">
        Create Challenge
      </Link>
    </div>
  );
}