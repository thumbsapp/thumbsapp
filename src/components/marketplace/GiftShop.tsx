import { useState } from 'react';
import GiftCard from './GiftCard';

const mockGifts = [
  { id: 'g1', name: 'Wireless Earbuds', price: 30, image: '' },
  { id: 'g2', name: 'Gaming Mouse', price: 50, image: '' },
  { id: 'g3', name: 'Mechanical Keyboard', price: 80, image: '' },
];

export default function GiftShop() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Verified Gift Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockGifts.map(gift => (
          <GiftCard key={gift.id} gift={gift} />
        ))}
      </div>
    </div>
  );
}