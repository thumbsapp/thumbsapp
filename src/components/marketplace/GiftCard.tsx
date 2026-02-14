interface GiftCardProps {
  gift: { id: string; name: string; price: number; image: string };
}

export default function GiftCard({ gift }: GiftCardProps) {
  return (
    <div className="bg-card-bg rounded-lg p-4">
      <div className="h-32 bg-gray-700 rounded mb-2"></div>
      <h3 className="font-semibold">{gift.name}</h3>
      <p className="text-accent-green font-bold mt-1">${gift.price}</p>
      <button className="mt-3 w-full bg-primary text-white py-2 rounded">Select Gift</button>
    </div>
  );
}