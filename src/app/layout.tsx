import type { Metadata } from "next";
import { Geist, Geist_Mono, Barrio, Delius } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const barrio = Barrio({
  variable: "--font-barrio",
  weight: "400",
  subsets: ["latin"],
});


const delius = Delius({
  variable: "--font-delius",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Happy Birthday Monika!",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${barrio.variable} ${delius.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
