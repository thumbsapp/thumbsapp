import GiftShop from '@/components/marketplace/GiftShop';
import { useAuthStore } from '@/lib/stores/authStore';

export default function MarketplacePage() {
  const user = useAuthStore(state => state.user);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <GiftShop user={user} />
    </div>
  );
}
