import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./pages/*.{tsx,mdx}"],
  presets: [sharedConfig],
};

export default config;