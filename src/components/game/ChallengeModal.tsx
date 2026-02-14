import { useState } from 'react';
import Modal from '../common/Modal';
import { useGameStore } from '@/lib/stores/gameStore';
import { useWalletStore } from '@/lib/stores/walletStore';

interface ChallengeModalProps {
  gameId: string;
  onClose: () => void;
}

export default function ChallengeModal({ gameId, onClose }: ChallengeModalProps) {
  const { createChallenge } = useGameStore();
  const { balance } = useWalletStore();
  const [stake, setStake] = useState(5);
  const [giftId, setGiftId] = useState<string | null>(null);

  const handleSubmit = async () => {
    await createChallenge(gameId, stake, giftId);
    onClose();
  };

  return (
    <Modal title="Create Challenge" onClose={onClose}>
      <div className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Stake Amount ($)</label>
          <input
            type="number"
            value={stake}
            onChange={e => setStake(Number(e.target.value))}
            className="w-full bg-background border border-border-color rounded p-2"
          />
          <p className="text-xs text-text-secondary mt-1">Balance: ${balance}</p>
        </div>
        <div>
          <label className="block text-sm mb-1">Optional Gift</label>
          <select className="w-full bg-background border border-border-color rounded p-2" onChange={e => setGiftId(e.target.value || null)}>
            <option value="">No gift</option>
            <option value="gift1">Wireless Earbuds (+$30)</option>
            <option value="gift2">Gaming Mouse (+$50)</option>
          </select>
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-primary text-white py-2 rounded"
        >
          Post Challenge
        </button>
      </div>
    </Modal>
  );
}