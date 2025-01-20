import Nav from "@/components/ui/Nav";
import "./globals.css";
import type { Metadata } from "next";
import { Rubik, Syne } from "next/font/google";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${syne.variable} antialiased bg-secondary-black text-secondary-white max-w-[1146px] mx-auto`}
      >
        <Nav/>
        {children}
      </body>
    </html>
  );
}
