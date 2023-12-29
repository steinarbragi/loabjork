/** @type {import('next').NextConfig} */
// eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-var-requires
const withNextIntl = require('next-intl/plugin')();

const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
};

module.exports = withNextIntl(nextConfig);
