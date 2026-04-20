import Link from "next/link";
import { Crown, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-lg font-bold">
              <Crown className="h-5 w-5" />
              NFL Cheerleading
            </div>

            <p className="mt-4 text-sm text-gray-400">
              Exclusive NFL cheerleading memberships, VIP fan access, and
              premium experiences designed for true supporters.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#teams" className="hover:text-white">
                  Teams
                </Link>
              </li>
              <li>
                <Link href="#teams" className="hover:text-white">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Membership</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>Sideline Spirit Tier</li>
              <li>Lone Star Tier</li>
              <li>Ocean Fan Tier</li>
              <li>Patriot Fan</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Nflcheerleadingmanagement@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 border-t border-white/10" />

        {/* BOTTOM */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} NFL Cheerleading. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
