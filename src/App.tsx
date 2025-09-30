import React, { useRef } from 'react';
import { View, Pressable, Image, Text } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
// import { QuickSQLite } from 'react-native-quick-sqlite';
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
		<View style={{ flex: 1, display: "flex" }}>
			<PagerView style={{ flex: 1 }} initialPage={1} ref={pagerRef}>
				<View><SavedLocationsScreen /></View>
				<View><MapScreen /></View>
				<View><SettingsScreen /></View>
			</PagerView>

			{/* <View style={styles.navBar}>
				<Pressable style={styles.navBarButtonSection} onPress={() => goToPage(0)}>
					<Image style={styles.navBarButton} source={require("./assets/navbar/savedLocations.png")} />
				</Pressable>
				<Pressable style={styles.navBarButtonSection} onPress={() => goToPage(1)}>
					<Image style={styles.navBarButton} source={require("./assets/navbar/map.png")} />
				</Pressable>
				<Pressable style={styles.navBarButtonSection} onPress={() => goToPage(2)}>
					<Image style={styles.navBarButton} source={require("./assets/navbar/settings.png")} />
				</Pressable>
			</View> */}

			<MaskedView
				style={ Styles.navBarMask }
				maskElement={
					<View style={ Styles.navBarMaskBackground }>
						<Image source={require("./assets/navbar/circle_navbar_mask.png")} style={{height: 20, width: 20, tintColor: "white"}} />
					</View>
				}
			>
				<View style={ Styles.navBar }>
					<Pressable style={Styles.navBarButtonSection} onPress={() => goToPage(0)}>
						<Image style={Styles.navBarButton} source={require("./assets/navbar/savedLocations.png")} />
					</Pressable>
					<Pressable style={Styles.navBarButtonSection} onPress={() => goToPage(1)}>
						<Image style={Styles.navBarButton} source={require("./assets/navbar/map.png")} />
					</Pressable>
					<Pressable style={Styles.navBarButtonSection} onPress={() => goToPage(2)}>
						<Image style={Styles.navBarButton} source={require("./assets/navbar/settings.png")} />
					</Pressable>
				</View>
			</MaskedView>
		</View>
	);
}