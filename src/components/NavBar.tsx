import { ArrowUpRight } from "lucide-react";

export function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#0d0f0e]/70 px-4 py-3 shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:px-6">
        <a
          href="#top"
          className="text-sm font-bold tracking-[0.22em] text-[#f5f2ea] transition hover:text-[#b5d4c2]"
        >
          SINTAKZ SYSTEM
        </a>

        <div className="flex items-center gap-2 sm:gap-6">
          <a
            href="#architecture"
            className="hidden text-sm text-[#d7d1c2]/70 transition hover:text-[#f5f2ea] sm:inline-flex"
          >
            Architecture
          </a>
          <a
            href="#architecture"
            className="hidden text-sm text-[#d7d1c2]/70 transition hover:text-[#f5f2ea] sm:inline-flex"
          >
            Pricing
          </a>
          <a
            href="#architecture"
            className="inline-flex items-center gap-2 rounded-full border border-[#d7d1c2]/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#f5f2ea] transition hover:border-[#8fb99f]/60 hover:bg-[#8fb99f]/10 sm:text-sm"
          >
            Deploy Your System
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  );
}
