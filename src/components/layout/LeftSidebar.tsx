import Link from 'next/link';
import { useAuthStore } from '@/lib/stores/authStore';
import { Home, Compass, Users, Bookmark, Calendar, Briefcase, LogIn } from 'lucide-react';

export default function LeftSidebar() {
  const { isAuthenticated } = useAuthStore();

  return (
    <aside className="hidden lg:block w-64 fixed left-0 top-16 bottom-0 overflow-y-auto p-4 border-r border-border-color">
      <nav className="space-y-2">
        <Link href="/" className="flex items-center space-x-2 p-2 hover:bg-card-bg rounded">
          <Home size={20} /><span>Home</span>
        </Link>
        <Link href="/create" className="flex items-center space-x-2 p-2 hover:bg-card-bg rounded">
          <Compass size={20} /><span>Create</span>
        </Link>
        <Link href="/live" className="flex items-center space-x-2 p-2 hover:bg-card-bg rounded">
          <Compass size={20} /><span>Live</span>
        </Link>
        <Link href="/thumbsfi" className="flex items-center space-x-2 p-2 hover:bg-card-bg rounded">
          <Briefcase size={20} /><span>ThumbsFi</span>
        </Link>
      </nav>

      {!isAuthenticated && (
        <div className="mt-6 p-4 bg-card-bg rounded-lg">
          <h3 className="font-bold">New To ThumbsUp?</h3>
          <p className="text-sm text-text-secondary mt-1">Sign up to like, comment, follow and more.</p>
          <Link href="/signup" className="mt-3 block w-full bg-primary text-white text-center py-2 rounded">Sign Up</Link>
        </div>
      )}

      <div className="mt-6">
        <h4 className="text-sm font-semibold text-text-secondary mb-2">Shortcuts</h4>
        <nav className="space-y-1">
          <Link href="/friends" className="flex items-center space-x-2 p-2 hover:bg-card-bg rounded text-sm">
            <Users size={16} /><span>Friends</span>
          </Link>
          <Link href="/groups" className="flex items-center space-x-2 p-2 hover:bg-card-bg rounded text-sm">
            <Users size={16} /><span>Groups</span>
          </Link>
          <Link href="/marketplace" className="flex items-center space-x-2 p-2 hover:bg-card-bg rounded text-sm">
            <Briefcase size={16} /><span>Marketplace</span>
          </Link>
          <Link href="/memories" className="flex items-center space-x-2 p-2 hover:bg-card-bg rounded text-sm">
            <Calendar size={16} /><span>Memories</span>
          </Link>
          <Link href="/saved" className="flex items-center space-x-2 p-2 hover:bg-card-bg rounded text-sm">
            <Bookmark size={16} /><span>Saved</span>
          </Link>
        </nav>
      </div>

      <div className="mt-6 text-xs text-text-secondary">
        <Link href="/about" className="mr-2">About</Link>
        <Link href="/privacy" className="mr-2">Privacy</Link>
        <Link href="/terms" className="mr-2">Terms</Link>
        <span>© 2025 ThumbsUp</span>
      </div>
    </aside>
  );
}