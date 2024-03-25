import "./globals.css";
import "@repo/ui/styles.css";
import { Chakra_Petch } from "next/font/google";

const font = Chakra_Petch({ weight: "400", subsets: ["latin"] });

export default function SubzidionSeattleWaUs({ Component, pageProps }) {
  return (
    <div className={font.className}>
      <Component {...pageProps} />
    </div>
  );
}
