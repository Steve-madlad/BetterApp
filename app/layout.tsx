import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggleButton from "@/components/ToggleTheme";
import Link from "next/link";
import Image from "next/image";
import { Toaster } from "@/components/ui/sonner";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <ThemeProvider>
          <nav className="flex-between px-8 shadow-md">
            <Link href={"/"} className="flex-center gap-2">
              <Image
                width={50}
                height={50}
                alt="logo"
                src={"/better-auth-logo-lightpng-removebg-preview.svg"}
              />
              <p>Better App</p>
            </Link>

            <ThemeToggleButton />
          </nav>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
