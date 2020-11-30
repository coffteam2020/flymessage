import {StyleSheet} from 'react-native';
import {colors} from '../../../shared/utils/colors/colors';
import {ScreenHeight, ScreenWidth} from '../../../shared/utils/dimension/Divices';
import {SPACINGS, FONTSIZES} from '../../../themes';
import fonts from '../../../shared/utils/fonts/fonts';


export const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	content: {
		padding: SPACINGS.xLarge,
		paddingTop: SPACINGS.small,
		width: ScreenWidth,
		height: ScreenHeight
	},
	fieldContainer: {
		width: ScreenWidth,
		paddingEnd: 20,
		paddingLeft: 20,
		height: ScreenHeight,
	},
	fieldLoginSocial: {
		marginBottom: SPACINGS.large,
		fontFamily: fonts.family.nunito.light,
		textAlign: 'center'
	},
	item: {
		paddingLeft: SPACINGS.xLarge,
		paddingRight: SPACINGS.xLarge,
		borderBottomColor: colors.borderColor,
		flexDirection: 'row',
		alignContent: 'center',
		borderBottomWidth: 0.5,
		justifyContent:'space-between',
		alignItems: 'center'
	},
	textDefaultHeader: {
		marginLeft: 10,
		fontSize: FONTSIZES.avg,
		color: colors.textBlue,
		fontFamily: fonts.family.nunito.bold,
	},
	icon: {
		height: 30,
		width: 30,
		alignContent: 'center',
		justifyContent: 'center'
	}
});


export default {
	styles
};
