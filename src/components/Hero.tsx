"use client";
import { motion } from "framer-motion";
import React from "react";
import { FaDiscord } from "react-icons/fa";
import MagicButton from "./ui/Button/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="py-20 md:py-36">
      <div
        id="dot-grid"
        className="relative flex h-[calc(100vh-5rem)] w-full items-center justify-center bg-white bg-dot-black/[0.2] dark:bg-surface-dark dark:bg-dot-white/[0.15] md:h-[calc(100vh-9rem)]"
      >
        <div
          id="radial-gradient"
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-surface-dark"
        ></div>
        <div className="relative z-10">
          <div className="flex max-w-[89vw] flex-col items-center justify-center gap-3 md:max-w-2xl lg:max-w-[60vw] lg:gap-4 xl:gap-6">
            <motion.p
              className="text-center font-secondary text-xs uppercase tracking-widest text-neutral-300 md:text-sm lg:text-base xl:text-lg"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              A community of Developers, For Developers
            </motion.p>

            <TextGenerateEffect
              words="Where Developers Ignite their careers"
              className="text-center text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
              highlighted={["Ignite"]}
              highlightedClassName="text-orange"
            ></TextGenerateEffect>

            <motion.p
              className="mb-4 text-center font-secondary text-xs text-neutral-100 md:text-base md:tracking-wider lg:text-2xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              Level Up Your Skills with Awesome Mentors
            </motion.p>

            <MagicButton icon={<FaDiscord size={24} />} position="right">
              Join Now
            </MagicButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
