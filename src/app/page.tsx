import { Hero } from "@/components";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems, socialLinks } from "@/data";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden px-5 sm:px-10">
      <FloatingNav navItems={navItems} socialLinks={socialLinks} />
      <div className="container w-full">
        <Hero />
      </div>
    </main>
  );
}
