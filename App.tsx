import React, { useRef } from 'react';
import { Button, View, StyleSheet, Pressable, Image } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import PagerView from 'react-native-pager-view';

// Screens
import MapScreen from './src/map/main';
import SavedLocationsScreen from './src/savedLocations/main';
import SettingsScreen from './src/settings/main';

export default function App() {
	const pagerRef = useRef<PagerView>(null);
  
	const goToPage = (pageIndex: number) => {
	  pagerRef.current?.setPage(pageIndex);
	};
  
	return (
		<View style={{ flex: 1, display: "flex" }}>
			<PagerView style={{ flex: 1 }} initialPage={1} ref={pagerRef}>
				<View><SavedLocationsScreen /></View>
				<View><MapScreen /></View>
				<View><SettingsScreen /></View>
			</PagerView>

			<View style={styles.navBar}>
				<Pressable style={styles.navBarButtonSection} onPress={() => goToPage(0)}>
					<Image style={styles.navBarButton} source={require("./assets/navbar/savedLocations.png")} />
				</Pressable>
				<Pressable style={styles.navBarButtonSection} onPress={() => goToPage(1)}>
					<Image style={styles.navBarButton} source={require("./assets/navbar/map.png")} />
				</Pressable>
				<Pressable style={styles.navBarButtonSection} onPress={() => goToPage(2)}>
					<Image style={styles.navBarButton} source={require("./assets/navbar/settings.png")} />
				</Pressable>
			</View>
	  	</View>
	);
}
  
const styles = StyleSheet.create({
	navBar: {
		backgroundColor: "purple",
		borderRadius: 20,
		borderEndEndRadius: 50,
		borderStartEndRadius: 50,
		width: '95%',
		height: 100,
		bottom: 10,
		padding: 10,
		display: "flex",
		flexDirection: "row",
	  	justifyContent: "space-evenly",
		position: "relative",
		alignSelf: "center",
		alignItems: "center"
	},

	navBarButtonSection: {
		width: '33%',
		height: '100%',
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},

	navBarButton: {
		aspectRatio: 1,
		height: 40
	}
});