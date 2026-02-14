import { useRouter } from 'next/router';
import { useAuthStore } from '@/lib/stores/authStore';
import Avatar from '@/components/avatar/Avatar';
import { useEffect, useState } from 'react';
import { User } from '@/lib/types';

export default function ProfilePage() {
  const router = useRouter();
  const { handle } = router.query;
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (handle && typeof handle === 'string') {
      // TODO: Replace with API fetch
      setUser({
        id: '1',
        displayName: 'John Doe',
        handle: handle,
        avatar: null, // replace with actual URL if available
        verified: true,
        reputation: 1200,
        country: 'US',
        followers: 1500,
        following: 300,
        bio: 'Competitive gamer',
      });
    }
  }, [handle]);

  if (!user) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-4">
          <Avatar user={user} size="lg" />
          <div>
            <h1 className="text-2xl font-bold">{user.displayName}</h1>
            <p className="text-gray-400">@{user.handle}</p>
            <p className="mt-2">{user.bio}</p>
            <div className="flex space-x-4 mt-2 text-sm text-gray-300">
              <span>{user.followers} Followers</span>
              <span>{user.following} Following</span>
              <span>Reputation: {user.reputation}</span>
            </div>
          </div>
        </div>

        {/* Tabs: Feed, Games, About */}
      </div>
    </div>
  );
}
