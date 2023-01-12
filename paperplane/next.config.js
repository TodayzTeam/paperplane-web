/** @type {import('next').NextConfig} */
// module.exports = { nextConfig };

// 500 error
// module.exports = (phase, { defaultConfig }) => {
//   const rewrites = () => {
//     return [
//       {
//         source: "/:path*",
//         destination: "http://43.200.226.22:8080/:path*",
//       },
//     ];
//   };

//   return { rewrites };
// };

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://43.200.226.22:8080/:path*",
      },
    ];
  },
};
