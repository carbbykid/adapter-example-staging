import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Coin98AdapterModal from "./modal";
import Provider from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {children}
          <Coin98AdapterModal />
        </Provider>
      </body>
    </html>
  );
}
