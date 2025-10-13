import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    trailingSlash: true,
    basePath: '/niab1',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'radzima.net',
                port: '',
                pathname: '/*',
                search: '',
            },
        ],
    },
};

export default nextConfig;
