import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { getAbilityPokemonDetailsApi } from '../../api/pokemonFetch';

export default function AbilityDescription({ url }) {
	const [ability, setAbility] = useState([]);

	//console.log(ability);

	useEffect(() => {
		(async () => {
			try {
				const response = await getAbilityPokemonDetailsApi(url);
				//console.log(response);
				if (response.effect_entries.language.name === 'en') {
					console.log(object);
				}
				//const ab = response.filter((a) => a.effect_entries.language.name === 'en');
				//console.log(ab);
			} catch (error) {
				throw error;
			}
		})();
	}, [url]);

	return (
		<View>
			<Text>AbilityDescription</Text>
		</View>
	);
}
