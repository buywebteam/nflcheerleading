"use client";

import { Mail } from "lucide-react";

export default function ContactUs() {
  const handleEmailClick = () => {
    const subject = "NFL Cheer Membership Inquiry";

    const body = `
Hello,

I would like to get more information about NFL Cheerleading memberships.

Thank you.
    `;

    const mailtoLink = `mailto:Nflcheerleadingmanagement@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="bg-white py-24 text-black">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Contact Us</h2>

        <p className="mt-4 text-gray-600">
          Have questions about memberships, VIP access, or teams? Send us an
          email and we’ll respond as soon as possible.
        </p>

        {/* EMAIL CARD */}
        <div className="mt-10 rounded-2xl border bg-black p-8 text-white">
          <Mail className="mx-auto h-6 w-6" />

          <p className="mt-4 text-sm text-gray-300">
            Click below to email us directly
          </p>

          <button
            onClick={handleEmailClick}
            className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-105"
          >
            Send Email
          </button>

          <p className="mt-4 text-xs text-gray-400">
            Nflcheerleadingmanagement@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}
