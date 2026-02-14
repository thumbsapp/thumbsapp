import { useState } from 'react';
import Link from 'next/link';
import Avatar from '@/components/avatar/Avatar';
import { useAuthStore } from '@/lib/stores/authStore';
import { useTheme } from 'next-themes';
import { Bell, MessageCircle, UserPlus, Moon, Sun } from 'lucide-react';

export default function Header() {
  const { user, isAuthenticated } = useAuthStore();
  const { theme, setTheme } = useTheme();
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-card-bg border-b border-border-color z-50">
      <div className="flex items-center justify-between px-4 h-16">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary">
          ThumbsUp
        </Link>

        {/* Primary Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-primary">Home</Link>
          <Link href="/live" className="hover:text-primary">Live</Link>
          <Link href="/thumbtok" className="hover:text-primary">THUMBTOK</Link>
          <Link href="/create" className="hover:text-primary">Create</Link>
          <Link href="/thumbsfi" className="hover:text-primary">ThumbsFi</Link>
        </nav>

        {/* Announcements Bar (collapsible) */}
        <div className="hidden lg:block text-sm text-text-secondary">
          <span className="mr-4">🔴 Live Stream Clipping is now available!</span>
          <span>⚡ GETTR Fi is now available!</span>
        </div>

        {/* Right side actions */}
        <div className="flex items-center space-x-3">
          {!isAuthenticated ? (
            <>
              <Link href="/login" className="px-3 py-1 text-sm border border-border-color rounded hover:bg-card-bg">Log In</Link>
              <Link href="/signup" className="px-3 py-1 text-sm bg-primary text-white rounded">Sign Up</Link>
            </>
          ) : (
            <>
              <button className="relative" onClick={() => setShowNotifications(!showNotifications)}>
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
              </button>
              <button className="relative">
                <MessageCircle size={20} />
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">5</span>
              </button>
              <button className="text-text-secondary hover:text-text-primary">
                <UserPlus size={20} />
              </button>
              <Link href={`/profile/${user?.handle}`}>
                <Avatar user={user} size="sm" />
              </Link>
              <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}