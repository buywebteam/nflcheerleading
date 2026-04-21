import Image from "next/image";
import { Camera, Play } from "lucide-react";

const media = [
  {
    image: "/images/denver 3.jpg",
    title: "Training Sessions",
  },
  {
    image: "/images/miamidolphin.jpg",
    title: "Game Day Prep",
  },
  {
    image: "/images/lions1.webp",
    title: "VIP Events",
  },
  {
    image: "/images/patriots1.jpg",
    title: "Exclusive Interviews",
  },
];

export default function BehindTheScenes() {
  return (
    <section className="bg-white py-24 text-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-4 py-2 text-sm font-medium">
            <Camera className="h-4 w-4" />
            Exclusive Behind the Scenes
          </div>

          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Experience Life Beyond the Field
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Get exclusive access to training sessions, game-day preparations,
            VIP events, and behind-the-scenes moments with NFL cheerleaders.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {media.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className="relative h-72 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute inset-0 flex items-end p-5">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
