/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['react-cytoscapejs']);

const nextConfig = {
  reactStrictMode: true,
}


module.exports = withTM(nextConfig)