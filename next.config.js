/** @type {import('next').NextConfig} */
const { withGlobalCss } = require('next-global-css')

const withConfig = withGlobalCss()

const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  }
}

module.exports = nextConfig
