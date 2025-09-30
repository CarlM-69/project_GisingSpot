import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
	navBarMask: {
		backgroundColor: "purple",
		width: '95%',
		height: 100,
		bottom: 10,
		alignSelf: "center"
	},

	navBarMaskBackground: {
		width: '100%',
		height: '100%',
		borderRadius: 20,
		borderEndEndRadius: 50,
		borderStartEndRadius: 50
	},

	navBar: {
		padding: 10,
		display: "flex",
		flexDirection: "row",
	  	justifyContent: "space-evenly",
		position: "relative",
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