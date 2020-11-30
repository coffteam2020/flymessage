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
		// padding: SPACINGS.xxLarge,
		width: ScreenWidth,
		height: ScreenHeight
	},
	itemNoti: {
		paddingTop: SPACINGS.large,
		paddingBottom: SPACINGS.large,
		width: ScreenWidth - SPACINGS.xLarge * 2,
	},
	contentNoti: {
		marginLeft: SPACINGS.default,
		paddingEnd: SPACINGS.default,
		textAlign: 'left',
		width: ScreenWidth - SPACINGS.xLarge * 2 - 40
	},
	dot: {
		width: 8, 
		height: 8, 
		marginEnd: SPACINGS.default, 	
		borderRadius: 4
	}
});

export default {
	styles
};
