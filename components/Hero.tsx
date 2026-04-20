"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { section } from "framer-motion/m";

const heroImages = [
  {
    image: "/images/denver2.webp",
    title: "Denver Broncos Cheerleaders",
  },
  {
    image: "/images/miami4.webp",
    title: "Miami Dolphins Cheerleaders",
  },
  {
    image: "/images/lion2.jpeg",
    title: "Detroit Lions Cheerleaders",
  },
  {
    image: "/images/patriots1.jpg",
    title: "New England Patriots Cheerleaders",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Animated Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImages[currentIndex].image})`,
          }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
            <Star className="h-4 w-4" />
            Premium NFL Cheer Membership Experience
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl"
          >
            Join the Ultimate
            <span className="block">NFL Cheerleading</span>
            <span className="block text-gray-300">VIP Membership Club</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base text-gray-200 sm:text-lg lg:text-xl"
          >
            Exclusive access to elite events, premium membership perks,
            meet-and-greet opportunities, VIP game-day experiences, and
            unforgettable moments with your favorite NFL cheer teams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="#membership"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-black transition hover:scale-105"
            >
              Join Membership
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="#teams"
              className="inline-flex items-center justify-center rounded-2xl border border-white/30 px-8 py-4 text-sm font-semibold transition hover:bg-white/10"
            >
              Explore Teams
            </Link>
          </motion.div>

          {/* Current Team Indicator */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {heroImages.map((team, index) => (
              <button
                key={team.title}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                  currentIndex === index
                    ? "bg-white text-black"
                    : "border border-white/20 bg-white/10 text-white"
                }`}
              >
                {team.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
