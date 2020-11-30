import {StyleSheet} from 'react-native';
import {colors} from '../../../shared/utils/colors/colors';
import {ScreenHeight, ScreenWidth} from '../../../shared/utils/dimension/Divices';
import {SPACINGS, FONTSIZES, SIZES} from '../../../themes';
import fonts from '../../../shared/utils/fonts/fonts';


export const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	content: {
		justifyContent: 'center',
		alignItems: 'center',
		width: ScreenWidth,
		height: ScreenHeight / 5,
	},
	motto: {
		fontSize: FONTSIZES.avg,
		fontFamily: fonts.family.nunito.semiBold,
		marginTop: SPACINGS.avg
	},
	fieldContainer: {
		alignItems: 'center',
		width: ScreenWidth,
		height: ScreenHeight / 2 - SPACINGS.xxLarge,
	},
	fieldItem: {
		marginBottom: SPACINGS.xxxLarge,
	},
	fieldForget: {
		marginTop: SPACINGS.xxxLarge,
		fontFamily: fonts.family.nunito.regular
	},
	fieldLoginSocial: {
		color: colors.whiteBackground,
		marginBottom: SPACINGS.large,
		fontFamily: fonts.family.nunito.light
	},
	footerContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		width: ScreenWidth,
		height: ScreenHeight / 4 ,
	},
	socialContainer: {
		margin: SPACINGS.default,
		width: ScreenWidth,
		paddingHorizontal: 10
	},
	social: {
		marginEnd: 5,
		height: 50, 
		width: 50
	},
	signUp: {
		alignItems: 'center',
		justifyContent: 'center',
		alignContent: 'center'
	},
	signUpTitle: {
		color: colors.blue_dodger,
		fontFamily: fonts.family.nunito.bold,
		fontSize: FONTSIZES.default,
		marginTop: SPACINGS.avg,
	},
	signUpMotto: {
		fontFamily: fonts.family.nunito.light,
		fontSize: FONTSIZES.default,
		marginTop: SPACINGS.avg,
		color: colors.whiteBackground
	},
	img: {
		marginLeft: SPACINGS.avg,
		width: ScreenWidth / 5,
		height: ScreenWidth / 5
	}
});

export default {
	styles
};
