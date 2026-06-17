import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  Bot,
  CalendarDays,
  ChevronDown,
  Clock3,
  MessageCircle,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { faqItems, type DemoTier } from "../data/tiers";

type ChatMessage = {
  role: "assistant" | "user";
  text: string;
};

const tierLabels: Record<DemoTier, string> = {
  tier1: "Tier 1",
  tier2: "Tier 2",
  tier3: "Tier 3",
};

const starterMessages: ChatMessage[] = [
  {
    role: "assistant",
    text: "Welcome in. I can qualify the brief, explain the build, and guide your client into a booking flow.",
  },
];

const aiResponses = [
  "For a premium service brand, I would start by removing friction: clear offer menu, calm proof, then a booking path that feels private and controlled.",
  "Yes. The AI Twin translates slangy DMs into clear intent, answers naturally, and guides the client toward the right slot.",
  "A deposit workflow can be kept elegant: date, time, confirmation, HitPay checkout, then an instant admin receipt.",
];

function TierOnePanel() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {faqItems.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <button
            key={item.question}
            type="button"
            className="w-full rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-left transition hover:border-[#8fb99f]/40"
            onClick={() => setOpenIndex(isOpen ? -1 : index)}
          >
            <span className="flex items-center justify-between gap-4 text-sm font-semibold text-[#f5f2ea]">
              {item.question}
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-[#9fb2a5] transition ${isOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </span>
            {isOpen ? (
              <span className="mt-3 block text-sm leading-6 text-[#d7d1c2]/68">{item.answer}</span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}

function CalendarMockup({ onClose }: { onClose: () => void }) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const slots = ["10:00 AM", "12:30 PM", "3:00 PM"];

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/55 px-4 pb-4 backdrop-blur-sm sm:items-center sm:pb-0">
      <div className="premium-panel w-full max-w-md rounded-[2rem] p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9fb2a5]">
              Live Booking Core
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-[#f5f2ea]">
              June availability
            </h3>
          </div>
          <button
            type="button"
            className="rounded-full border border-white/10 p-2 text-[#d7d1c2]/70 transition hover:text-[#f5f2ea]"
            onClick={onClose}
            aria-label="Close calendar"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2">
          {days.map((day, index) => (
            <button
              key={day}
              type="button"
              className={`rounded-2xl border p-3 text-center transition ${
                index === 2
                  ? "border-[#8fb99f]/60 bg-[#8fb99f]/12 text-[#f5f2ea]"
                  : "border-white/10 bg-white/[0.035] text-[#d7d1c2]/70 hover:border-[#8fb99f]/35"
              }`}
            >
              <span className="block text-xs uppercase tracking-[0.18em]">{day}</span>
              <span className="mt-1 block text-xl font-semibold">{18 + index}</span>
            </button>
          ))}
        </div>

        <div className="mt-6 space-y-2">
          {slots.map((slot, index) => (
            <button
              key={slot}
              type="button"
              className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-sm transition ${
                index === 1
                  ? "border-[#8fb99f]/60 bg-[#8fb99f]/12 text-[#f5f2ea]"
                  : "border-white/10 bg-white/[0.035] text-[#d7d1c2]/70 hover:border-[#8fb99f]/35"
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4" aria-hidden="true" />
                {slot}
              </span>
              <span>{index === 1 ? "Best fit" : "Open"}</span>
            </button>
          ))}
        </div>

        <button
          type="button"
          className="mt-6 w-full rounded-full bg-[#f5f2ea] px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#111312] transition hover:bg-white"
        >
          Reserve mock slot
        </button>
      </div>
    </div>
  );
}

function TierTwoPanel({ onOpenCalendar }: { onOpenCalendar: () => void }) {
  const actions = ["Check Available Slots", "Book Appointment Now", "View Deposit Flow"];

  return (
    <div className="space-y-3">
      <p className="text-sm leading-6 text-[#d7d1c2]/68">
        Smart shortcuts turn common questions into booking actions without leaving the current view.
      </p>
      {actions.map((action) => (
        <button
          key={action}
          type="button"
          className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-[#f5f2ea] transition hover:border-[#8fb99f]/45 hover:bg-[#8fb99f]/10"
          onClick={onOpenCalendar}
        >
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-[#9fb2a5]" aria-hidden="true" />
            {action}
          </span>
          <span aria-hidden="true">→</span>
        </button>
      ))}
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex items-center gap-3 rounded-2xl rounded-bl-sm bg-white/[0.055] px-4 py-3 text-xs font-medium uppercase tracking-[0.16em] text-[#d7d1c2]/62">
      Studio manager is typing
      <span className="flex items-center gap-1" aria-hidden="true">
        {[0, 1, 2].map((dot) => (
          <span
            key={dot}
            className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#b5d4c2]"
            style={{ animationDelay: `${dot * 150}ms` }}
          />
        ))}
      </span>
    </div>
  );
}

function TierThreePanel() {
  const [messages, setMessages] = useState(starterMessages);
  const [draft, setDraft] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const nextResponse = useMemo(() => aiResponses[messages.length % aiResponses.length], [messages.length]);

  function handleSend(event?: FormEvent<HTMLFormElement>, quickPrompt?: string) {
    event?.preventDefault();
    const text = quickPrompt ?? draft.trim();

    if (!text || isTyping) {
      return;
    }

    setMessages((current) => [...current, { role: "user", text }]);
    setDraft("");
    setIsTyping(true);
    window.setTimeout(() => {
      setMessages((current) => [...current, { role: "assistant", text: nextResponse }]);
      setIsTyping(false);
    }, 2400);
  }

  return (
    <div>
      <div className="max-h-64 space-y-3 overflow-y-auto pr-1">
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}-${message.text}`}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[86%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                message.role === "user"
                  ? "rounded-br-sm bg-[#8fb99f] text-[#0d0f0e]"
                  : "rounded-bl-sm bg-white/[0.055] text-[#d7d1c2]/78"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        {isTyping ? (
          <div className="flex justify-start">
            <TypingIndicator />
          </div>
        ) : null}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {["Can you handle slang?", "Show booking flow"].map((prompt) => (
          <button
            key={prompt}
            type="button"
            className="rounded-full border border-white/10 px-3 py-2 text-xs text-[#d7d1c2]/70 transition hover:border-[#8fb99f]/35 hover:text-[#f5f2ea]"
            onClick={() => handleSend(undefined, prompt)}
          >
            {prompt}
          </button>
        ))}
      </div>

      <form className="mt-4 flex gap-2" onSubmit={(event) => handleSend(event)}>
        <input
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Ask the AI Twin..."
          className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-[#f5f2ea] outline-none transition placeholder:text-[#d7d1c2]/35 focus:border-[#8fb99f]/50"
        />
        <button
          type="submit"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f5f2ea] text-[#111312] transition hover:bg-white disabled:opacity-50"
          disabled={isTyping}
          aria-label="Send message"
        >
          <Send className="h-4 w-4" aria-hidden="true" />
        </button>
      </form>
    </div>
  );
}

export function ChatDemo() {
  const [selectedTier, setSelectedTier] = useState<DemoTier>("tier1");
  const [isOpen, setIsOpen] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    setIsOpen(false);
    setShowCalendar(false);
  }, [selectedTier]);

  return (
    <>
      <div className="fixed bottom-5 right-4 z-40 flex w-[calc(100vw-2rem)] max-w-sm flex-col items-end gap-3 sm:right-6">
        <div className="premium-panel w-full rounded-3xl p-3 sm:w-auto">
          <label className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#d7d1c2]/68">
            Select Tier Demo:
            <select
              value={selectedTier}
              onChange={(event) => setSelectedTier(event.target.value as DemoTier)}
              className="rounded-full border border-white/10 bg-[#111513] px-3 py-2 text-xs text-[#f5f2ea] outline-none transition focus:border-[#8fb99f]/50"
            >
              <option value="tier1">Tier 1</option>
              <option value="tier2">Tier 2</option>
              <option value="tier3">Tier 3</option>
            </select>
          </label>
        </div>

        {isOpen ? (
          <aside className="premium-panel w-full overflow-hidden rounded-[1.75rem] p-5">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9fb2a5]">
                  {tierLabels[selectedTier]} Demo
                </p>
                <h3 className="mt-2 flex items-center gap-2 text-xl font-semibold tracking-[-0.04em] text-[#f5f2ea]">
                  {selectedTier === "tier3" ? (
                    <Bot className="h-5 w-5 text-[#b5d4c2]" aria-hidden="true" />
                  ) : (
                    <Sparkles className="h-5 w-5 text-[#b5d4c2]" aria-hidden="true" />
                  )}
                  Studio Receptionist
                </h3>
              </div>
              <button
                type="button"
                className="rounded-full border border-white/10 p-2 text-[#d7d1c2]/70 transition hover:text-[#f5f2ea]"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat demo"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            {selectedTier === "tier1" ? <TierOnePanel /> : null}
            {selectedTier === "tier2" ? (
              <TierTwoPanel onOpenCalendar={() => setShowCalendar(true)} />
            ) : null}
            {selectedTier === "tier3" ? <TierThreePanel /> : null}
          </aside>
        ) : null}

        <button
          type="button"
          className="group flex h-16 w-16 items-center justify-center rounded-full border border-[#8fb99f]/45 bg-[#f5f2ea] text-[#0d0f0e] shadow-[0_20px_80px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:bg-white"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Open live demo chat bubble"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <MessageCircle className="h-6 w-6 transition group-hover:scale-105" aria-hidden="true" />
          )}
        </button>
      </div>

      {showCalendar ? <CalendarMockup onClose={() => setShowCalendar(false)} /> : null}
    </>
  );
}
