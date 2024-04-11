/** @type {import('next').NextConfig} */

const pkg = require("./package.json");

const commitHash = require("child_process")
  .execSync('git log --pretty=format:"%h" -n1')
  .toString()
  .trim();

module.exports = {
  transpilePackages: ["@repo/ui"],
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  env: {
    // add the package.json version and git hash to the environment
    APP_VERSION: pkg.version,
    COMMIT_HASH: commitHash,
  },
};
