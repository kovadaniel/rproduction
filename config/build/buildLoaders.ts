import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
  // if we use js and jsx instread of ts and tsx, we would need babel-loader

  // order of these rules matters, thus we use variables!
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // "style-loader" creates `style` nodes from JS strings
      "style-loader",
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  return [
    typescriptLoader,
    cssLoader,
  ];
};
