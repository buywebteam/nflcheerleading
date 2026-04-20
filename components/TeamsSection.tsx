import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Crown } from "lucide-react";
import { teams } from "@/data/teams";

const teamList = Object.entries(teams).map(([slug, team]) => ({
  slug,
  name: team.teamName,
  image: team.bannerImage,
  membership: team.tiers?.[0]?.title ?? "VIP Membership",
}));

export default function TeamsSection() {
  return (
    <section
      id="teams"
      className="bg-white px-4 py-20 text-black sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-4 py-2 text-sm font-medium">
            <Crown className="h-4 w-4" />
            Featured NFL Cheer Teams
          </div>

          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Choose Your VIP Membership Team
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Join exclusive membership programs from top NFL cheerleading teams.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamList.map((team) => (
            <div
              key={team.slug}
              className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-72 w-full">
                <Image
                  src={team.image}
                  alt={team.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold">{team.name}</h3>

                <p className="mt-2 text-sm text-gray-600">{team.membership}</p>

                <Link
                  href={`/teams/${team.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
                >
                  View Membership
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
