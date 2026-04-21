"use client";

import Link from "next/link";
import { Menu, X, Crown } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Teams", href: "/#teams" },
    { name: "About Us", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full  bg-black text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-2xl bg-white/10 p-2">
            <Crown className="h-6 w-6" />
          </div>
          <h1 className="text-lg font-bold sm:text-xl">NFL Cheerleading</h1>
        </Link>

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

        <div className="hidden md:block">
          <Link href="/#teams">
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-105">
              Join Membership
            </button>
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl border border-white/20 p-2 md:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-black md:hidden">
          <div className="space-y-5 px-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-base font-medium text-gray-200"
              >
                {link.name}
              </Link>
            ))}

            <Link href="/#teams">
              <button className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-black">
                Become a Member
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
