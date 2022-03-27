import scss from 'rollup-plugin-scss'

export default {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "esm",
  },
  plugins: [scss()],
};
