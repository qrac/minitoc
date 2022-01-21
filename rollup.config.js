import esbuild from "rollup-plugin-esbuild"
import pkg from "./package.json"

const banner = `/*! ${pkg.name} v${pkg.version} ${pkg.license} by ${pkg.author.name} */\n`

export default {
  input: "src/index.ts",
  output: [
    {
      name: pkg.name,
      file: pkg.cdn,
      format: "umd",
      banner,
    },
    {
      file: pkg.main,
      format: "cjs",
      exports: "default",
      banner,
    },
    {
      file: pkg.module,
      format: "es",
      banner,
    },
  ],
  plugins: [esbuild({ minify: process.env.NODE_ENV === "production" })],
}
