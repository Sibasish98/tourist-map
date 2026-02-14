export function TimelineCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        fixed bottom-8 left-1/2 -translate-x-1/2
        w-[92%] max-w-md

        backdrop-blur-xl 
        bg-gray-900/85
        text-white

        rounded-2xl
        border border-white/10
        shadow-[0_25px_60px_rgba(0,0,0,0.45)]

        px-6 py-5
        space-y-4
        z-50
      "
    >
      {/* Accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] 
                      bg-gradient-to-r 
                      from-orange-500 
                      via-yellow-400 
                      to-green-400 
                      rounded-t-2xl" />

      {children}
    </div>
  );
}
