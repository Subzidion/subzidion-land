import "./globals.css";
import "@repo/ui/styles.css";
import { Chakra_Petch } from "next/font/google";
import type { AppProps } from "next/app";

const font = Chakra_Petch({ weight: "400", subsets: ["latin"] });

export default function SubzidionCom({
  Component,
  pageProps,
}: AppProps): JSX.Element {
  return (
    <div className={font.className}>
      <Component {...pageProps} />
    </div>
  );
}
