import { Chart } from '@/lib/types';
import { useState } from 'react';
import { Heart, MessageCircle, Repeat2, Share } from 'lucide-react';

interface ReactionBarProps {
  chart: Chart;
  onCommentToggle: () => void;
}

export default function ReactionBar({ chart, onCommentToggle }: ReactionBarProps) {
  const [reaction, setReaction] = useState<string | null>(null);

  return (
    <div className="flex justify-between mt-3 pt-3 border-t border-border-color">
      <button
        className="flex items-center space-x-1 text-text-secondary hover:text-primary"
        onClick={() => setReaction(reaction === 'like' ? null : 'like')}
      >
        <Heart size={18} fill={reaction === 'like' ? 'currentColor' : 'none'} />
        <span>{chart.reactions.likes}</span>
      </button>
      <button className="flex items-center space-x-1 text-text-secondary hover:text-primary" onClick={onCommentToggle}>
        <MessageCircle size={18} />
        <span>{chart.reactions.comments}</span>
      </button>
      <button className="flex items-center space-x-1 text-text-secondary hover:text-primary">
        <Repeat2 size={18} />
        <span>{chart.reactions.reposts}</span>
      </button>
      <button className="flex items-center space-x-1 text-text-secondary hover:text-primary">
        <Share size={18} />
        <span>Share</span>
      </button>
    </div>
  );
}