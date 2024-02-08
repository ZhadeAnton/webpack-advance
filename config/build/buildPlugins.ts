import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, { DefinePlugin } from "webpack";
import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshTypeScript from "@pmmmwh/react-refresh-webpack-plugin";

export function buildPlugins(options: BuildOptions): Configuration["plugins"] {
  const isDev = options.mode === "development";

  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      template: options.paths.html
    }),
    new DefinePlugin({
      __PLATFORM: JSON.stringify(options.platform)
    })
  ];

  if (isDev) {
    return [
      ...plugins,
      new webpack.ProgressPlugin(),
      new ForkTsCheckerWebpackPlugin(),
      new ReactRefreshTypeScript()
    ];
  } else {
    return [
      ...plugins,
      new MiniCssExtractPlugin(),
      options.analyzer && new BundleAnalyzerPlugin()
    ].filter(Boolean);
  }
}
