module.exports = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    IMAGE_URL: process.env.IMAGE_URL
  },
  images: {
    domains: ["localhost:8000/images"],
  },
};
