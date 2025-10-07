import React, { useRef } from 'react';
import { View, Pressable, Image } from 'react-native';
import PagerView from 'react-native-pager-view';
import { Styles } from './App.styles';

// Screens
import MapScreen from './map/main';
import SavedLocationsScreen from './savedLocations/main';
import SettingsScreen from './settings/main';

export default function App() {
	const pagerRef = useRef<PagerView>(null);

	const goToPage = (pageIndex: number) => {
	  pagerRef.current?.setPage(pageIndex);
	};
  
	return (
		<View style={Styles.body}>
			<PagerView style={{ flex: 1 }} initialPage={1} ref={pagerRef}>
				<View><SavedLocationsScreen /></View>
				<View><MapScreen /></View>
				<View><SettingsScreen /></View>
			</PagerView>

			<View style={Styles.navBar}>
				<View style={Styles.lineIndicator} />
				<Pressable style={Styles.navBarButtonSection} onPress={() => goToPage(0)}>
					<Image style={Styles.navBarButton} source={require("../assets/navbar/savedLocations.png")} />
				</Pressable>
				<Pressable style={Styles.navBarButtonSection} onPress={() => goToPage(1)}>
					<Image style={Styles.navBarButton} source={require("../assets/navbar/map.png")} />
				</Pressable>
				<Pressable style={Styles.navBarButtonSection} onPress={() => goToPage(2)}>
					<Image style={Styles.navBarButton} source={require("../assets/navbar/settings.png")} />
				</Pressable>
			</View>
		</View>
	);
}