"use client";

import { useState } from "react";
import BookingModal from "./BookingModal";

type Cheerleader = {
  slug: string;
  displayName: string;
  team: string;
  meetAndGreet: {
    location: string;
    duration: string;
  };
};

type BookingButtonProps = {
  cheerleader: Cheerleader;
};

export default function BookingButton({ cheerleader }: BookingButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-white py-4 text-base font-bold text-black transition hover:bg-white/90"
      >
        Book Your Meet & Greet
      </button>

      <BookingModal
        open={open}
        onClose={() => setOpen(false)}
        cheerleader={cheerleader}
      />
    </>
  );
}
