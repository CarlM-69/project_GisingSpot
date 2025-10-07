import { StyleSheet } from 'react-native';

export const Theme = {
	themeColor: "#991d1d",
	background: "#f9f9f9ff",
	navBarBackground: "#ffffff",
}

export const Styles = StyleSheet.create({
	body: {
		display: "flex",
		flex: 1,
		width: "100%",
		height: "100%",
		backgroundColor: Theme.background
	},

	navBar: {
		backgroundColor: "white",
		borderRadius: 12,
		width: '85%',
		height: 85,
		padding: 10,
		display: "flex",
		flexDirection: "row",
	  	justifyContent: "space-evenly",
		position: "relative",
		alignItems: "center",
		alignSelf: "center",
		bottom: 16,
		shadowColor: "#000000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity:  0.17,
		shadowRadius: 2.54,
		elevation: 3
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
		height: 30
	},

	navBarButtonActive: {
		tintColor: Theme.themeColor
	},

	lineIndicator: {
		position: "absolute",
		bottom: 10,
		backgroundColor: Theme.themeColor,
		width: 40,
		height: 5,
		borderRadius: 20
	}
});