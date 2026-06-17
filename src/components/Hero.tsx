import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pb-24 pt-36 text-center"
    >
      <div className="pointer-events-none absolute inset-x-8 top-32 h-72 rounded-full bg-[#1d5c48]/20 blur-[120px]" />
      <div className="relative max-w-4xl">
        <p className="mb-7 text-xs font-semibold uppercase tracking-[0.44em] text-[#9fb2a5]">
          OPERATIONS DESIGN STUDIO
        </p>
        <h1 className="text-balance text-6xl font-semibold tracking-[-0.08em] text-[#f5f2ea] sm:text-7xl lg:text-8xl">
          SINTAKZ SYSTEM
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#d7d1c2]/68 sm:text-xl">
          Premium, automated web architecture engineered for modern service brands. Zero template
          bloat. Zero ongoing platform fees.
        </p>

        <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#architecture"
            className="group inline-flex w-full items-center justify-center rounded-full bg-[#f5f2ea] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#111312] transition hover:-translate-y-0.5 hover:bg-white sm:w-auto"
          >
            View Core Architecture
          </a>
          <a
            href="https://www.threads.net/"
            className="group inline-flex items-center justify-center gap-2 rounded-full px-5 py-4 text-sm font-medium text-[#d7d1c2]/76 transition hover:text-[#f5f2ea]"
            target="_blank"
            rel="noreferrer"
          >
            Build in Public on Threads
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
