import { StyleSheet, Dimensions, Platform } from 'react-native';
import { ScreenHeight, ScreenWidth } from '../../../shared/utils/dimension/Divices';
import fonts from '../../../shared/utils/fonts/fonts';
import { colors } from '../../../shared/utils/colors/colors';

let dimensions = {                                //get dimensions of the device to use in view styles
	width: Dimensions.get('window').width,
	height: Dimensions.get('window').height,
};

export default StyleSheet.create({
	max: {
		flex: 1,
	},
	buttonHolder: {
		height: 100,
		alignItems: 'center',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
	button: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		backgroundColor: '#0093E9',
		borderRadius: 25,
	},
	buttonText: {
		color: '#fff',
	},
	fullView: {
		width: dimensions.width,
		height: dimensions.height - 100,
	},
	halfViewRow: {
		flex: 1 / 2,
		flexDirection: 'row',
	},
	full: {
		flex: 1,
	},
	half: {
		flex: 1 / 2,
	},
	localVideoStyle: {
		width: ScreenWidth,
		height: ScreenHeight,
		position: 'absolute',
		top: 0,
		right: 0,
		zIndex: -1,
		borderRadius: 10,
	},
	noUserText: {
		paddingHorizontal: 10,
		paddingVertical: 5,
		color: '#0093E9',
	},
	message: {
		position: 'absolute',
		bottom: 100,
		left: 0,
		borderRadius: 10,
		height: Platform.OS === 'ios' ? ScreenHeight / 2 : ScreenHeight / 3 + 20,
	},
	input: {
		position: 'absolute',
		bottom: 20,
		width: '80%',
		left: '7%',
		flexDirection: 'row',
		zIndex: 30,
		alignItems: 'center'
	},
	inputChat: {
		marginRight: 10,
		height: 52,
		width: ScreenWidth * 0.55,
		borderRadius: 30,
		backgroundColor: 'rgba(255,255,255,0.4)',
		paddingLeft: 10,
		paddingEnd: 10,
		fontFamily: fonts.family.nunito.bold,
		fontSize: 20,
		color: colors.whiteBackground
	},
	msgContainer: {
		flexWrap: 'wrap',
		alignSelf: 'baseline',
		flexDirection: 'row',
		marginBottom: 10,
		marginLeft: 10,
		marginEnd: 5,
		backgroundColor: 'rgba(0,0,0,0.175)',
		borderRadius: 20,
		zIndex: 10,
		padding: 10,
		paddingBottom: 0,
		paddingTop: 5
	},
	avtChat: {
		marginTop: 2,
		width: 30,
		height: 30,
		borderRadius: 15,
		borderWidth: 1,
		borderColor: 'white'
	},
	close: {
		zIndex: 120,
		borderRadius: 15,
		width: 30,
		height: 30,
		justifyContent: 'center',
		alignSelf: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.2)',
		position: 'absolute',
		right: 20,
		top: 60,
		flexDirection: 'row'
	},
	participiants: {
		borderRadius: 15,
		paddingEnd: 10,
		paddingLeft: 10,
		justifyContent: 'center',
		alignSelf: 'center',
		backgroundColor: 'rgba(0,0,0,0.2)',
		position: 'absolute',
		right: 60,
		top: 60,
		zIndex: 10,
		flexDirection: 'row'
	},
	header: {
		borderTopLeftRadius: 20,
		alignContent: 'center',
		borderBottomLeftRadius: 20,
		position: 'absolute',
		width: '100%',
		left: '7%',
		top: Platform.OS === 'android' ? 30 : 50,
		flexDirection: 'row'
	},
	noVol: {
		borderTopLeftRadius: 20,
		alignContent: 'center',
		borderBottomLeftRadius: 20,
		position: 'absolute',
		width: 40,
		marginRight: 5,
		height: 40,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
		left: '10%',
		top: 95,
		backgroundColor: 'rgba(0,0,0,0.2)',
		padding: 5,
		zIndex: 2,
		flexDirection: 'row'
	},
	noVideo: {
		backgroundColor: 'rgba(0,0,0,0.2)',
		padding: 5,
		marginRight: 5,
		borderTopRightRadius: 20,
		alignContent: 'center',
		borderBottomRightRadius: 20,
		position: 'absolute',
		width: 40,
		height: 40,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
		left: '22%',
		top: 95,
		zIndex: 12,
		flexDirection: 'row'
	},
	avatar: {
		borderColor: 'white',
		borderWidth: 1,
		width: 40,
		height: 40,
		borderRadius: 20
	}
});