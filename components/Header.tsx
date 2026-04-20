"use client";

import Link from "next/link";
import { Menu, X, Crown, Users, ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Teams", href: "/#teams" },
    { name: "Membership", href: "/#membership" },
    { name: "Benefits", href: "/#benefits" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header className="w-full border-b border-white/10 bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-2xl bg-white/10 p-2">
            <Crown className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold sm:text-xl">NFL Cheerleading</h1>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-200 transition hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-105">
            Join Membership
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl border border-white/20 p-2 md:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-black md:hidden">
          <div className="space-y-5 px-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-base font-medium text-gray-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5" />
                <span className="text-sm">Premium VIP Benefits</span>
              </div>
            </div>

            <button className="w-full rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black">
              Become a VIP Member
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
