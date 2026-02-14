import { useWalletStore } from '@/lib/stores/walletStore';
import { Coins } from 'lucide-react';

export default function WalletBalance() {
  const { balance, thumbsCoins } = useWalletStore();

  return (
    <div className="flex items-center space-x-2 text-sm">
      <Coins size={16} className="text-accent-gold" />
      <span>${balance.toFixed(2)}</span>
      <span className="text-text-secondary">|</span>
      <span className="text-accent-gold">{thumbsCoins} TC</span>
    </div>
  );
}