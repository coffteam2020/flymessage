import {StyleSheet} from 'react-native';
import {ScreenHeight, ScreenWidth} from '../../../shared/utils/dimension/Divices';
import {SPACINGS, SIZES} from '../../../themes';


export const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	content: {
		padding: SPACINGS.xxLarge,
		width: ScreenWidth,
		height: ScreenHeight
	},
	container: {
		marginTop: SPACINGS.sSmall,
		paddingBottom: SPACINGS.large,
	},
	avatar: {
		alignSelf: 'flex-start',
		borderRadius: 20,
		width: ScreenWidth * 0.27,
		height: ScreenWidth * 0.27
	},
	itemNoti: {
		padding: SPACINGS.small,
		paddingTop: SPACINGS.large,
		paddingBottom: SPACINGS.large,
		width: ScreenWidth - SPACINGS.small * 2,
	},
	contentNoti: {
		marginLeft: SPACINGS.default,
		marginEnd: SPACINGS.default,
		paddingEnd: SPACINGS.default,
		justifyContent: 'center',
		alignContent: 'center'
	},
	dot: {
		width: 8,
		height: 8,
		marginEnd: SPACINGS.default,
		borderRadius: 4
	},
	fieldItem: {
		marginBottom: SPACINGS.xxxLarge,
	},
});

export default {
	styles
};
