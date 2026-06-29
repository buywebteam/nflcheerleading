import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Clock, Star, CheckCircle2 } from "lucide-react";
import { cheerleaders } from "@/data/cheerleaders";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return cheerleaders.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props) {
  const person = cheerleaders.find((p) => p.slug === params.slug);
  if (!person) return { title: "Not Found" };
  return {
    title: `${person.displayName} | Meet & Greet`,
    description: person.bio,
  };
}

export default async function CheerleaderProfile({ params }: Props) {
  const { slug } = await params;

  const person = cheerleaders.find((p) => p.slug === slug);

  if (!person) notFound();

  const {
    coverImage,
    image,
    displayName,
    firstName,
    team,
    bio,
    hometown,
    position,
    yearsOnTeam,
    specialties,
    meetAndGreet,
  } = person!;

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="relative h-[55vh] min-h-100 w-full">
        <Image
          src={coverImage}
          alt={team}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-black/30" />

        <div className="absolute left-0 right-0 top-8 mx-auto max-w-7xl px-6">
          <Link
            href="/meet-and-greet"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-sm text-white/80 backdrop-blur-sm transition hover:bg-black/60 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            All Cheerleaders
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-7xl px-6 pb-12">
          <p className="text-xs font-medium uppercase tracking-widest text-white/40">
            {team}
          </p>
          <h1 className="mt-2 text-5xl font-black tracking-tight sm:text-6xl">
            {displayName}
          </h1>
          <p className="mt-2 text-lg text-white/60">{position}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          {/* Left — portrait */}
          <div className="space-y-6">
            <div className="relative aspect-3/4 overflow-hidden rounded-2xl">
              <Image
                src={image}
                alt={displayName}
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-3 divide-x divide-white/10 rounded-2xl bg-white/5 ring-1 ring-white/10">
              <div className="px-5 py-4 text-center">
                <p className="text-2xl font-black">{yearsOnTeam}</p>
                <p className="mt-0.5 text-xs text-white/40">Years</p>
              </div>
              <div className="px-5 py-4 text-center">
                <p className="text-2xl font-black">
                  {meetAndGreet.includes.length}
                </p>
                <p className="mt-0.5 text-xs text-white/40">Perks</p>
              </div>
              <div className="px-5 py-4 text-center">
                <p className="text-2xl font-black">
                  {meetAndGreet.duration.split(" ")[0]}
                  <span className="text-sm font-medium text-white/50">min</span>
                </p>
                <p className="mt-0.5 text-xs text-white/40">Session</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-black">About {firstName}</h2>
            <p className="mt-4 leading-8 text-white/60">{bio}</p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <MapPin className="mb-2 h-4 w-4 text-white/30" />
                <p className="text-xs uppercase tracking-widest text-white/30">
                  Hometown
                </p>
                <p className="mt-1 font-semibold">{hometown}</p>
              </div>
              <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <Star className="mb-2 h-4 w-4 text-white/30" />
                <p className="text-xs uppercase tracking-widest text-white/30">
                  Position
                </p>
                <p className="mt-1 font-semibold">{position}</p>
              </div>
              <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <Clock className="mb-2 h-4 w-4 text-white/30" />
                <p className="text-xs uppercase tracking-widest text-white/30">
                  Session
                </p>
                <p className="mt-1 font-semibold">{meetAndGreet.duration}</p>
              </div>
              <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <MapPin className="mb-2 h-4 w-4 text-white/30" />
                <p className="text-xs uppercase tracking-widest text-white/30">
                  Location
                </p>
                <p className="mt-1 font-semibold">{meetAndGreet.location}</p>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40">
                Specialties
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {specialties.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <h3 className="font-bold">Your VIP Experience Includes</h3>
              <ul className="mt-5 space-y-3">
                {meetAndGreet.includes.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-white/40" />
                    <span className="text-sm text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={`/meet-and-greet/${slug}/book`}
              className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-white py-4 text-base font-bold text-black transition hover:bg-white/90"
            >
              Book Your Meet & Greet
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
