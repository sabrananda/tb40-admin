// "use client"
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./navbar";
// import { Inter } from "next/font/google";
// import Link from "next/link";

// import icon from '@/asset/resultImage/logo.png'
// import Link from "next/link";
// import Router from "./router";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tafsir Bakat 40",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <head>
        {/* <Link suppressHydrationWarning={false} href="/logo.ico" rel="icon" /> */}
      </head>
      <body>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
