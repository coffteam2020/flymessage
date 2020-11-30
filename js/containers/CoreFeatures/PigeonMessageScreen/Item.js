import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {colors} from '../../../shared/utils/colors/colors';
import Constant from '../../../shared/utils/constant/Constant';
import fonts from '../../../shared/utils/fonts/fonts';
import {SPACINGS} from '../../../themes';
import {containerStyle} from '../../../themes/styles';
import {TimeHelper} from '../../../shared/utils/helper/timeHelper';
import icons from '../../../shared/utils/icons/icons';
import FastImage from 'react-native-fast-image';

const Item = ({item, onItemPress, index, isRead}) => {
	return (
		<Animatable.View animation="slideInLeft" delay={index * 200}>
			<TouchableOpacity
				onPress={() => onItemPress && onItemPress(item)}
				style={styles.container}
				key={index}>
				{/* {isRead ? null : <View style={{width: 5, height: 5, borderRadius: 2.5, backgroundColor: 'red', marginEnd: 10}}></View>} */}
				<View style={styles.avatarContainer}>
					<FastImage
						cache={FastImage.cacheControl.cacheOnly}
						key={item?.userId}
						source={{uri: item?.fromUserAvatar || Constant.MOCKING_DATA.PLACE_HOLDER}}
						style={styles.avatar} />
				</View>
				<View style={styles.nameContainer}>
					<Text style={[containerStyle.textDefault, styles.name]}>
						{item?.fromUserName || ''}
					</Text>
					<Text numberOfLines={1} style={[containerStyle.textDefaultNormal, isRead && isRead ? styles.readMsg : styles.unreadMsg]}>
						{TimeHelper.convertTimeDDMMYY(item?.createdOn)}
					</Text>
				</View>
				<View style={{alignContent: 'flex-end'}}>
					{icons.IC_PINGEION_MSG}
				</View>
				<Image style={styles.lineView} />
			</TouchableOpacity>
		</Animatable.View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignContent: 'center',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: SPACINGS.xxLarge,
		width: '100%',
		height: 100,
		paddingVertical: 7.5,
		backgroundColor: colors.whiteTransparent
	},
	nameContainer: {
		width: '50%',
		marginLeft: 16
	},
	avatarContainer: {
		borderRadius: 58 / 2,
		width: 58,
		height: 58,
		alignItems: 'center',
		justifyContent: 'center'
	},
	avatar: {
		borderRadius: 58 / 2,
		width: 58,
		height: 58,
	},
	readMsg: {
		paddingTop: 5,
		color: colors.black_lessy,
	},
	unreadMsg: {
		paddingTop: 5,
		color: colors.textBlue,
	},
	name: {
		color: colors.textBlue,
	},
	timeText: {
		color: colors.textPuple,
		fontSize: 12,
		fontFamily: fonts.family.nunito.regular,
		position: 'absolute',
		right: SPACINGS.xxLarge
	},
	lineView: {
		position: 'absolute',
		bottom: 0,
		height: 2,
		marginLeft: '6%',
		width: '100%',
	},
	dot: {
		position: 'absolute',
		left: SPACINGS.default,
	}
});

export default Item;