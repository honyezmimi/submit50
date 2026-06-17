import {
  ArrowUpRight,
  BadgeCheck,
  Blocks,
  CalendarCheck,
  CheckCircle2,
  DatabaseZap,
  MessageSquareText,
  Workflow,
} from "lucide-react";

const metrics = [
  { value: "RM0", label: "annual domain fees on Sintakz subdomain" },
  { value: "3", label: "operational tiers from static to autonomous" },
  { value: "24/7", label: "lead capture through the receptionist layer" },
];

const modules = [
  {
    icon: Blocks,
    title: "Quiet Luxury Interface",
    copy: "A responsive brand home with restrained motion, clean service menus, proof blocks, and frictionless mobile reading.",
  },
  {
    icon: CalendarCheck,
    title: "Booking Conversion Layer",
    copy: "Calendar-first flows help clients move from interest to slot selection without waiting for manual replies.",
  },
  {
    icon: DatabaseZap,
    title: "Backend Ledger Setup",
    copy: "Airtable keeps each booking cleanly tracked with status, customer context, deposit state, and admin notes.",
  },
  {
    icon: MessageSquareText,
    title: "Receptionist Bubble",
    copy: "Static FAQs, booking shortcuts, or a Gemini-powered AI Twin depending on the tier and operational need.",
  },
];

const process = [
  "Offer map and brand positioning",
  "Mobile-first interface build",
  "Booking, checkout, and database wiring",
  "Launch QA on live subdomain",
];

const audiences = [
  "Studios and creator-led service brands",
  "Appointment businesses that sell limited slots",
  "Agencies replacing template funnels",
  "Owners tired of repetitive customer DMs",
];

const questions = [
  {
    question: "Is this a subscription?",
    answer: "The build fee is one-time. Optional paid tools such as checkout or AI usage stay transparent and separate.",
  },
  {
    question: "Can the website use my own domain later?",
    answer: "Yes. The included Sintakz subdomain keeps launch costs low, and a custom domain can be connected when needed.",
  },
  {
    question: "What makes Tier 3 different?",
    answer: "Tier 3 turns the bubble into an AI receptionist that handles natural customer questions before guiding bookings.",
  },
];

export function CompleteWebsiteSections() {
  return (
    <>
      <section id="outcomes" className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="grid gap-4 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="premium-panel rounded-[2rem] p-6">
              <p className="text-4xl font-semibold tracking-[-0.07em] text-[#f5f2ea]">{metric.value}</p>
              <p className="mt-3 text-sm leading-6 text-[#d7d1c2]/62">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="systems" className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="mb-12 max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-[#9fb2a5]">
            Complete Website System
          </p>
          <h2 className="text-balance text-4xl font-semibold tracking-[-0.06em] text-[#f5f2ea] sm:text-5xl">
            More than a page. A calm operating layer for selling, booking, and follow-up.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {modules.map((module) => {
            const Icon = module.icon;

            return (
              <article
                key={module.title}
                className="premium-panel group rounded-[2rem] p-6 transition hover:-translate-y-1 hover:border-[#8fb99f]/45 sm:p-8"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#b5d4c2]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.05em] text-[#f5f2ea]">{module.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#d7d1c2]/68">{module.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="premium-panel rounded-[2.25rem] p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#9fb2a5]">
                <Workflow className="h-3.5 w-3.5" aria-hidden="true" />
                Build Method
              </div>
              <h2 className="text-balance text-4xl font-semibold tracking-[-0.06em] text-[#f5f2ea]">
                A complete launch path, from offer clarity to live operations.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {process.map((step, index) => (
                <div key={step} className="rounded-3xl border border-white/10 bg-white/[0.035] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9fb2a5]">
                    Step {index + 1}
                  </p>
                  <p className="mt-4 text-lg font-semibold tracking-[-0.03em] text-[#f5f2ea]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="premium-panel rounded-[2rem] p-8">
            <BadgeCheck className="mb-8 h-8 w-8 text-[#b5d4c2]" aria-hidden="true" />
            <h2 className="text-3xl font-semibold tracking-[-0.06em] text-[#f5f2ea]">
              Built for owners who need fewer tabs, fewer tools, and fewer repeated replies.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {audiences.map((audience) => (
              <div
                key={audience}
                className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.035] p-5"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#b5d4c2]" aria-hidden="true" />
                <p className="text-sm leading-6 text-[#d7d1c2]/72">{audience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-[#9fb2a5]">
              Clean Answers
            </p>
            <h2 className="text-balance text-4xl font-semibold tracking-[-0.06em] text-[#f5f2ea]">
              Built like a serious site, explained like a simple system.
            </h2>
          </div>
          <div className="space-y-3">
            {questions.map((item) => (
              <article key={item.question} className="premium-panel rounded-3xl p-6">
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-[#f5f2ea]">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-[#d7d1c2]/68">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-[#8fb99f]/25 bg-[#f5f2ea] p-8 text-[#101210] sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,22rem)] lg:items-end">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-[#315b49]">
                Deploy Your System
              </p>
              <h2 className="max-w-3xl text-balance text-4xl font-semibold tracking-[-0.07em] sm:text-6xl">
                Turn the page into the receptionist your brand keeps needing.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="mailto:studio@sintakz.my"
                className="inline-flex w-full items-center justify-center gap-2 whitespace-normal rounded-full bg-[#111312] px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.14em] text-[#f5f2ea] transition hover:-translate-y-0.5 hover:bg-[#1d5c48] sm:text-sm"
              >
                Start Build Request
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#architecture"
                className="inline-flex w-full items-center justify-center gap-2 whitespace-normal rounded-full border border-[#111312]/15 px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.14em] text-[#111312] transition hover:border-[#1d5c48]/45 hover:text-[#1d5c48] sm:text-sm"
              >
                Compare Tiers
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col gap-6 px-6 pb-44 pt-8 text-sm text-[#d7d1c2]/54 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-semibold tracking-[0.22em] text-[#f5f2ea]">SINTAKZ SYSTEM</p>
        <p className="mt-2">Premium web architecture for modern service brands.</p>
      </div>
      <div className="flex flex-wrap gap-4">
        <a className="transition hover:text-[#f5f2ea]" href="#systems">
          Systems
        </a>
        <a className="transition hover:text-[#f5f2ea]" href="#process">
          Process
        </a>
        <a className="transition hover:text-[#f5f2ea]" href="#faq">
          FAQ
        </a>
        <a className="transition hover:text-[#f5f2ea]" href="#contact">
          Contact
        </a>
      </div>
    </footer>
  );
}
