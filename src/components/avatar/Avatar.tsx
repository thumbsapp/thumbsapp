import Image from 'next/image';
import { User } from '@/lib/types';
import clsx from 'clsx';

interface AvatarProps {
  user: User | null | undefined;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export default function Avatar({ user, size = 'md', className }: AvatarProps) {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  return (
    <div className={clsx('rounded-full overflow-hidden bg-gray-700 flex-shrink-0', sizeMap[size], className)}>
      {user?.avatar ? (
        <Image src={user.avatar} alt={user.handle} width={100} height={100} className="object-cover" />
      ) : (
        <div className="w-full h-full bg-gray-600 flex items-center justify-center text-white text-lg">
          {user?.handle?.charAt(0).toUpperCase() || '?'}
        </div>
      )}
    </div>
  );
}