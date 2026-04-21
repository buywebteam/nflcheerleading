"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "How do I join an NFL cheer membership plan?",
    answer:
      "Simply choose your preferred team, select a membership tier that fits your needs. After choosing your membership tier, you will be guided by our team via email on the payment process",
  },
  {
    id: 2,
    question: "Are memberships billed monthly or yearly?",
    answer:
      "Most of our membership plans are billed yearly to provide the best value and exclusive long-term benefits for members.",
  },
  {
    id: 3,
    question: "Can I upgrade my membership tier later?",
    answer:
      "Yes, you can upgrade your membership at any time to unlock additional VIP perks, premium event access, and exclusive rewards.",
  },
  {
    id: 4,
    question: "Do I get access to exclusive events and meet-and-greets?",
    answer:
      "Yes, depending on your membership tier, you may receive access to VIP events, cheerleader meet-and-greets, backstage experiences, and special game-day opportunities.",
  },
  {
    id: 5,
    question: "How are membership payments handled?",
    answer:
      "Membership payments are handled directly through email communication with our management team. After choosing your membership tier, you will be guided by our team on the payment process, confirmation, and activation of your VIP membership access.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="bg-black px-4 py-20 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-14 text-center">
          <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            Support Center
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-300 sm:text-lg">
            Everything you need to know about memberships, VIP access, payments,
            and exclusive cheerleading experiences.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-base font-semibold sm:text-lg">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openId === faq.id && (
                <div className="px-6 pb-6 text-sm leading-relaxed text-gray-300 sm:text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
