import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import analyze from "rollup-plugin-analyzer";
import { terser } from "rollup-plugin-terser";

const formats = ["es", "cjs"];

export default formats.map((format) => ({
  input: "src/lib/index.js",
  output: {
    file: `dist/index.${format}.js`,
    format,
    sourcemap: true,
    exports: "named",
  },
  plugins: [
    resolve(),
    babel({ babelHelpers: "bundled" }),
    terser(),
    analyze({ summaryOnly: true }),
  ],
  external: [
    "prop-types",
    "react",
    "react-dom",
    "styled-components",
    "react-chatbot-kit",
  ],
}));
