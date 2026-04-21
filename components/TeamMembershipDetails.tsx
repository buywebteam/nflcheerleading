import Image from "next/image";
import { Crown, Check, ArrowRight, MapPin, Calendar } from "lucide-react";

interface MembershipTier {
  title: string;
  price: string;
  image: string;
  shortDescription?: string;
  highlights?: string[];
  benefits: string[];
}

interface TeamMembershipDetailsProps {
  teamName: string;
  description?: string;
  location?: string;
  founded?: string;
  bannerImage: string;
  tiers: MembershipTier[];
}

export default function TeamMembershipDetails({
  teamName,
  description,
  location,
  founded,
  bannerImage,
  tiers,
}: TeamMembershipDetailsProps) {
  return (
    <section className="bg-black text-white">
      <div className="relative h-120 w-full">
        <Image src={bannerImage} alt={teamName} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
              <Crown className="h-4 w-4" />
              Exclusive Membership Access
            </div>

            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">{teamName}</h1>

            {description && <p className="mt-4 text-gray-200">{description}</p>}

            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-300">
              {location && (
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {location}
                </span>
              )}

              {founded && (
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Founded {founded}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-center text-3xl font-bold">Membership Tiers</h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2"
            >
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition">
                <Image
                  src={tier.image}
                  alt={tier.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold">{tier.title}</h3>

                {tier.shortDescription && (
                  <p className="mt-1 text-sm text-gray-300">
                    {tier.shortDescription}
                  </p>
                )}

                <p className="mt-3 text-3xl font-bold">{tier.price}</p>

                {tier.highlights?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {tier.highlights.map((h, idx) => (
                      <span
                        key={idx}
                        className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                ) : null}

                <div className="mt-6 space-y-3">
                  {tier.benefits.map((b, idx) => (
                    <div key={idx} className="flex gap-2">
                      <Check className="h-5 w-5 shrink-0" />
                      <p className="text-sm text-gray-200">{b}</p>
                    </div>
                  ))}
                </div>

                <a
                  href={`mailto:Nflcheerleadingmanagement@gmail.com?subject=Membership Subscription - ${tier.title}`}
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-white py-3 text-black transition hover:scale-105"
                >
                  Join {tier.title}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
