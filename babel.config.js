module.exports = {
  "plugins": [
    // "react-hot-loader/babel",
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    "react-refresh/babel",
  ],
  "presets": [
    ["@babel/preset-env", { targets: { node: true } } ],
    "@babel/preset-typescript",
    "@babel/preset-react",
  ],
};
