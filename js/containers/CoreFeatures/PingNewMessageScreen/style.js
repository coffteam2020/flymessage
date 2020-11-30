import {StyleSheet} from 'react-native';
import {colors} from '../../../shared/utils/colors/colors';
import {ScreenHeight, ScreenWidth} from '../../../shared/utils/dimension/Divices';

export const styles = StyleSheet.create({
	itemBtn: {
		backgroundColor: colors.textPuple,
		borderColor: colors.textPuple,
		height: ScreenHeight * 0.08,
		width: ScreenHeight * 0.08,
		borderRadius: ScreenHeight * 0.08,
		alignItems: 'center',
		alignContent: 'center',
		justifyContent: 'center',
		marginRight: 10
	},
	imgBackground: {
		height: ScreenHeight * 0.61,
		borderRadius: 18,
		width: ScreenWidth * 0.8,
		zIndex: 0,
		marginTop: 30
	},
	textMess: {
		paddingStart: 15,
		paddingEnd: 20,
		justifyContent: 'space-around',
	},
	mess: {
		textAlignVertical: 'top',
		height: ScreenHeight / 2 - 30,
		width: ScreenWidth - 80,
		marginLeft: 30
	},
	itemGroup: {
		left: '25%',
		width: '50%',
		backgroundColor: 'white'
	},
	itemGroupAudio: {
		width: '100%',
		borderColor: colors.gray_bg,
		borderWidth: 0.5,
		paddingEnd: 20,
		paddingLeft: 20,
		borderRadius: 20,
		paddingBottom: 10
	},
	closeIcon: {
		left: 90,
		top: 10,
		zIndex: 10
	},
	iconPlayPause: {
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 1
	},
	item: {
		width: ScreenHeight * 0.15,
		height: ScreenHeight * 0.15,
		borderColor: colors.gray_less,
		borderWidth: 0.5
	},

	viewItem: {
		top: ScreenHeight * 0.5,
		position: 'absolute',
		zIndex: 1000,
		elevation: 1000,
	},
	optionItem: {
		zIndex: 0,
		flexDirection: 'row',
		marginTop: 20,
		justifyContent: 'center',
		height: ScreenHeight * 0.2,
	}
});

export default {
	styles
};
