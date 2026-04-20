import Image from "next/image";
import { Crown, Star, Users, Sparkles } from "lucide-react";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section
      className="bg-white px-4 py-24 text-black sm:px-6 lg:px-8"
      id="about"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* IMAGE SIDE */}
        <div className="relative h-112.5 w-full overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="/images/nfl_cheerleading_banner.svg"
            alt="NFL Cheerleaders"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold">
            <Crown className="h-4 w-4 text-black" />
            Elite Cheer Experience
          </div>
        </div>

        {/* TEXT SIDE */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-2 text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            About NFL Cheer Memberships
          </div>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Where Passion Meets Performance
          </h2>

          <p className="mt-4 text-gray-600">
            NFL Cheerleading is more than entertainment — it’s a global symbol
            of energy, discipline, and fan connection. Our platform brings fans
            closer to their favorite cheer squads through exclusive memberships,
            VIP access, and behind-the-scenes experiences.
          </p>

          <p className="mt-4 text-gray-600">
            From game-day sideline moments to private events and digital
            content, we create unforgettable experiences that celebrate the
            spirit of football culture.
          </p>

          {/* FEATURES */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border p-4">
              <Users className="h-5 w-5" />
              <h4 className="mt-2 font-semibold">Fan Community</h4>
              <p className="text-sm text-gray-600">
                Connect with thousands of passionate NFL cheer fans worldwide.
              </p>
            </div>

            <div className="rounded-2xl border p-4">
              <Star className="h-5 w-5" />
              <h4 className="mt-2 font-semibold">VIP Access</h4>
              <p className="text-sm text-gray-600">
                Unlock exclusive events, merch, and premium cheer experiences.
              </p>
            </div>
          </div>
          <Link href="#teams">
            <button className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-black px-6 py-3 text-white transition hover:scale-105">
              Explore Memberships
              <Crown className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
