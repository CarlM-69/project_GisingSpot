import React, { useRef } from 'react';
import { Button, View, StyleSheet, Pressable, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
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
		<SafeAreaProvider style={{ flex: 1 }}>
			<PagerView style={{ flex: 1 }} initialPage={1} ref={pagerRef}>
				<View><SavedLocationsScreen /></View>
				<View><MapScreen /></View>
				<View><SettingsScreen /></View>
			</PagerView>
  
			<View style={styles.navBar}>
				<Pressable onPress={() => goToPage(0)}>
					<Image style={styles.navBarButton} source={require("./assets/navbar/map.png")} />
				</Pressable>
				<Pressable onPress={() => goToPage(1)}>
					<Image style={styles.navBarButton} source={require("./assets/navbar/map.png")} />
				</Pressable>
				<Pressable onPress={() => goToPage(2)}>
					<Image style={styles.navBarButton} source={require("./assets/navbar/settings.png")} />
				</Pressable>
			</View>
	  	</SafeAreaProvider>
	);
}
  
const styles = StyleSheet.create({
	navBar: {
		borderTopStartRadius: 20,
		borderTopEndRadius: 20,
		backgroundColor: 'red',
		width: '100%',
		height: 100,
		flexDirection: "row",
	  	justifyContent: "space-evenly",
	  	padding: 10,
		position: "relative",
		display: "flex",
		alignItems: "center"
	},

	navBarButton: {
		top: -5,
		aspectRatio: 1,
		height: 50
	}
});