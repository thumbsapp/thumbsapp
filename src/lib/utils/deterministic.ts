// Utility for deterministic game logic
export const seededRandom = (seed: number) => {
  // Simple deterministic PRNG
  return () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
};