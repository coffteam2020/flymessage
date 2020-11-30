import { StyleSheet } from "react-native";
import { colors } from "../../shared/utils/colors/colors";
import { ScreenHeight, ScreenWidth } from "../../shared/utils/dimension/Divices";
import { SPACINGS } from "../../themes";


export const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	content: {
		padding: SPACINGS.xLarge,
		width: ScreenWidth,
		height: ScreenHeight,
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center"
	},
	container: {
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center"
	},
	motto: {
		marginTop: SPACINGS.xxxLarge,
		marginBottom: SPACINGS.avg
	},
	mottoEmail: {
		marginBottom: SPACINGS.xxxLarge,
		textAlign: "center"
	},
	button: {
		marginTop: SPACINGS.xxxLarge,
		width: ScreenWidth * 0.5
	},
	modalContent: {
		backgroundColor: 'white',
		padding: 22,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		borderColor: 'rgba(0, 0, 0, 0.1)',
	},
});

export default {
	styles
};
