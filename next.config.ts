import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/shop/kenya-lot-01", destination: "/shop/kiambu-washed-01", permanent: true },
      { source: "/shop/burundi-lot-01", destination: "/shop/kayanza-washed-01", permanent: true },
      { source: "/shop/ethiopia-lot-01", destination: "/shop/sidama-washed-01", permanent: true },
      { source: "/shop/ethiopia-lot-02", destination: "/shop/guji-natural-02", permanent: true },
      { source: "/journal/canopy-and-landrace", destination: "/journal/beyond-heirloom", permanent: true },
    ];
  },
};

export default nextConfig;
