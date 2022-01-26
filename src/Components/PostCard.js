import React from "react";

export default function PostCard({ data }) {
	const assetUrl = process.env.NEXT_PUBLIC_ASSETS;

	return (
		<div className="max-w-md mx-auto rounded overflow-hidden shadow-lg my-2 content-center  ">
			{data.featured_image && (
				<img
					className="w-full"
					src={assetUrl + data.featured_image.id}
					alt="Sunset in the mountains"
				/>
			)}
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{data.title}</div>
				<p className="text-grey-darker text-base">{data.body}</p>
			</div>
		</div>
	);
}
