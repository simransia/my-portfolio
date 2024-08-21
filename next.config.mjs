/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com"],
  },

  webpack: (config) => {
    // ... other webpack config

    config.module.rules.push({
      test: /\.glb$/,
      type: "asset/resource",
      generator: {
        filename: "static/chunks/[path][name].[hash][ext]",
      },
    });

    // config.module.rules.push({
    //   test: /\.(mp4)$/,
    //   use: {
    //     loader: "file-loader",
    //     options: {
    //       outputPath: "static/videos",
    //       publicPath: "/_next/static/videos",
    //       name: "[name].[hash].[ext]",
    //     },
    //   },
    // });
    config.module.rules.push({
      test: /\.(mp3|wav|ogg)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/audio/",
          outputPath: "static/audio/",
          name: "[name].[hash].[ext]",
        },
      },
    });

    config.resolve.extensions.push(".js", ".mjs");

    config.module.rules.push({
      test: /\.splinecode$/,
      use: {
        loader: "@splinetool/runtime",
        options: {},
      },
    });

    return config;
  },
};

export default nextConfig;
