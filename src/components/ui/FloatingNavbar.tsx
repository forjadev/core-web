"use client";
import { cn } from "@/utils/cn";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../../public/logo.svg";
import Logo from "./Logo";

const animationVariants = {
  initial: {
    opacity: 0,
    y: -30,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 * index,
    },
  }),
};

export const FloatingNav = ({
  navItems,
  className,
  socialLinks,
}: {
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
}) => {
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

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="container fixed top-0 z-[9000] flex w-full items-center justify-between p-4 sm:py-12 lg:px-0"
      >
        <Logo className="size-10 text-orange" />
        <motion.ul
          className={cn(
            "border-black/.1 inset-x-0 top-10 z-[5000] flex max-w-fit items-center justify-center space-x-4 rounded-lg border bg-gradient-to-r from-surface-dark-crust to-surface-dark-mantle px-10 py-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] lg:min-w-fit",
            className,
          )}
          style={{
            backdropFilter: "blur(16px) saturate(180%)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}
        >
          {navItems.map(({ link, name, icon }, idx: number) => (
            <li className="group relative" key={`link=${idx}`}>
              <Link
                href={link}
                className={cn(
                  "relative flex items-center gap-2 space-x-1 text-neutral-50 hover:text-orange dark:text-neutral-50 hover:dark:text-orange",
                )}
              >
                <span className="block sm:hidden">{icon}</span>
                <span className="hidden !cursor-pointer text-sm sm:block">
                  {name}
                </span>
              </Link>
              <span className="absolute -bottom-2 left-1/2 h-1 w-1 rounded-full bg-orange opacity-0 transition-opacity duration-200 before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:content-[''] group-hover:opacity-100"></span>
            </li>
          ))}
        </motion.ul>
        {socialLinks && (
          <motion.ul className="flex flex-col items-center justify-center gap-3 md:flex-row md:gap-4 xl:gap-6">
            {socialLinks.map(({ name, link, icon }, idx: number) => (
              <motion.li
                className="group relative"
                key={`link=${idx}`}
                custom={idx}
                variants={animationVariants}
                initial={"initial"}
                animate={"animate"}
              >
                <Link
                  href={link}
                  target="_blank"
                  className={cn(
                    "relative flex items-center space-x-1 text-neutral-50 hover:text-orange dark:text-neutral-50 hover:dark:text-orange",
                  )}
                >
                  <span className="!cursor-pointer text-xl">{icon}</span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </motion.nav>
    </AnimatePresence>
  );
};
