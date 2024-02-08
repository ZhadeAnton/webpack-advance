import path from "path";
import webpack from "webpack";
import { buildWebpack } from "./config/build/buildWebpack";
import { BuildPaths, EnvVariables } from "./config/build/types/types";

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    output: path.resolve(__dirname, "build"),
    src: path.resolve(__dirname, "src")
  };

  const config: webpack.Configuration = buildWebpack({
    port: env.port || 3000,
    mode: env.mode || "development",
    paths,
    platform: env.platform || "desktop",
    analyzer: env.analyzer || false
  });

  return config;
};
