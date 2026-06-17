import { Check, Sparkles } from "lucide-react";
import { tiers, type Tier } from "../data/tiers";

function PricingCard({ tier }: { tier: Tier }) {
  const Icon = tier.icon;
  const isFeatured = Boolean(tier.badge);

  return (
    <article
      className={`premium-panel group relative flex h-full flex-col rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#8fb99f]/45 sm:p-7 ${
        isFeatured ? "border-[#8fb99f]/65 bg-[#102018]/78" : ""
      }`}
    >
      {tier.badge ? (
        <div className="absolute right-5 top-5 rounded-full border border-[#8fb99f]/35 bg-[#8fb99f]/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#b5d4c2]">
          {tier.badge}
        </div>
      ) : null}

      <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#b5d4c2]">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>

      <h3 className="text-xl font-semibold tracking-[-0.04em] text-[#f5f2ea] sm:pr-20">{tier.title}</h3>
      <div className="mt-7">
        <p className="text-5xl font-semibold tracking-[-0.08em] text-[#f5f2ea]">{tier.price}</p>
        <p className="mt-2 text-sm text-[#d7d1c2]/58">{tier.subtext}</p>
      </div>

      <ul className="mt-8 space-y-5 text-left">
        {tier.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-sm leading-6 text-[#d7d1c2]/72">
            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#8fb99f]/30 bg-[#8fb99f]/10 text-[#b5d4c2]">
              <Check className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function PricingSection() {
  return (
    <section id="architecture" className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <div className="mb-12 flex flex-col justify-between gap-6 sm:mb-16 lg:flex-row lg:items-end">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#9fb2a5]">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Architecture Menu
          </div>
          <h2 className="text-balance text-4xl font-semibold tracking-[-0.06em] text-[#f5f2ea] sm:text-5xl">
            💎 Sintakz System Core Architecture
          </h2>
        </div>
        <p className="max-w-md text-base leading-7 text-[#d7d1c2]/62">
          Three precise deployment layers for creators who need their web presence to work like an
          operations desk.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {tiers.map((tier) => (
          <PricingCard key={tier.id} tier={tier} />
        ))}
      </div>
    </section>
  );
}
