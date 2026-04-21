import Image from "next/image";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Jessica Morgan",
    team: "Denver Broncos Cheerleaders Member",
    image: "/images/T4.jpg",
    review:
      "Joining the Broncos VIP membership completely changed my fan experience. From exclusive events to premium merchandise discounts, everything feels first-class.",
  },
  {
    id: 2,
    name: "John Lewis",
    team: "Miami Dolphins Cheerleaders Member",
    image: "/images/T3.jpg",
    review:
      "The VIP access and private member events are absolutely amazing. I finally feel like part of something exclusive and premium.",
  },
  {
    id: 3,
    name: "Michael Adams",
    team: "Detroit Lions Cheerleaders Member",
    image: "/images/T2.jpg",
    review:
      "The membership perks are worth every dollar. Priority access, special events, and the premium welcome gifts make it unforgettable.",
  },
  {
    id: 4,
    name: "Sophia Carter",
    team: "New England Patriots Cheerleaders Member",
    image: "/images/T5.jpg",
    review:
      "The Patriots Elite membership gave me unforgettable VIP access. From premium events to exclusive backstage experiences, it truly feels luxury-level.",
  },
  {
    id: 5,
    name: "Jake Johnson",
    team: "Denver Broncos Cheerleaders Member",
    image: "/images/T1.jpg",
    review:
      "I love the premium fan perks and exclusive member-only events. It feels like being part of the team beyond game day.",
  },
  {
    id: 6,
    name: "Olivia Bennett",
    team: "Miami Dolphins Cheerleaders Member",
    image: "/images/T6.jpg",
    review:
      "From early ticket access to special VIP meet-and-greets, this membership exceeded my expectations in every possible way.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-white px-4 py-20 text-black sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 inline-flex rounded-full border border-black/10 bg-black/5 px-4 py-2 text-sm font-medium">
            Member Reviews
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            What Our Members Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
            Real experiences from exclusive NFL cheerleading membership members
            enjoying VIP access, premium events, and unforgettable moments.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="h-5 w-5 fill-current" />
                  ))}
                </div>

                <Quote className="h-8 w-8 text-gray-300" />
              </div>

              <p className="text-sm leading-relaxed text-gray-600">
                {item.review}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    loading="eager"
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.team}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
