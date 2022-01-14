import type { AppProps } from "next/app";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				{/* <title>Create Next App</title> */}
				<meta
					name="description"
					content="Developed By Raihan Chowdhury"
				/>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />;
		</>
	);
}

export default MyApp;
