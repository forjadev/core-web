"use client";
import { motion } from "framer-motion";
import React from "react";
import { FaDiscord } from "react-icons/fa";
import MagicButton from "./ui/Button/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div
        id="dot-grid"
        className="dark:bg-dot-white/[0.15] bg-dot-black/[0.2] dark:bg-surface-dark relative flex h-screen w-full items-center justify-center bg-white"
      >
        <div
          id="radial-gradient"
          className="dark:bg-surface-dark pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        ></div>
        <div className="relative z-10 my-20 flex justify-center">
          <div className="flex max-w-[89vw] flex-col items-center justify-center gap-3 md:max-w-2xl lg:max-w-[60vw] lg:gap-4 xl:gap-6">
            <motion.p
              className="font-secondary text-center text-xs uppercase tracking-widest text-neutral-300 md:text-sm lg:text-base xl:text-lg"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              A community of Developers, For Developers
            </motion.p>

            <TextGenerateEffect
              words="Where Developers Ignite their
              careers"
              className="text-center text-[40px] font-bold md:text-5xl xl:text-8xl"
              highlighted={["Ignite"]}
              highlightedClassName="text-orange"
            ></TextGenerateEffect>

            <motion.p
              className="font-secondary mb-4 text-center text-xs text-neutral-100 md:text-base md:tracking-wider lg:text-2xl"
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
