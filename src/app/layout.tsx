import type { Metadata } from "next";
import { Varela_Round } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const varelaRound = Varela_Round({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thanawat Panpinij",
  description: "This is a personal portfolio website for Thanawat Panpinij",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        id="top"
        className={`${varelaRound.className} bg-black antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
