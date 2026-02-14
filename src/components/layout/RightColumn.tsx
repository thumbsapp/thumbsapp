import LiveArenaWidget from '../live/LiveArenaWidget';
import Link from 'next/link';
import { useAuthStore } from '@/lib/stores/authStore';
import Avatar from '../avatar/Avatar';
import { Users } from 'lucide-react';

export default function RightColumn() {
  const { user, isAuthenticated } = useAuthStore();

  return (
    <aside className="hidden lg:block w-80 fixed right-0 top-16 bottom-0 overflow-y-auto p-4 border-l border-border-color">
      {/* Live Arenas */}
      <LiveArenaWidget />

      {/* GETTR-style News Section */}
      <div className="mt-6">
        <h3 className="font-bold mb-3">GETTR News</h3>
        <div className="space-y-3">
          <div className="bg-card-bg p-3 rounded-lg">
            <p className="text-sm font-semibold">RUBIO REASSURES ALLIES: Secretary of State Marco Rubio offers reassuring message</p>
            <p className="text-xs text-text-secondary mt-1">thegatewaypundit.com</p>
          </div>
          <div className="bg-card-bg p-3 rounded-lg">
            <p className="text-sm font-semibold">Democrats Force Shutdown of DHS, Then Leave Town</p>
            <p className="text-xs text-text-secondary mt-1">theguardian.com</p>
          </div>
          <Link href="/news" className="text-sm text-primary">Show more</Link>
        </div>
      </div>

      {/* Sponsored Ads */}
      <div className="mt-6">
        <h3 className="font-bold mb-3">Sponsored</h3>
        <div className="bg-card-bg p-3 rounded-lg">
          <div className="h-20 bg-gray-700 rounded mb-2"></div>
          <p className="text-sm font-semibold">Get ThumbsUp Premium</p>
          <p className="text-xs text-text-secondary">Unlock exclusive features</p>
          <button className="mt-2 w-full bg-primary text-white py-1 rounded text-sm">Learn More</button>
        </div>
      </div>

      {/* Birthdays */}
      <div className="mt-6">
        <h3 className="font-bold mb-3">Birthdays</h3>
        <div className="bg-card-bg p-3 rounded-lg flex items-center space-x-2">
          <Avatar user={{ handle: 'friend1' }} size="sm" />
          <span className="text-sm">Alex and 3 others have birthdays today.</span>
        </div>
      </div>

      {/* Active Friends */}
      <div className="mt-6">
        <h3 className="font-bold mb-3 flex items-center"><Users size={16} className="mr-2" /> Active Friends</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Avatar user={{ handle: 'friend1' }} size="sm" />
              <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full"></span>
            </div>
            <span className="text-sm">@john_doe</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Avatar user={{ handle: 'friend2' }} size="sm" />
              <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full"></span>
            </div>
            <span className="text-sm">@jane_smith</span>
          </div>
        </div>
      </div>

      {/* Trending Topics */}
      <div className="mt-6">
        <h3 className="font-bold mb-3">Trending</h3>
        <div className="space-y-1 text-sm">
          <div>#SuperBowl</div>
          <div>#Election2026</div>
          <div>#ThumbsUpChampionship</div>
        </div>
      </div>
    </aside>
  );
}