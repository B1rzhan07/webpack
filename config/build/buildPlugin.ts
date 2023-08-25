import webpack from 'webpack';
import HTMlWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
export function buildPlugin({ paths }: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMlWebpackPlugin({ template: paths.html }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name]/[contenthash:8].css',
      chunkFilename: 'css/[name]/[contenthash:8].css',
    }),
  ];
}
