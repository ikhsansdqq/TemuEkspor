/** @type {import('next').NextConfig} */
const nextConfig = {
    fastRefresh: true,
    concurrentFeatures: true,
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.ebayimg.com",
                port: "",
                pathname: "/images/g/"
            }
        ]
    }
}

export default nextConfig;
