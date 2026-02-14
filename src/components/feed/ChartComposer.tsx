import { useState } from 'react';
import { useAuthStore } from '@/lib/stores/authStore';
import Avatar from '../avatar/Avatar';
import { Image, Video, Smile, MapPin } from 'lucide-react';

export default function ChartComposer() {
  const { user, isAuthenticated } = useAuthStore();
  const [content, setContent] = useState('');

  if (!isAuthenticated) return null;

  return (
    <div className="bg-card-bg rounded-lg p-4 mb-6">
      <div className="flex space-x-3">
        <Avatar user={user} size="md" />
        <input
          type="text"
          placeholder="What's happening?"
          className="flex-1 bg-background border border-border-color rounded-lg px-4 py-2 text-text-primary"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      </div>
      <div className="flex justify-between mt-3">
        <div className="flex space-x-2">
          <button className="p-2 hover:bg-background rounded"><Image size={18} /></button>
          <button className="p-2 hover:bg-background rounded"><Video size={18} /></button>
          <button className="p-2 hover:bg-background rounded"><Smile size={18} /></button>
          <button className="p-2 hover:bg-background rounded"><MapPin size={18} /></button>
        </div>
        <button className="bg-primary text-white px-4 py-1 rounded">Post</button>
      </div>
    </div>
  );
}