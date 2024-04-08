import "./globals.css";
import "@repo/ui/styles.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";

export default function SubzidionCom({
  Component,
  pageProps,
}: AppProps): JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
