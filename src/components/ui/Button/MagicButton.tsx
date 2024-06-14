"use client";
import { motion } from "framer-motion";
import React from "react";

const MagicButton = ({
  children,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  position?: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="shadow-surface-dark-base focus:ring-offset-surface-dark-base group relative inline-flex h-16 w-full overflow-hidden rounded-lg p-[1px] shadow-inner transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-4 md:mt-10 md:w-60"
      onClick={handleClick}
    >
      <span className="from-surface-dark-crust group-hover:via-perolous to-surface-dark-crust via-perolous-900 absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-gradient-to-br lg:inset-[-200%]" />
      <span
        className={`from-surface-dark-mantle via-surface-dark-crust to-surface-dark-base font-secondary hover:text-perolous inline-flex h-full w-full cursor-pointer items-center justify-center gap-4 rounded-lg bg-gradient-to-br px-7 text-lg font-medium backdrop-blur-3xl hover:bg-gradient-to-tl hover:font-bold ${otherClasses}`}
      >
        {icon && position === "left" && icon}
        {children}
        {icon && position === "right" && icon}
      </span>
    </motion.button>
  );
};

export default MagicButton;
