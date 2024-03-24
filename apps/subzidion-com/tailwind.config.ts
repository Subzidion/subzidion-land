import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./pages/*.tsx"],
  presets: [sharedConfig],
};

export default config;