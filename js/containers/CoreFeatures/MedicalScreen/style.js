import {StyleSheet} from 'react-native';
import {colors} from '../../../shared/utils/colors/colors';
import {ScreenWidth} from '../../../shared/utils/dimension/Divices';
import {SPACINGS, FONTSIZES} from '../../../themes';
import fonts from '../../../shared/utils/fonts/fonts';

export const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: colors.white
	},
	content: {
		paddingHorizontal: SPACINGS.xxLarge,
	},
	topView: {
		position: 'absolute',
		height: 164,
		width: '100%',
		backgroundColor: colors.pinkBackground
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 20,
		marginTop: 20,
		justifyContent: 'center',
	},
	headerContent: {
		marginTop: SPACINGS.xLarge,
		height: 109,
		width: ScreenWidth - SPACINGS.xxLarge * 2,
		justifyContent: 'center',
		shadowColor: 'rgba(34, 47, 85, 0.05)',
		shadowOffset: {
			width: 0,
			height: 18
		},
		shadowRadius: 20,
		shadowOpacity: 1,
		borderRadius: 10
	},
	item: {
		height: 68,
		alignContent: 'center',
		alignItems: 'center',
		borderBottomColor: colors.borderColor,
		borderBottomWidth: 1,
	},
	leftIco: {
		height: 45,
		width: 45,
		borderRadius: 14,
		alignItems: 'center',
		justifyContent: 'center',
		marginEnd: SPACINGS.default
	},
	textDefaultHeader: {
		fontSize: FONTSIZES.avg,
		color: colors.textBlue,
		fontFamily: fonts.family.nunito.bold,
	},
	textDefaultContent: {
		fontSize: FONTSIZES.avg,
		color: colors.textBlue,
		fontFamily: fonts.family.nunito.regular,
	},
	btnTextStyle: {
		fontSize: FONTSIZES.avg,
		color: colors.whiteTransparent,
		fontFamily: fonts.family.nunito.bold,
	}
});

export default {
	styles
};
