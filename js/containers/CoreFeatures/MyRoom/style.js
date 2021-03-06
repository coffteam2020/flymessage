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
	img: {
		marginLeft: SPACINGS.avg,
		width: ScreenWidth / 3,
		height: ScreenWidth / 3
	},
	fieldItem: {
		marginBottom: SPACINGS.xxxLarge,
	},
	signUp: {
		alignItems: 'center',
		justifyContent: 'center',
		alignContent: 'center'
	},
	signUpTitle: {
		color: colors.blue_dodger,
		fontFamily: fonts.family.nunito.regular,
		fontSize: FONTSIZES.default,
		marginTop: SPACINGS.avg,
	},
	signUpTitleDefault: {
		marginTop: SPACINGS.avg,
	},
	signUpMotto: {
		fontFamily: fonts.family.nunito.semiBold,
		fontSize: FONTSIZES.default,
		marginTop: SPACINGS.avg,
	},
	footerContainer: {
		alignItems: 'center',
		width: ScreenWidth - SPACINGS.xxLarge * 2,
		height: ScreenHeight / 4 + SPACINGS.xxLarge,
		marginTop: SPACINGS.avg
	},
	socialContainer: {
		margin: SPACINGS.default,
		width: ScreenWidth - SPACINGS.xLarge * 2,
	},
	fieldItemTop: {
		marginTop: SPACINGS.xLarge,
	},
	container: {
		marginTop: SPACINGS.xxLarge
	},
	underlineStyleBase: {
		width: 40,
		height: 45,
		borderWidth: 0,
		fontSize: 20,
		color: colors.black,
		borderBottomWidth: 2,
		borderColor: '#E8006F',
	},
	underlineStyleHighLighted: {
		borderColor: '#E8006F',
	},
	motto: {
		marginBottom: SPACINGS.xxxLarge,
		fontFamily: fonts.family.nunito.bold,
		textAlign: 'center',
	},
	mottoEmail: {
		marginBottom: SPACINGS.xxxLarge,
		fontSize: FONTSIZES.default,
		fontFamily: fonts.family.nunito.regular
	},
	login: {
		color: colors.blue_dodger
	},
	button: {
		marginTop: SPACINGS.large
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
