import { Comment } from '@/lib/types';
import Avatar from '../avatar/Avatar';
import { formatDistanceToNow } from 'date-fns';

interface CommentSectionProps {
  chartId: string;
  comments: Comment[];
}

export default function CommentSection({ chartId, comments }: CommentSectionProps) {
  return (
    <div className="mt-4 space-y-3">
      <div className="flex space-x-2">
        <Avatar user={null} size="sm" />
        <input
          type="text"
          placeholder="Write a comment..."
          className="flex-1 bg-background border border-border-color rounded-full px-4 py-2 text-sm"
        />
      </div>
      {comments.map(comment => (
        <div key={comment.id} className="flex space-x-2">
          <Avatar user={comment.author} size="sm" />
          <div className="flex-1 bg-background rounded-lg p-2">
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-sm">{comment.author.displayName}</span>
              <span className="text-text-secondary text-xs">{formatDistanceToNow(new Date(comment.createdAt))} ago</span>
            </div>
            <p className="text-sm mt-1">{comment.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}