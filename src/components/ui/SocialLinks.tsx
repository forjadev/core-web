import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/utils";

export interface SocialLinksProps {
  links: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}

export const SocialLinks = ({ links, className }: SocialLinksProps) => {
  return (
    <motion.div
      className={cn(
        "flex items-center justify-center gap-3 md:gap-4 xl:gap-6",
        className,
      )}
    >
      {links.map(({ name, link, icon }, idx: number) => (
        <div className="group relative" key={`link=${idx}`}>
          <Link
            href={link}
            target="_blank"
            className="relative flex items-center space-x-1 text-neutral-50 hover:text-orange dark:text-neutral-50 hover:dark:text-orange"
          >
            <span className="!cursor-pointer text-xl">{icon}</span>
          </Link>
        </div>
      ))}
    </motion.div>
  );
};
