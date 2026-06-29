"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import BookingForm from "./BookingForm";
import BookingSuccess from "./BookingSuccess";

type Cheerleader = {
  slug: string;
  displayName: string;
  team: string;
  meetAndGreet: {
    location: string;
    duration: string;
  };
};

type BookingModalProps = {
  open: boolean;
  onClose: () => void;
  cheerleader: Cheerleader;
};

export default function BookingModal({
  open,
  onClose,
  cheerleader,
}: BookingModalProps) {
  const [success, setSuccess] = useState(false);

  // Prevent background scrolling
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  // Reset success screen whenever the modal is closed
  useEffect(() => {
    if (!open) {
      setSuccess(false);
    }
  }, [open]);

  // Close with Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
      />

      <div className="relative z-10 mx-4 w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-[#111111] shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-8 py-6">
          <div>
            <h2 className="text-2xl font-bold text-white">Book Meet & Greet</h2>

            <p className="mt-1 text-sm text-white/50">
              {cheerleader.displayName}
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 text-white/60 transition hover:bg-white/10 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[80vh] overflow-y-auto p-8">
          {success ? (
            <BookingSuccess cheerleader={cheerleader} onClose={onClose} />
          ) : (
            <BookingForm
              cheerleader={cheerleader}
              onSuccess={() => setSuccess(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
