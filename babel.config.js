module.exports = (api) => {
  api.cache(true);

  const presets = ["@babel/preset-env", "@babel/preset-react"];
  const plugins = [
    "@babel/plugin-proposal-class-properties",
    "babel-plugin-styled-components",
    "react-hot-loader/babel",
    "@babel/plugin-transform-runtime",
  ];

  return {
    presets,
    plugins
  }
}