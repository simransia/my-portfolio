/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // ... other webpack config

    config.module.rules.push({
      test: /\.glb$/,
      type: "asset/resource",
      generator: {
        filename: "static/chunks/[path][name].[hash][ext]",
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
