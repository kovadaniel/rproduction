import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
  // order of these rules matters, thus we use variables!
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [
    typescriptLoader,
  ];
};
