import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Niesh Automobile | Premium Dealership",
  description: "Experience Premium Mobility with Niesh Automobile. Discover the finest selection of vehicles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-[#f8f9fa] text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
