import Link from "next/link";
import React from "react";

export default function Demo() {
	return (
		<div>
			<div className="">
				<div className="bg-gray-50  max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
					<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
						<span className="block">Ready to dive in?</span>
						<span className="block text-indigo-600">
							Here is your starter project .
						</span>
					</h2>
				</div>
			</div>

			<div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 lg:items-center lg:justify-center">
				<div className="inline-flex rounded-md shadow m-1">
					<Link href="https://nextjs.org/">
						<a
							target="_blank"
							className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
						>
							Next Js
						</a>
					</Link>
				</div>
				<div className="inline-flex rounded-md shadow m-1">
					<Link href="https://www.typescriptlang.org/">
						<a
							target="_blank"
							className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
						>
							TypeScript
						</a>
					</Link>
				</div>
				<div className="inline-flex rounded-md shadow m-1">
					<Link href="https://nextjs.org/">
						<a
							target="_blank"
							className={
								"inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
							}
						>
							Tailwind
						</a>
					</Link>
				</div>

				<div className="inline-flex rounded-md shadow m-1">
					<Link href="https://nextjs.org/">
						<a
							target="_blank"
							className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
						>
							Express & Prisma
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
