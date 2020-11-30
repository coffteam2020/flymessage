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
		height: ScreenHeight
	},
	img: {
		marginLeft: SPACINGS.avg,
		width: ScreenWidth / 3,
		height: ScreenWidth / 3
	},
	container: {
		marginTop: SPACINGS.xxLarge
	},
	motto: {
		marginBottom: SPACINGS.avg
	},
	mottoEmail: {
		marginBottom: SPACINGS.xxxLarge
	},
	button: {
		marginTop: SPACINGS.xxxLarge
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
