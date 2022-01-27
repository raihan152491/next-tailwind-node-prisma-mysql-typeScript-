import fetchData from "../../Helper/fetchData";
import {
	filterByCategory,
	getCategoryQuery,
	getPostQuery,
	getProductQuery,
} from "./HomePageQueries";

export const getHomePagePost = async () => {
	const data = await fetchData(getPostQuery, { variables: {} });

	return data.data.post;
};

export const getHomePageProduct = async () => {
	const data = await fetchData(getProductQuery, { variables: {} });

	return data.data.product;
};
export const getHomePageCategory = async () => {
	const data = await fetchData(getCategoryQuery, { variables: {} });

	return data.data.categories;
};

export const getHomePageFilterByCategory = async (category) => {
	const data = await fetchData(
		filterByCategory,

		{ variables: { category } }
	);

	return data.data.product;
};
