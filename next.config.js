/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {

    STRIPE_API_KEY: process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY,


},
}

module.exports = nextConfig
