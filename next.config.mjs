const nextConfig = {
    images: {
        loader: "custom",
        loaderFile: "./imageLoader.js", // Custom loader file
        },
    generateEtags: false,
    };
    
export default nextConfig;
