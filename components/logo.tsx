export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div
      className={`${className} rounded-xl bg-gradient-to-br from-accent-500 to-ink-800 text-white flex items-center justify-center font-bold tracking-tight shadow-lg shadow-accent-500/30`}
      aria-label="RK monogram"
    >
      RK
    </div>
  );
}
