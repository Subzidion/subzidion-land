import "./globals.css";
import "@repo/ui/styles.css";
import { Chakra_Petch } from "next/font/google";
import type { Metadata } from "next";

const font = Chakra_Petch({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carl Hiltbrunner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${font.className} h-screen w-screen flex lg:overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
