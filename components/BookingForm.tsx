"use client";

import { useState } from "react";

type Cheerleader = {
  displayName: string;
  team: string;
  meetAndGreet: {
    location: string;
    duration: string;
  };
};

type BookingFormProps = {
  cheerleader: Cheerleader;
  onSuccess: () => void;
};

export default function BookingForm({
  cheerleader,
  onSuccess,
}: BookingFormProps) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "1",
    message: "",
    agreed: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;

      setForm((prev) => ({
        ...prev,
        [name]: checked,
      }));

      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.agreed) {
      alert("Please accept the agreement before continuing.");
      return;
    }

    const adminEmail = "Nflcheerleadingmanagement@gmail.com";

    const subject = encodeURIComponent(
      `Meet & Greet Booking Request - ${cheerleader.displayName}`,
    );

    const body = encodeURIComponent(`
MEET & GREET BOOKING REQUEST

Cheerleader:
${cheerleader.displayName}

Team:
${cheerleader.team}

Location:
${cheerleader.meetAndGreet.location}

Duration:
${cheerleader.meetAndGreet.duration}

-----------------------------------

First Name:
${form.firstName}

Last Name:
${form.lastName}

Email:
${form.email}

Phone:
${form.phone}

Preferred Date:
${form.date}

Preferred Time:
${form.time}

Number of Guests:
${form.guests}

Special Requests:
${form.message}

-----------------------------------

Please contact me to confirm my booking.
`);

    window.location.href = `mailto:${adminEmail}?subject=${subject}&body=${body}`;

    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-white/70">
            First Name
          </label>

          <input
            required
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-white/30"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white/70">
            Last Name
          </label>

          <input
            required
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-white/30"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-white/70">
            Email
          </label>

          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-white/30"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white/70">
            Phone Number
          </label>

          <input
            required
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-white/30"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-white/70">
            Preferred Date
          </label>

          <input
            required
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-white/30"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white/70">
            Preferred Time
          </label>

          <input
            required
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-white/30"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-white/70">
          Number of Guests
        </label>

        <select
          name="guests"
          value={form.guests}
          onChange={handleChange}
          className="w-full rounded-xl border border-white/10 text-white bg-white/5 px-4 py-3 outline-none"
        >
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
          <option value="4">4 Guests</option>
          <option value="5">5 Guests</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-white/70">
          Special Requests
        </label>

        <textarea
          rows={5}
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us anything you'd like us to know..."
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-white/30"
        />
      </div>

      {/* Agreement */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            name="agreed"
            checked={form.agreed}
            onChange={handleChange}
            className="mt-1"
          />

          <span className="text-sm leading-7 text-white/70">
            I understand that submitting this form does not confirm my booking.
            My reservation will only be confirmed after the Meet & Greet
            Agreement has been signed and reviewed by the administration team.
          </span>
        </label>
      </div>

      {/* Buttons */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:bg-neutral-200"
        >
          Continue
        </button>
      </div>
    </form>
  );
}
