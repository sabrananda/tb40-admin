import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Router from "./router";

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
      <body>
        <div>
          <Router />
          <div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
