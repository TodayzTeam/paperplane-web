/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };
// const rewrites = async () => {
//   return [
//     {
//       source: "/api/:path*",
//       destination: "http://43.200.226.22:8080/:path*",
//     },
//   ];
// };
// module.exports = { nextConfig, rewrites };
module.exports = (phase, { defaultConfig }) => {
  const rewrites = () => {
    return [
      {
        source: "/:path*",
        destination: "http://43.200.226.22:8080/:path*",
      },
    ];
  };

  return { rewrites };
};
