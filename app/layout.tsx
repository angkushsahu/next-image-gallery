import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import type { PropsWithChildren } from "react";

export const revalidate = 3600; // revalidate everything after an hour

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Next.js 13.5 Image gallery",
   description:
      "Next.js image gallery code-along project with net-ninja youtube channel to learn image optimisation in next.js 13.5",
};

export default function RootLayout({ children }: PropsWithChildren) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <Header />
            <main className="max-w-6xl mx-auto">{children}</main>
         </body>
      </html>
   );
}
