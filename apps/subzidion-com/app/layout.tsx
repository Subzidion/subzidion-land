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
}): JSX.Element {
  return (
    <html lang="en">
      <body
        className={`${font.className} h-screen w-screen flex`}
      >
        {children}
      </body>
    </html>
  );
}
