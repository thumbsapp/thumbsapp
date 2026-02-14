import Header from './Header';
import LeftSidebar from './LeftSidebar';
import CenterColumn from './CenterColumn';
import RightColumn from './RightColumn';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThreeColumnLayout() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Header />
      <div className="flex pt-16"> {/* pt-16 for fixed header */}
        <LeftSidebar />
        <CenterColumn />
        <RightColumn />
      </div>
    </div>
  );
}