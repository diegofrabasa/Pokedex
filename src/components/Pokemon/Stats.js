import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { capitalize } from 'lodash';

export default function Stats({ stats }) {
	const barWidth = (number) => {
		const color = number > 49 ? '#00ac17' : '#f00';

		return {
			backgroundColor: color,
			width: `${number}%`,
		};
	};

	return (
		<View style={styles.content}>
			<Text style={styles.contentTitle}>Info:</Text>
			{stats &&
				stats.map((item, index) => (
					<View key={index} style={styles.block}>
						<View style={styles.blockTitle}>
							<Text style={styles.statTitle}>{capitalize(item.stat.name)}</Text>
						</View>
						<View style={styles.blockStat}>
							<Text style={styles.blockStatNumber}>{item.base_stat}</Text>
							<View style={styles.blockStatBar}>
								<View style={[styles.bar, barWidth(item.base_stat)]}></View>
							</View>
						</View>
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
	blockTitle: {
		width: '30%',
	},
	statTitle: {
		fontSize: 12,
		color: '#6b6b6b',
	},
	blockStat: {
		width: '70%',
		flexDirection: 'row',
		alignItems: 'center',
	},
	blockStatNumber: {
		width: '12%',
		fontSize: 12,
	},
	blockStatBar: {
		backgroundColor: '#bebebe',
		width: '88%',
		height: 5,
		borderRadius: 20,
		overflow: 'hidden',
	},
	bar: {
		height: 5,
		borderRadius: 20,
	},
});
