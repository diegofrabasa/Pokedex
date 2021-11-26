import { useEffect, useState } from 'react';

export const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			setIsPending(true);

			try {
				const mainEndpoint = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
				const response = await fetch(url || mainEndpoint);

				if (!response.ok) {
					throw new Error(response.statusText);
				}

				const result = await response.json();

				setIsPending(false);
				setData(result);
				setError(null);
			} catch (error) {
				setIsPending(false);
				setError(error.message);
				throw error;
			}
		};

		fetchData();
	}, [url]);

	return { data, isPending, error };
};
