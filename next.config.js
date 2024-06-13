const path = require("path");

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]",
          },
        },
      ],
    });

    return config;
  },
  images: {
    domains: [
      "i1-vnexpress.vnecdn.net",
      "res.cloudinary.com",
      "cdnphoto.dantri.com.vn",
      "nhandaoonline.vn",
    ],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/post/:article_id',
  //       destination: '/post/[article_id]',
  //     },
  //   ];
  // },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
