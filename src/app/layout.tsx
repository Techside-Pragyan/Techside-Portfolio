import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Navbar from "@/components/ui/Navbar";
import CustomCursor from "@/components/ui/CustomCursor";
import SecurityProvider from "@/components/SecurityProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI/ML Engineer Portfolio",
  description: "Premium 3D portfolio of an AI/ML Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased min-h-screen flex flex-col bg-[#050505] text-[#f0f0f0]`}
      >
        <SecurityProvider>
          <SmoothScroll>
            <CustomCursor />
            <Navbar />
            <div className="flex-grow">
              {children}
            </div>
          </SmoothScroll>
        </SecurityProvider>
      </body>
    </html>
  );
}
