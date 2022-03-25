/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

const nextConfig = {
  images: { domains: ["s3.amazonaws.com", "fisk.s3.us-east-2.amazonaws.com"] },
};

module.exports = withPlugins([[withImages]], nextConfig);
