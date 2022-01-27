import Link from "next/link";
import React from "react";

export default function ProductCard({ data }: { data: any }) {
	const assetUrl = process.env.NEXT_PUBLIC_ASSETS;

	return (
		<div className="group relative">
			<div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
				{data.productImage && (
					<Link href="https://youtube.com/">
						<img
							src={`${assetUrl}${data.productImage.id}`}
							alt="Front of men Basic Tee in black."
							className="w-full h-full object-center object-cover lg:w-full lg:h-full"
						/>
					</Link>
				)}
			</div>
			<div className="mt-4 flex justify-between">
				<div>
					<h3 className="text-sm font-bold text-gray-700">
						<Link href="https://nextjs.org/">
							<a target="_blank">
								<span
									aria-hidden="true"
									className="absolute inset-0"
								></span>
								{data.productName}
							</a>
						</Link>
					</h3>
					{data.productCategories[0] && (
						<p className="mt-1 text-sm text-gray-500">
							{
								data.productCategories[0].categories_id
									.categoryName
							}
						</p>
					)}
				</div>
				<p className="text-sm font-medium text-gray-900">
					${data.price}
				</p>
			</div>
		</div>
	);
}
