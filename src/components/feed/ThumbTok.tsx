import { useState, useRef, useEffect } from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import Avatar from '../avatar/Avatar';

interface Clip {
  id: string;
  videoUrl: string;
  user: any;
  likes: number;
  comments: number;
}

export default function ThumbTok() {
  const [clips] = useState<Clip[]>([
    { id: '1', videoUrl: '', user: { handle: 'user1' }, likes: 120, comments: 34 },
    { id: '2', videoUrl: '', user: { handle: 'user2' }, likes: 89, comments: 12 },
  ]);

  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold mb-3">ThumbTok</h2>
      <div className="flex overflow-x-auto space-x-4 pb-2">
        {clips.map(clip => (
          <div key={clip.id} className="flex-shrink-0 w-48 bg-card-bg rounded-lg overflow-hidden">
            <div className="h-64 bg-gray-700"></div>
            <div className="p-2">
              <div className="flex items-center space-x-2">
                <Avatar user={clip.user} size="sm" />
                <span className="text-sm">@{clip.user.handle}</span>
              </div>
              <div className="flex justify-between mt-2 text-xs text-text-secondary">
                <span><Heart size={14} className="inline" /> {clip.likes}</span>
                <span><MessageCircle size={14} className="inline" /> {clip.comments}</span>
                <Share2 size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}