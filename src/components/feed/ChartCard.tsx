import { Chart } from '@/lib/types';
import Avatar from '../avatar/Avatar';
import ReactionBar from './ReactionBar';
import CommentSection from './CommentSection';
import { formatDistanceToNow } from 'date-fns';
import { MoreHorizontal } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

interface ChartCardProps {
  chart: Chart;
}

export default function ChartCard({ chart }: ChartCardProps) {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="bg-card-bg rounded-lg p-4">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex space-x-3">
          <Avatar user={chart.author} size="md" />
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold">{chart.author.displayName}</span>
              {chart.author.verified && <span className="text-primary text-xs">✓</span>}
              <span className="text-text-secondary text-sm">@{chart.author.handle}</span>
              <span className="text-text-secondary text-xs">{formatDistanceToNow(new Date(chart.createdAt))} ago</span>
            </div>
            {/* Source handle for GETTR-style posts */}
            {chart.sourceHandle && (
              <div className="text-xs text-primary font-semibold mt-1">{chart.sourceHandle}</div>
            )}
          </div>
        </div>
        <button><MoreHorizontal size={18} /></button>
      </div>

      {/* Content */}
      <div className="mt-3">
        {chart.headline && (
          <h3 className="font-bold text-lg hover:text-primary cursor-pointer">{chart.headline}</h3>
        )}
        {chart.content && <p className="text-text-primary">{chart.content}</p>}

        {/* GETTR-style link preview */}
        {chart.linkUrl && (
          <div className="mt-3 border border-border-color rounded-lg overflow-hidden bg-background/50">
            <div className="px-3 pt-2 text-xs text-text-secondary flex items-center space-x-1">
              {chart.sourceHandle && <span className="font-semibold text-primary">{chart.sourceHandle}</span>}
              <span>· {formatDistanceToNow(new Date(chart.createdAt))} ago</span>
            </div>
            {chart.headline && (
              <h3 className="px-3 pt-1 font-bold text-lg hover:text-primary cursor-pointer">
                {chart.headline}
              </h3>
            )}
            <a
              href={chart.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 border-t border-border-color hover:bg-card-bg transition"
            >
              <div className="flex flex-col sm:flex-row">
                {chart.linkImage && (
                  <div className="sm:w-1/3 h-32 bg-gray-700">
                    <img src={chart.linkImage} alt="" className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-3 flex-1">
                  <p className="font-semibold text-sm line-clamp-2">{chart.linkTitle || 'Read more'}</p>
                  <p className="text-xs text-text-secondary mt-1 line-clamp-2">{chart.linkDescription}</p>
                  <p className="text-xs text-primary mt-2">{new URL(chart.linkUrl).hostname.replace('www.', '')}</p>
                </div>
              </div>
            </a>
            <div className="px-3 pb-2 flex space-x-4 text-xs text-text-secondary border-t border-border-color mt-2 pt-2">
              <span>💬 {chart.reactions.comments}</span>
              <span>🔄 {chart.reactions.reposts}</span>
              <span>❤️ {chart.reactions.likes}</span>
            </div>
          </div>
        )}

        {/* Game challenge details (if applicable) */}
        {chart.gameType && (
          <div className="mt-3 bg-background p-3 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-sm font-semibold">{chart.gameType}</span>
                <span className="text-xs text-text-secondary ml-2">{chart.difficulty}</span>
              </div>
              <div className="text-accent-green font-bold">${chart.stakeLevel}</div>
            </div>
            <div className="flex space-x-2 mt-2">
              <button className="flex-1 bg-accent-green text-black py-1 rounded text-sm font-semibold">Accept Challenge</button>
              <button className="px-3 bg-accent-blue text-white py-1 rounded text-sm">Shoutout</button>
              <button className="px-3 bg-accent-gold text-black py-1 rounded text-sm">Donate</button>
            </div>
          </div>
        )}
      </div>

      {/* Reaction Bar */}
      <ReactionBar chart={chart} onCommentToggle={() => setShowComments(!showComments)} />

      {/* Comment Section */}
      {showComments && <CommentSection chartId={chart.id} comments={chart.comments} />}
    </div>
  );
}