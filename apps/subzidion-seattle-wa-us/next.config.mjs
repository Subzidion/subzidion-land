import nextMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
  keepBackground: true,
  theme: "tokyo-night",
};

// next.config.js
const withMDX = nextMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
  transpilePackages: ["@repo/ui"],
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

export default withMDX(nextConfig);
