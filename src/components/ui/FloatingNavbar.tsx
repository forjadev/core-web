"use client";
import { cn } from "@/utils/cn";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { SocialLinks } from "./SocialLinks";

interface FloatingNavProps {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
  socialLinks?: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
}

export const FloatingNav = ({
  navItems,
  className,
  socialLinks,
}: FloatingNavProps) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const isScrollable = navItems.length > 4;

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{
          opacity: 1,
          y: "-100%",
        }}
        animate={{
          y: visible ? 0 : "-100%",
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="container fixed top-0 z-[9000] flex w-full flex-col items-center gap-y-4 px-5 py-6 md:flex-row md:justify-between md:px-0 md:py-12"
      >
        <motion.div className="flex w-full items-center justify-between md:w-fit">
          <Logo className="size-8 text-orange md:size-10" />

          {socialLinks && (
            <SocialLinks links={socialLinks} className="md:hidden" />
          )}
        </motion.div>

        <motion.div
          className={cn(
            "relative max-w-full overflow-hidden rounded-xl border border-white/[.125] bg-gradient-to-r from-surface-dark-crust to-surface-dark-mantle shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
            isScrollable && [
              "before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-5 before:bg-gradient-to-r before:from-surface-dark-crust before:to-transparent",
              "after:absolute after:right-0 after:top-0 after:h-full after:w-5 after:bg-gradient-to-l after:from-surface-dark-mantle after:to-transparent",
            ],
          )}
        >
          <div
            className={cn(
              "inset-x-0 z-[5000] flex w-full items-center justify-around space-x-4 px-5 md:w-fit md:justify-center md:space-x-6 md:px-10",
              isScrollable && "overflow-x-auto",
              className,
            )}
          >
            {navItems.map((navItem: any, idx: number) => (
              <div className="group relative" key={`link=${idx}`}>
                <Link
                  href={navItem.link}
                  className="relative flex items-center gap-2 py-5 text-neutral-50 hover:text-orange dark:text-neutral-50 hover:dark:text-orange"
                >
                  <span className="hidden md:block">{navItem.icon}</span>
                  <span className="!cursor-pointer text-sm">
                    {navItem.name}
                  </span>
                </Link>
                <span className="absolute bottom-3 left-1/2 h-1 w-1 rounded-full bg-orange opacity-0 transition-opacity duration-200 before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:content-[''] group-hover:opacity-100"></span>
              </div>
            ))}
          </div>
        </motion.div>

        {socialLinks && (
          <SocialLinks links={socialLinks} className="hidden md:flex" />
        )}
      </motion.nav>
    </AnimatePresence>
  );
};
