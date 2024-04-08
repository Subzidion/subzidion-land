import "./globals.css";
import "@repo/ui/styles.css";
import { Chakra_Petch } from "next/font/google";
import type { AppProps } from "next/app";
import Head from "next/head";
import Sidebar from "../components/sidebar";

const font = Chakra_Petch({ weight: "400", subsets: ["latin"] });

export default function SubzidionCom({
  Component,
  pageProps,
}: AppProps): JSX.Element {
  return (
    <div
      className={`${font.className} h-screen w-screen flex lg:overflow-hidden`}
    >
      <Head>
        <title>Carl Hiltbrunner</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className="grid grid-cols-1 lg:grid-cols-6 lg:gap-6">
        <Sidebar />
        <div className="col-span-4 lg:overflow-auto">
          <Component {...pageProps} />
        </div>
      </main>
    </div>
  );
}
