import { useGameStore } from '@/lib/stores/gameStore';
import GameCard from './GameCard';
import { useState } from 'react';

const categories = [
  'Logic & Puzzle',
  'Reaction & Speed',
  'Trivia & Knowledge',
  'Math & Strategy',
  'Memory & Pattern',
  'Board & Abstract Strategy',
];

export default function GameStore() {
  const { games } = useGameStore();
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredGames = games.filter(g => g.category === selectedCategory);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Game Store</h1>
      <div className="flex space-x-2 mb-6 overflow-x-auto">
        {categories.map(cat => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
              selectedCategory === cat ? 'bg-primary text-white' : 'bg-card-bg'
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredGames.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}