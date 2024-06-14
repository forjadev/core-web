import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/utils";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

const fonts = [inter, jetBrainsMono];

export const metadata: Metadata = {
  title: "Forja Dev",
  description: "A community of Developers, for Developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          fonts.map((font) => font.variable).join(" "),
          "dark:bg-surface-dark bg-white text-neutral-900 dark:text-neutral-50",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          // enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
