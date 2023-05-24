/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  images:{
    remotePatterns: [
        {
            hostname: 'picsum.photos',
            protocol: 'https',
        },
        {
            hostname: 'img.dummyapi.io',
            protocol: 'https',
        },
        {
            hostname: 'mahesadev.com',
            protocol: 'https',
        }
    ]
  }
}
