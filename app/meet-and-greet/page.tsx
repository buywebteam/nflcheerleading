import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cheerleaders } from "@/data/cheerleaders";

export const metadata = {
  title: "Meet & Greet | NFL Cheerleaders",
  description:
    "Book exclusive Meet & Greet experiences with professional NFL cheerleaders.",
};

export default function MeetAndGreetPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-28 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1a1a2e_0%,#0a0a0a_70%)]" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/60">
            VIP Experiences
          </span>
          <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Meet Your
            <span className="block text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)]">
              Favorite
            </span>
            Cheerleaders
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/50">
            Book exclusive one-on-one experiences with professional NFL
            cheerleaders. Photos, autographs, and memories that last a lifetime.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cheerleaders.map((person) => (
            <Link
              key={person.slug}
              href={`/meet-and-greet/${person.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 transition-all duration-300 hover:ring-white/25"
            >
              {/* Image */}
              <div className="relative h-105 overflow-hidden">
                <Image
                  src={person.image}
                  alt={person.displayName}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                {/* Bottom info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                    {person.team}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-white">
                    {person.displayName}
                  </h3>
                  <p className="text-sm text-white/60">{person.position}</p>
                </div>
              </div>

              {/* Card footer */}
              <div className="flex items-center justify-between px-5 py-4">
                <div className="flex gap-4 text-xs text-white/40">
                  <span>{person.yearsOnTeam} yrs</span>
                  <span>{person.meetAndGreet.duration}</span>
                </div>
                <span className="flex items-center gap-1 text-xs font-semibold text-white/70 transition-colors group-hover:text-white">
                  View Profile
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
