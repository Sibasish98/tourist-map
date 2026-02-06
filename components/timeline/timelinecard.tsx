export function TimelineCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        fixed bottom-6 left-1/2 -translate-x-1/2
        bg-white/70 backdrop-blur-md
        rounded-2xl shadow-lg
        border border-white/30
        p-4 w-[340px]
        space-y-4
      "
    >
      {children}
    </div>
  );
}
