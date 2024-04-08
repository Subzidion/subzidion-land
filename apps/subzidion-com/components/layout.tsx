import "@repo/ui/styles.css";
import { Chakra_Petch } from "next/font/google";
import Head from "next/head";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const font = Chakra_Petch({ weight: "400", subsets: ["latin"] });

interface LayoutProps {
  children: string | JSX.Element | JSX.Element[];
}

export default function Layout(props: LayoutProps): JSX.Element {
  return (
    <div
      className={`${font.className} h-screen w-screen flex lg:overflow-hidden`}
    >
      <Head>
        <title>Carl Hiltbrunner</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className="grid grid-cols-1 lg:grid-cols-6 lg:gap-6">
        <div className="col-span-2">
          <Navbar />
          <Sidebar />
        </div>
        <div className="col-span-4 lg:overflow-auto">{props.children}</div>
      </main>
    </div>
  );
}
