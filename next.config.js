/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_SECRET_KEY: process.env.GOOGLE_SECRET_KEY,
        NEXT_PUBLIC_GRAFBASE_API_URL: process.env.NEXT_PUBLIC_GRAFBASE_API_URL,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        NEXT_PUBLIC_GRAFBASE_API_KEY: process.env.NEXT_PUBLIC_GRAFBASE_API_KEY,
        CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
        CLOUDINARY_KEY: process.env.CLOUDINARY_KEY,
        CLOUDINARY_SECRET: process.env.CLOUDINARY_SECRET
    },
    images: {
        domains: ["lh3.googleusercontent.com", "res.cloudinary.com"]
    }
}

module.exports = nextConfig
