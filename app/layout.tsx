import { Inter } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/primitives/button";
import { HomeIcon } from "@heroicons/react/16/solid";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Sus Busters',
  description: 'A game to determine if your friends are humans or bots',
} satisfies Metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          {/* <div>
            <Navbar />
          </div> */}
          <div className="items-center flex gap-4 p-2 justify-end">
            <Button href="/" outline>
              <HomeIcon />
              Home
            </Button>
          </div>
          <main className="flex-1 p-12">{children}</main>
        </div>
      </body>
    </html>
  );
}
