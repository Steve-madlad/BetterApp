import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/ThemeProvider";
import ThemeToggleButton from "@/components/ToggleTheme";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Better App",
  description: "A much better app than your mom's",
  icons: [{ rel: "icon", url: "/better-auth-logo-light.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Providers>
          <nav className="flex-between shadow-md px-8">
            <div className="flex-center gap-2">
              <Image
                width={50}
                height={50}
                alt="logo"
                src={"/better-auth-logo-lightpng-removebg-preview.svg"}
              />
              <p>Better App</p>
            </div>

            <div className="flex-center gap-10">
              <Link href={"/login"}>Login</Link>
              <Link href={"/signup"}>Signup</Link>
              <ThemeToggleButton />
            </div>
          </nav>
          {children}
        </Providers>
      </body>
    </html>
  );
}
