import Link from "next/link";
import { Crown, ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-black py-24 text-white">
      <div className="absolute inset-0 bg-linear-to-r from-white/10 via-transparent to-white/10 opacity-30" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
          <Crown className="h-4 w-4" />
          Limited VIP Membership Access
        </div>

        <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          Join the Exclusive NFL Cheer Experience
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-300">
          Become part of an elite fan community with VIP access to cheerleaders,
          behind-the-scenes content, premium events, and unforgettable game-day
          moments.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#teams"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:scale-105"
          >
            Choose Your Team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <p className="mt-6 text-xs text-gray-400">
          No credit card required to explore membership options
        </p>
      </div>
    </section>
  );
}
