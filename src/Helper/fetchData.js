const graphQlApi = process.env.NEXT_PUBLIC_GRAPHQL;

const fetchData = async (query) => {
	const headers = { "content-type": "application/json" };

	const res = await fetch(graphQlApi, {
		method: "POST",
		headers,
		body: JSON.stringify({
			query,
		}),
	});

	const json = await res.json();

	if (json.errors) {
		throw new Error(json.errors);
	}

	return json;
};

export default fetchData;
