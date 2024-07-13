import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import HeaderNav from "@/components/header-nav";

const inter = Kanit({ weight: ["400", "600", "800"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nuttasit New",
  description: "Knownledge is Power",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="grid grid-cols-1 max-w-screen  min-h-screen bg-gradient-to-r from-black via-gray-900 to-black ">
          <div className="absolute text-6xl justify-center text-gray-500/20 right-0 bottom-[300px] tracking-widest">
            Full-Stack Developer
          </div>
          <HeaderNav />
          {children}
        </main>
      </body>
    </html>
  );
}
