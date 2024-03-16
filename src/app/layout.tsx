import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
          <div className="flex">
            <Link href="/" className="bg-slate-300 p-2 hover:bg-slate-400 cursor-pointer">home</Link>
            <Link href="/assessment" className="bg-slate-300 p-2 hover:bg-slate-400 cursor-pointer">assessment</Link>
            <Link href="/result" className="bg-slate-300 p-2 hover:bg-slate-400 cursor-pointer">result</Link>
          </div>
          <div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
