import { UserPlus, CreditCard, Crown, CheckCircle } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Choose Your Team",
    description:
      "Select your favorite NFL cheerleading team and explore their exclusive membership tiers and VIP benefits.",
    icon: UserPlus,
  },
  {
    id: 2,
    title: "Pick Your Membership Tier",
    description:
      "Compare available plans like Sideline Spirit, Mile High Spirit, and Elite VIP to find your perfect fit.",
    icon: Crown,
  },
  {
    id: 3,
    title: "Complete Secure Payment",
    description:
      "Subscribe safely by contacting the management team via email and get instant confirmation of your membership.",
    icon: CreditCard,
  },
  {
    id: 4,
    title: "Enjoy VIP Access",
    description:
      "Start enjoying exclusive perks, premium fan experiences, merchandise discounts, and special events.",
    icon: CheckCircle,
  },
];

export default function HowToSubscribe() {
  return (
    <section
      id="how-to-subscribe"
      className="bg-black px-4 py-20 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            Membership Process
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            How to Subscribe
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-300 sm:text-lg">
            Becoming a VIP member is simple. Follow these easy steps and unlock
            premium NFL cheerleading fan experiences.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-black">
                  <Icon className="h-7 w-7" />
                </div>

                <div className="mb-3 text-sm font-semibold text-gray-300">
                  Step {step.id}
                </div>

                <h3 className="text-xl font-bold">{step.title}</h3>

                <p className="mt-4 text-sm leading-relaxed text-gray-300">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
