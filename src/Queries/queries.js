import fetchData from "../Helper/fetchData";

export const getHomePagePost = async () => {
	const data = await fetchData(
		`
        query HomepagePost{
            post{
                id
                title
                slug
                featured_image{
                    id
                }
                body
            }
        }

        `
	);

	return data.data.post;
};
