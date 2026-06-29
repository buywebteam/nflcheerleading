"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MeetAndGreet() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
        <span className="inline-flex rounded-full border border-white/20 px-5 py-2 text-sm">
          VIP Experience
        </span>

        <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Meet Your Favorite Cheerleaders
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
          Book exclusive meet and greet experiences with NFL Cheerleaders. Get
          photos, autographs, exclusive merchandise, and unforgettable memories.
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            href="/meet-and-greet"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-gray-200"
          >
            Book a Meet & Greet
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
