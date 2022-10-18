const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

// =====================================================================

const entryPoint = "./src/index.jsx";
const htmlTemplate = "./src/index.html";

const targetFolder = "prod";
const targetImagesFolder = "assets";

// =====================================================================

const isDevMode = process.env.NODE_ENV === "development";
const isProdMode = !isDevMode;

function fileName(ext = "[ext]") {
  return isDevMode ? `[name]${ext}` : `[name]-[contenthash:10]${ext}`;
}

function generateSourceMap() {
  return isDevMode ? "inline-source-map" : false;
}

function optimizationOptions(prodMode) {
  return {
    minimize: prodMode,
    minimizer: [
      "...",
      new CssMinimizerWebpackPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.squooshMinify,
        },
      }),
    ],
  };
}

function cssLoaders(moreLoaders = null) {
  const loaders = [
    MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {
        modules: {
          auto: /\.module\.\w+$/i,
          localIdentName: isDevMode ? "[name]__[local]" : "[hash:base64]",
        },
      },
    },
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: ["postcss-preset-env"],
        },
      },
    },
  ];

  if (moreLoaders) loaders.push(moreLoaders);
  return loaders;
}

function jsLoaders(auxLoader = null) {
  const opts = {
    loader: "esbuild-loader",
    options: { target: "es2015" },
  };

  if (auxLoader) opts.options.loader = auxLoader;
  return opts;
}

function devServerOptions() {
  return {
    static: { directory: path.resolve(__dirname, targetFolder), watch: true },
    client: { logging: "error", overlay: false },
    open: { app: { name: "Google Chrome" } },
    historyApiFallback: true,
  };
}

// =====================================================================

module.exports = {
  entry: { bundle: entryPoint },
  output: {
    filename: `script/${fileName(".js")}`,
    path: path.resolve(__dirname, targetFolder),
    clean: isProdMode,
  },

  devtool: generateSourceMap(),
  optimization: optimizationOptions(isProdMode),
  devServer: devServerOptions(),

  resolve: { extensions: [".js", ".jsx"] },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders(),
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: jsLoaders("jsx"),
      },
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      {
        test: /\.scss$/,
        use: cssLoaders("sass-loader"),
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(webp|jpg|jpeg|png|svg|ico)$/,
        type: "asset/resource",
        generator: { filename: `${targetImagesFolder}/${fileName()}` },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({ template: htmlTemplate }),
    new MiniCssExtractPlugin({ filename: `css/${fileName(".css")}` }),
  ],
};
