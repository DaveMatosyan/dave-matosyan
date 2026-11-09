import type { Motif } from "@/lib/content";

const common = "pointer-events-none absolute right-0 top-1/2 hidden h-[420px] w-[420px] -translate-y-1/2 opacity-40 lg:block";

function Streams() {
  return (
    <svg viewBox="0 0 420 420" className={common} aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={`M -20 ${90 + i * 60} C 120 ${50 + i * 60}, 240 ${130 + i * 60}, 460 ${80 + i * 60}`}
          fill="none"
          stroke={i === 2 ? "#d6ff3f" : "#26262a"}
          strokeWidth={i === 2 ? 1.5 : 1}
        />
      ))}
      {[60, 180, 300].map((x) => (
        <circle key={x} cx={x} cy={90 + ((x / 60) % 5) * 60} r="3" fill="#d6ff3f" opacity="0.7" />
      ))}
    </svg>
  );
}

function Ledger() {
  return (
    <svg viewBox="0 0 420 420" className={common} aria-hidden>
      {Array.from({ length: 9 }, (_, r) =>
        Array.from({ length: 9 }, (_, c) => (
          <circle
            key={`${r}-${c}`}
            cx={50 + c * 40}
            cy={50 + r * 40}
            r={c === 5 ? 2.5 : 1.5}
            fill={c === 5 ? "#d6ff3f" : "#26262a"}
          />
        )),
      )}
      <line x1="250" y1="30" x2="250" y2="390" stroke="#d6ff3f" strokeWidth="0.5" opacity="0.5" />
    </svg>
  );
}

function Lattice() {
  return (
    <svg viewBox="0 0 420 420" className={common} aria-hidden>
      {Array.from({ length: 10 }, (_, i) => (
        <line key={`a${i}`} x1={i * 60 - 120} y1="0" x2={i * 60 + 120} y2="420" stroke="#26262a" strokeWidth="1" />
      ))}
      {Array.from({ length: 10 }, (_, i) => (
        <line key={`b${i}`} x1={i * 60 + 120} y1="0" x2={i * 60 - 120} y2="420" stroke="#26262a" strokeWidth="1" />
      ))}
      <circle cx="210" cy="210" r="46" fill="none" stroke="#d6ff3f" strokeWidth="1.5" />
      <circle cx="210" cy="210" r="8" fill="#d6ff3f" />
      <rect x="204" y="218" width="12" height="30" fill="#d6ff3f" />
    </svg>
  );
}

function Ticket() {
  return (
    <svg viewBox="0 0 420 420" className={common} aria-hidden>
      <rect x="60" y="120" width="300" height="180" rx="16" fill="none" stroke="#26262a" strokeWidth="1.5" />
      {Array.from({ length: 7 }, (_, i) => (
        <circle key={i} cx="260" cy={135 + i * 25} r="5" fill="#0a0a0b" stroke="#d6ff3f" strokeWidth="1" />
      ))}
      <line x1="260" y1="120" x2="260" y2="300" stroke="#26262a" strokeWidth="1" strokeDasharray="4 6" />
      {[150, 175, 200].map((y) => (
        <line key={y} x1="90" y1={y} x2="220" y2={y} stroke="#26262a" strokeWidth="6" strokeLinecap="round" />
      ))}
      <line x1="285" y1="250" x2="335" y2="250" stroke="#d6ff3f" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

function Slots() {
  return (
    <svg viewBox="0 0 420 420" className={common} aria-hidden>
      {Array.from({ length: 4 }, (_, col) =>
        Array.from({ length: 5 }, (_, row) => {
          const active = (col === 1 && row === 2) || (col === 2 && row === 1);
          return (
            <rect
              key={`${col}-${row}`}
              x={60 + col * 80}
              y={70 + row * 58}
              width="62"
              height="42"
              rx="8"
              fill={active ? "#d6ff3f" : "none"}
              fillOpacity={active ? 0.12 : 0}
              stroke={active ? "#d6ff3f" : "#26262a"}
              strokeWidth={active ? 1.5 : 1}
            />
          );
        }),
      )}
    </svg>
  );
}

export const motifs: Record<Motif, React.ReactNode> = {
  streams: <Streams />,
  ledger: <Ledger />,
  lattice: <Lattice />,
  ticket: <Ticket />,
  slots: <Slots />,
};
