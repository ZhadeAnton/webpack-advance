import path from "path";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/types";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    static: {
      directory: path.join(__dirname, "public")
    },
    compress: true,
    port: options.port || 3000,
    historyApiFallback: true,
    hot: true
  };
}
