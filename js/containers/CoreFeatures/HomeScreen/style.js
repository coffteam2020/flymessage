import {StyleSheet} from 'react-native';
import {colors} from '../../../shared/utils/colors/colors';
import {ScreenHeight, ScreenWidth, safeTopHeight} from '../../../shared/utils/dimension/Divices';
import {RADIUS, SPACINGS} from '../../../themes';

export const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: colors.pinkBackground,
		paddingTop: SPACINGS.large,
		paddingBottom: 0,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: safeTopHeight + SPACINGS.default,
		marginBottom: SPACINGS.xxLarge,
		paddingHorizontal: SPACINGS.large,
	},
	menuIcon: {},
	messageIcon: {},
	topView: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginBottom: SPACINGS.large
	},
	birdIcon: {
		position: 'absolute',
		top: 35,
		right: 30,
	},
	pencilIcon: {
		position: 'absolute',
		left: 0,
		bottom: 12,
	},
	paper1: {
		position: 'absolute',
		left: 45,
		bottom: 10,
	},
	paper2: {
		position: 'absolute',
		left: 116,
		bottom: 10,
	},
	paper3: {
		position: 'absolute',
		right: 51,
		bottom: 10,
	},
	bottomView: {
		width: '100%',
		height: 502 - 36,
		marginTop: SPACINGS.xLarge,
		marginBottom: SPACINGS.default
	},
	tvIcon: {
		marginLeft: 26,
	},
	radioIcon: {
		marginLeft: 12,
	},
	radioIconControl: {
		marginLeft: 4,
		marginTop: 16,
		position: 'absolute',
		zIndex: 5
	},
	rectangle: {
		marginLeft: 20,
		alignSelf: 'flex-start',
		zIndex: -1000
	},
	closetIcon: {
		marginLeft: 0,
	},
	ladyIcon: {
		position: 'absolute',
		bottom: 96,
		alignSelf: 'center',
		zIndex: 10
	},
	dogIcon: {
		position: 'absolute',
		alignSelf: 'center',
		bottom: 29,
		zIndex: 1000
	},
	treeIcon: {
		position: 'absolute',
		bottom: 121,
		right: 0,
		zIndex: 0
	},
	floorIcon: {
		width: '100%',
		height: '100%',
		zIndex: -2
	},
	multiLinesIcon: {
		position: 'absolute',
		bottom: 0
	},
	task: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignContent: 'center',
		alignItems: 'center',
		marginTop: SPACINGS.avg,
		paddingEnd: SPACINGS.default,
		paddingLeft: SPACINGS.default,
		marginBottom: SPACINGS.xxxLarge
	},
	progress: {
		height: ScreenWidth / 4
	},
	container: {
		borderRadius: RADIUS.backIco,
		width: ScreenWidth * 0.8,
		height: ScreenHeight * 0.5,
		padding: SPACINGS.default,
		backgroundColor: colors.white,
		alignSelf: 'center',
	},
	emotion: {
		width: ScreenWidth * 0.55
	}
});

export default {
	styles
};
