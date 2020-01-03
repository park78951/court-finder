module.exports = (api) => {
  api.cache(true);

  const presets = [
    ["@babel/preset-env", 
      {
        "useBuiltIns": "entry",
        "targets": {
          "browsers": [
            "chrome >= 61",
            "edge >= 15",
            "firefox >= 52",
            "ie >= 11",
          ]
        }
      }
    ],
    ["@babel/preset-react"],
  ];
  const plugins = [
    "@babel/plugin-proposal-class-properties",
    "babel-plugin-styled-components",
    "react-hot-loader/babel",
    "@babel/plugin-transform-runtime",
    "lodash",
  ];

  return {
    presets,
    plugins
  };
};