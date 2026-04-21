import { Users, Trophy, Star, Calendar } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50K+",
    label: "Active Members",
  },
  {
    icon: Trophy,
    value: "4",
    label: "NFL Teams",
  },
  {
    icon: Star,
    value: "120+",
    label: "VIP Experiences",
  },
  {
    icon: Calendar,
    value: "10+",
    label: "Years of Cheer Legacy",
  },
];

export default function StatsBar() {
  return (
    <section className="bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center"
              >
                <div className="mb-3 rounded-full bg-white/10 p-3">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-2xl font-bold sm:text-3xl">{stat.value}</h3>

                <p className="mt-1 text-sm text-gray-300">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
