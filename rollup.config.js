import css from "rollup-plugin-import-css";

export default {
  input: "src/index.js",
  output: {
    dir: "./dist",
  },
  plugins: [css()],
};
