import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Abilities({ abilities }) {
	return (
		<View style={styles.content}>
			<Text style={styles.contentTitle}>Abilities:</Text>
			{abilities.map((item, index) => (
				<View key={index} style={styles.block}>
					<Text>{item.ability.name}</Text>
				</View>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	content: {
		paddingHorizontal: 20,
		marginTop: 40,
		marginBottom: 40,
	},
	contentTitle: {
		fontWeight: 'bold',
		fontSize: 20,
		paddingBottom: 5,
	},
	block: {
		flexDirection: 'row',
		paddingVertical: 5,
	},
});
