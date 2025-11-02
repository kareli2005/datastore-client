import type { NextConfig } from "next";

const serverUrl =
    process.env.SERVER_SCHEME ||
    "http://" + process.env.SERVER_DOMAIN ||
    "localhost:8000";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: serverUrl,
            },
        ],
    },
};

export default nextConfig;
