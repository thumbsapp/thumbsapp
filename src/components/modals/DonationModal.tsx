import Modal from '../common/Modal';
import { useState } from 'react';

interface DonationModalProps {
  recipientHandle: string;
  onClose: () => void;
}

export default function DonationModal({ recipientHandle, onClose }: DonationModalProps) {
  const [amount, setAmount] = useState(5);

  return (
    <Modal title={`Donate to @${recipientHandle}`} onClose={onClose}>
      <div className="space-y-4">
        <input
          type="number"
          value={amount}
          onChange={e => setAmount(Number(e.target.value))}
          className="w-full bg-background border border-border-color rounded p-2"
          placeholder="Amount in $"
        />
        <button className="w-full bg-primary text-white py-2 rounded">Send Donation</button>
      </div>
    </Modal>
  );
}