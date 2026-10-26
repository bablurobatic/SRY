import React, { useMemo } from 'react';

export const FloatingHearts: React.FC = () => {
  const hearts = useMemo(() => {
    return Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      left: `${(i * 7.5 + Math.random() * 5) % 100}%`,
      delay: `${(i * 0.9).toFixed(1)}s`,
      duration: `${(9 + (i % 6)).toFixed(1)}s`,
      size: `${14 + (i % 5) * 4}px`,
      symbol: i % 4 === 0 ? '🌸' : i % 3 === 0 ? '✨' : '❤️',
      opacity: (0.35 + (i % 3) * 0.15).toFixed(2)
    }));
  }, []);

  return (
    <div className="floating-hearts-bg" aria-hidden="true">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="floating-heart"
          style={{
            left: h.left,
            animationDelay: h.delay,
            animationDuration: h.duration,
            fontSize: h.size,
            opacity: h.opacity
          }}
        >
          {h.symbol}
        </span>
      ))}
    </div>
  );
};
