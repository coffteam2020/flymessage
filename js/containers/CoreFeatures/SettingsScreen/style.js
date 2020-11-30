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
