import Link from "next/link";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useQuery } from "react-query";
import PostCard from "../../Components/PostCard";
import axios from "axios";
import ProductCard from "../../Components/ProductCard";
import {
	getHomePageCategory,
	getHomePageFilterByCategory,
	getHomePagePost,
	getHomePageProduct,
} from "../../Queries/Demo/queries";
import Filters from "../../Components/Filters";

export default function Demo() {
	// const {
	// 	status,
	// 	data: post,
	// 	error,
	// 	isFetching,
	// 	isSuccess,
	// } = useQuery("post", async () => await getHomePagePost());

	let [selectedCategory, setSelectedCategory] = useState<any[]>([]);

	async function handleProductFiltering({ queryKey }: { queryKey: any }) {
		const [_] = queryKey;
		if (_.length) {
			return await getHomePageFilterByCategory(queryKey[0]);
		}

		return await getHomePageProduct();
	}
	const { status, data, error, isFetching, isSuccess } = useQuery(
		[selectedCategory],
		handleProductFiltering
	);

	const {
		data: category,
		error: categoryError,
		isSuccess: categoryIsSuccess,
	} = useQuery("category", async () => await getHomePageCategory());

	const getSelectedCategories = (categoryId: any) => {
		if (selectedCategory.includes(categoryId)) {
			setSelectedCategory(
				selectedCategory.filter((c) => c != categoryId)
			);
		} else {
			setSelectedCategory([...selectedCategory, categoryId]);
		}
	};

	useEffect(() => {
		//console.log(selectedCategory);
	}, [selectedCategory]);

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

			<div className="mt-8 inline-block md:flex lg:flex lg:mt-0 lg:flex-shrink-0 lg:items-center lg:justify-center">
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

			<div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
				<h2 className="text-2xl text-center font-extrabold tracking-tight text-gray-900">
					Latest Product
				</h2>

				{category && (
					<Filters
						categories={category}
						getSelectedCategories={getSelectedCategories}
					/>
				)}
				<div className="mt-6 justify-between items-center grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
					{data &&
						data.map((product: any) => {
							return (
								<ProductCard key={product.id} data={product} />
							);
						})}
				</div>
			</div>
			{/* <div className="">
				{post &&
					post.map((data: any) => {
						return <PostCard key={data.id} data={data} />;
					})}
			</div> */}
		</div>
	);
}
