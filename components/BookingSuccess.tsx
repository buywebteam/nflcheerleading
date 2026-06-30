"use client";

import { CheckCircle2, Download, Mail } from "lucide-react";

type Cheerleader = {
  displayName: string;
};

type BookingSuccessProps = {
  cheerleader: Cheerleader;
  onClose: () => void;
};

export default function BookingSuccess({
  cheerleader,
  onClose,
}: BookingSuccessProps) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Success Icon */}
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 ring-1 ring-green-500/20">
        <CheckCircle2 className="h-10 w-10 text-green-400" />
      </div>

      {/* Heading */}
      <h2 className="mt-8 text-3xl font-bold text-white">
        Booking Request Ready
      </h2>

      <p className="mt-4 max-w-lg leading-8 text-white/60">
        Your email application should now be open with your booking request for{" "}
        <span className="font-semibold text-white">
          {cheerleader.displayName}
        </span>
        .
      </p>

      <p className="mt-3 max-w-lg leading-8 text-white/60">
        Your Meet & Greet is <strong>not confirmed yet.</strong> Please
        download, review and sign the agreement below, then email the signed
        copy back to the administration team for approval.
      </p>

      {/* Download Contract */}
      <a
        href="/contracts/NFLCheerleadingMeet&GreetParticipationAgreement.pdf"
        download
        className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-semibold text-black transition hover:bg-neutral-200"
      >
        <Download className="h-5 w-5" />
        Download Agreement
      </a>

      {/* Reminder */}
      <div className="mt-10 w-full rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
        <div className="flex items-start gap-3">
          <Mail className="mt-1 h-5 w-5 text-white/50" />

          <div>
            <h3 className="font-semibold text-white">What's Next?</h3>

            <ol className="mt-4 space-y-3 text-sm leading-7 text-white/60">
              <li>1. Download the Meet & Greet Agreement.</li>

              <li>2. Review all terms and conditions carefully.</li>

              <li>3. Sign the agreement.</li>

              <li>
                4. Reply to the booking email with the signed agreement
                attached.
              </li>

              <li>
                5. Our administration team will review your request and contact
                you to confirm your booking.
              </li>
            </ol>
          </div>
        </div>
      </div>

      <button
        onClick={onClose}
        className="mt-10 w-full rounded-2xl border border-white/10 bg-white/5 py-4 font-semibold text-white transition hover:bg-white/10"
      >
        Close
      </button>
    </div>
  );
}
