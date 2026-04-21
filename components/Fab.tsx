"use client";

import { Mail } from "lucide-react";

export default function FloatingEmailButton() {
  const handleClick = () => {
    const email = "Nflcheerleadingmanagement@gmail.com";

    const subject = "Inquiry About NFL Cheer Membership";
    const body = "Hello, I would like to know more about the membership plans.";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink, "_self");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#063c71] text-white shadow-lg transition hover:scale-110 hover:bg-gray-900"
    >
      <Mail className="h-8 w-8" />
    </button>
  );
}
