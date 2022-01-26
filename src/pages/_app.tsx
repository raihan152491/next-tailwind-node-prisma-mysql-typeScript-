import type { AppProps } from "next/app";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { QueryClientProvider, QueryClient } from "react-query";
import Head from "next/head";

const queryClient = new QueryClient();

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
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />;
			</QueryClientProvider>
		</>
	);
}

export default MyApp;
