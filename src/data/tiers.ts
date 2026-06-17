import type { LucideIcon } from "lucide-react";
import { Box, Bot, CalendarDays } from "lucide-react";

export type DemoTier = "tier1" | "tier2" | "tier3";

export type Tier = {
  id: DemoTier;
  icon: LucideIcon;
  title: string;
  price: string;
  subtext: string;
  badge?: string;
  features: string[];
};

export const tiers: Tier[] = [
  {
    id: "tier1",
    icon: Box,
    title: "📦 Tier 1: Core Engine",
    price: "RM800",
    subtext: "One-time build fee",
    features: [
      "Premium Interactive Layout: Custom, ultra-fast mobile-first web interface built for a 'Quiet Luxury' aesthetic.",
      "Brand Showcase: Clean service menu, options list, integrated 'About Us', and interactive location layout.",
      "Zero-Cost Infrastructure: Free deployment on a permanent, secure brandname.sintakz.my subdomain. RM0 annual domain fees forever.",
      "💬 Static FAQ Bubble: A clean chat circle at the bottom right. When clicked, it expands into a sleek, pre-written accordion menu where users can tap and read instant answers to basic questions (e.g., 'Where are you located?', 'What are your slot times?'). No AI, just clean, instant info.",
    ],
  },
  {
    id: "tier2",
    icon: CalendarDays,
    title: "📅 Tier 2: Operational Automator",
    price: "RM1,200",
    subtext: "One-time build fee",
    badge: "Most Popular",
    features: [
      "Includes everything in Tier 1.",
      "Live Booking Core: Interactive calendar engine enabling customers to select open dates and time slots directly.",
      "Airtable Database Setup: Automated, real-time backend ledger database to track bookings cleanly without external apps.",
      "HitPay Checkout Integration: Fully secure local Malaysian checkout pipeline to collect deposit payments instantly via FPX and e-Wallets.",
      "💬 Smart FAQ Booking Bubble: The same clean chat circle, but upgraded. Inside the bubble, customers can instantly click shortcuts like 'Check Available Slots' or 'Book Appointment Now', which smoothly opens the booking calendar directly inside their view.",
    ],
  },
  {
    id: "tier3",
    icon: Bot,
    title: "🤖 Tier 3: Autonomous Studio",
    price: "RM1,600",
    subtext: "One-time build fee",
    features: [
      "Includes everything in Tiers 1 & 2.",
      "WhatsApp Admin Notification Bot: Fires an instant, structured booking receipt summary directly to the admin's personal WhatsApp the millisecond a transaction clears.",
      "💬 Premium AI Twin Chatbot (The Real Experience): The ultimate upgrade for the chat bubble. It is no longer just a list of static buttons. It is a fully responsive AI Persona Twin powered by the Gemini API. It converses naturally like a real human studio assistant - handling fluid questions, negotiating complex details, understanding slang, and seamlessly guiding the user to book a slot.",
    ],
  },
];

export const faqItems = [
  {
    question: "Where are you located?",
    answer:
      "Sintakz systems deploy online-first, with client operations configured remotely for Malaysian service brands.",
  },
  {
    question: "What are your slot times?",
    answer:
      "Discovery and build slots are arranged by priority window, with premium onboarding blocks kept intentionally limited.",
  },
  {
    question: "Do I pay platform fees?",
    answer:
      "No recurring platform fees are attached to the core website layer. You only maintain optional third-party services you choose to connect.",
  },
];
