
import React, { useEffect, useState } from 'react';
import { StatusBar, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { styles as style } from './style';
import { withTheme } from 'react-native-paper';
import TextNormal from '../../../shared/components/Text/TextNormal';
import { containerStyle } from '../../../themes/styles';
import Loading from '../../../shared/components/Loading';
import { NavigationService } from '../../../navigation';
import Back from '../../../shared/components/Icons/Back';
import { colors } from '../../../shared/utils/colors/colors';
import { ScreenNames } from '../../../route/ScreenNames';
import { firebase } from '@react-native-firebase/database';
import TrackPlayer from 'react-native-track-player';
import TextInputFlat from '../../../shared/components/TextInput/TextInputFlat';
import { ToastHelper } from '../../../shared/components/ToastHelper';
import GradientButton from '../../../shared/components/Buttons/GradientButton';
import LogManager from '../../../shared/utils/logging/LogManager';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigationParam } from 'react-navigation-hooks';
import Constant from '../../../shared/utils/constant/Constant';
import { FirebaseService } from '../../../api/FirebaseService';
import IALocalStorage from '../../../shared/utils/storage/IALocalStorage';

const InformationRoom = (props) => {
	const { colorsApp } = props.theme;
	const [isLoading] = useState(false);
	const item = useNavigationParam('item');
	const [roomName, setRoomName] = useState('');
	const [category, setCategory] = useState('');
	const [note, setNote] = useState('');
	const [tags, setTags] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		TrackPlayer.stop();
		if (item) {
			console.log(JSON.stringify(item));
			setRoomName(item?.channelName?.split("_")[0]);
			setCategory(item?.categories || '')
			setNote(item?.note || '')
			setTags(item?.tags?.toString() || '')
		}
	}, []);

	const onCreateLivestream = async () => {
		let userInfo = await IALocalStorage.getDetailUserInfo();
		if (roomName === '' || category === '' || note === '' || tags === '') {
			ToastHelper.showError('Dont leave us empty!');
			return;
		}
		if (item) {
			firebase.database().ref(Constant.SCHEMA.LIVESTREAM).child(item?.id).once('value', snapshot => {
				const data = snapshot.val() || [];
				if (userInfo?.userId === data?.ownerUserId?.id) {
					// RtcEngine.muteLocalAudioStream(!this.state.hasVol);
					firebase.database().ref(Constant.SCHEMA.LIVESTREAM).child(item?.id).once('value', snapshot => {
						const data = snapshot.val() || [];
						// Not Owner => remove participiants
						let tagSplited = tags?.split(',');
						for (let i = 0; i < tagSplited?.length; i++) {
							if (typeof tagSplited[i] === 'string') {
								if (!tagSplited[i]?.trim().includes('#')) {
									tagSplited[i] = '#' + tagSplited[i]?.trim();
									tagSplited[i] = tagSplited[i]?.trim();
								}
							}
						}
						FirebaseService.updateItem(Constant.SCHEMA.LIVESTREAM, item?.id, {
							...data, channelName: roomName, categories: category, note: note,
								tags: tagSplited
						});
					});
					// this.setState({ hasVol: !this.state.hasVol }, () => {
					ToastHelper.showSuccess('You changed your room success');
					// });
				}
			});
			return;
		}
		let tagSplited = tags?.split(',');
		for (let i = 0; i < tagSplited?.length; i++) {
			if (typeof tagSplited[i] === 'string') {
				if (!tagSplited[i]?.trim().includes('#')) {
					tagSplited[i] = '#' + tagSplited[i]?.trim();
					tagSplited[i] = tagSplited[i]?.trim();
				}
			}
		}
		NavigationService.navigate(ScreenNames.VideoCallScreen, {
			data: {
				channelName: roomName,
				category,
				note,
				password: password,
				tags: tagSplited
			}
		});
	};

	const renderHeader = () => {
		return (
			<View style={style.header}>
				<TouchableOpacity onPress={() => NavigationService.goBack()} style={{ flexDirection: 'row' }}>
					<Back props={props} onPress={() => NavigationService.goBack()} style={{ marginLeft: 20 }} />
				</TouchableOpacity>
				<TextNormal props={props} text={'Room information'} style={[containerStyle.textHeader, { color: colors.textBlue, textAlignVertical: 'center' }]} />
				<TouchableOpacity onPress={() => { }} style={{ flexDirection: 'row', marginEnd: 20 }}>
					<TextNormal props={props} text={'        '} style={[containerStyle.textContent, { color: colors.textBlue, textAlignVertical: 'center' }]} />
				</TouchableOpacity>
			</View>
		);
	};

	return (
		<View style={[{ backgroundColor: colors.pinkBackground, flex: 1 }]}>
			<StatusBar barStyle={colorsApp.statusBar} />
			<SafeAreaView>
				{renderHeader()}
				<KeyboardAwareScrollView
					showsVerticalScrollIndicator={false}>
					<View style={{ paddingEnd: 20, paddingLeft: 20, paddingBottom: 100 }}>
						<TextInputFlat
							onChangeText={(text) => { setRoomName(text); }}
							text={'Room name'}
							props={props}
							value={roomName}
							style={style.fieldItem}
						/>
						<TextInputFlat
							onChangeText={(text) => { setCategory(text); }}
							text={'Category (Sport, Education ...)'}
							props={props}
							value={category}
							style={style.fieldItem}
						/>
						<TextInputFlat
							onChangeText={(text) => { setNote(text); }}
							text={'Especially note (for individual, for my class, ...)'}
							props={props}
							value={note}
							style={style.fieldItem}
						/>
						<TextInputFlat
							onChangeText={(text) => { setTags(text); }}
							text={'Tags (#gamefortoday, #playwithme ...)'}
							props={props}
							value={tags}
							style={style.fieldItem}
						/>
						<TextInputFlat
							onChangeText={(text) => { setPassword(text); }}
							text={'Password (if you really limit joiner)'}
							props={props}
							style={style.fieldItem}
						/>
						<GradientButton text={item ? 'Update' : 'Create'} onPress={() => onCreateLivestream()} style={{ marginTop: 20 }} />
					</View>
				</KeyboardAwareScrollView>
				{isLoading ? <Loading /> : null}
			</SafeAreaView>

		</View>
	);
};

export default withTheme(InformationRoom);
