"use client";

export function Confetti() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
      {Array.from({ length: 40 }).map((_, i) => (
        <span
          key={i}
          className="confetti-piece absolute block"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            backgroundColor: ["#E8725A", "#2D2D2D", "#F5F1EB", "#d4654f", "#fbbf24", "#34d399"][i % 6],
          }}
        />
      ))}
      <style jsx>{`
        .confetti-piece {
          width: 10px;
          height: 10px;
          top: -10px;
          border-radius: 2px;
          animation: confetti-fall 3s ease-out forwards;
        }
        @keyframes confetti-fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
