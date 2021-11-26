import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { getSinglePokemonDetailsApi } from '../api/pokemonFetch';
import Header from '../components/Pokemon/Header';
import Type from '../components/Pokemon/Type';
import Stats from '../components/Pokemon/Stats';
import Abilities from '../components/Pokemon/Abilities';

export default function Pokemon({ navigation, route }) {
	const { params } = route;

	const [singlePokemonData, setSinglePokemonData] = useState(null);

	useEffect(() => {
		(async () => {
			try {
				const response = await getSinglePokemonDetailsApi(params.id);
				setSinglePokemonData(response);
			} catch (error) {
				navigation.goBack();
			}
		})();
	}, [params]);

	return (
		<>
			{singlePokemonData && (
				<ScrollView>
					<Header
						name={singlePokemonData.name}
						order={singlePokemonData.order}
						image={singlePokemonData.sprites.other['official-artwork'].front_default}
						type={singlePokemonData.types[0].type.name}
					/>
					<Type types={singlePokemonData.types} />
					<Stats stats={singlePokemonData.stats} />
					<Abilities abilities={singlePokemonData.abilities} id={params.id} />
				</ScrollView>
			)}
		</>
	);
}
