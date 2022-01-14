/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	basePath: "",
	trailingSlash: true,
	async redirects() {
		return [
			{
				source: "/home",
				destination: "/",
				permanent: false,
			},
		];
	},
	images: {
		loader: "imgix",
		path: process.env.NEXT_PUBLIC_MAIN_PATH,
	},
};

module.exports = nextConfig;
