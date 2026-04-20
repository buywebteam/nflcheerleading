import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `New Contact from ${form.name}`;
    const body = `
Name: ${form.name}
Email: ${form.email}

Message:
${form.message}
    `;

    const mailtoLink = `mailto:Nflcheerleadingmanagement@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };
  return (
    <section
      id="contact"
      className="bg-white px-4 py-24 text-black sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Get in Touch</h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Have questions about memberships, teams, or VIP access? We’re here
            to help you connect with your favorite NFL cheerleading experiences.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          {/* CONTACT INFO */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="h-5 w-5" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-sm text-gray-600">support@nflcheervip.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="h-5 w-5" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-sm text-gray-600">+1 (800) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5" />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-sm text-gray-600">
                  United States (Remote Fan Support Hub)
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-black p-6 text-white">
              <h3 className="text-lg font-semibold">VIP Support Available</h3>
              <p className="mt-2 text-sm text-gray-300">
                Premium members get priority support and faster response times.
              </p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <form onSubmit={handleSubmit} className="mt-10 space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-black"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-black"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-black"
              required
            />

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-black py-3 text-white transition hover:scale-105"
            >
              Send Message
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
