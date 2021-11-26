import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { getPokemonsApi, getPokemonDetailsByUrlApi } from '../api/pokemonFetch';
import { useFetch } from '../hooks/useFetch';
import PokemonList from '../components/PokemonList';

export default function Pokedex() {
	const [pokemons, setPokemons] = useState([]);
	const [nextUrl, setNextUrl] = useState(null);

	//const { data, isPending, error } = useFetch(nextUrl);

	useEffect(() => {
		(async () => {
			await loadPokemons();
		})();
	}, []);

	const loadPokemons = async () => {
		try {
			const response = await getPokemonsApi(nextUrl);
			//console.log(response);
			setNextUrl(response.next);

			const pokemonsArray = [];
			for await (const pokemon of response.results) {
				const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);

				pokemonsArray.push({
					id: pokemonDetails.id,
					name: pokemonDetails.name,
					type: pokemonDetails.types[0].type.name,
					order: pokemonDetails.order,
					image: pokemonDetails.sprites.other['official-artwork'].front_default,
				});
			}

			setPokemons([...pokemons, ...pokemonsArray]);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<SafeAreaView>
			<PokemonList pokemons={pokemons} loadPokemons={loadPokemons} isNext={nextUrl} />
			{/* {isPending && <Text>Loading...</Text>}
			{error && <Text>{error}</Text>} */}
		</SafeAreaView>
	);
}
