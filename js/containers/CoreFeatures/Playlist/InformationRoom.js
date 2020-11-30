
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
import TrackPlayer from 'react-native-track-player';
import TextInputFlat from '../../../shared/components/TextInput/TextInputFlat';
import { ToastHelper } from '../../../shared/components/ToastHelper';
import GradientButton from '../../../shared/components/Buttons/GradientButton';
import LogManager from '../../../shared/utils/logging/LogManager';
import { firebase } from '@react-native-firebase/database';
import Constant from '../../../shared/utils/constant/Constant';

const InformationRoom = (props) => {
	const { colorsApp } = props.theme;
	const [isLoading] = useState(false);
	const [roomName, setRoomName] = useState('');
	const [category, setCategory] = useState('');
	const [note, setNote] = useState('');
	const [tags, setTags] = useState('');
	const [playlist, setPlaylist] = useState([]);

	useEffect(() => {
		TrackPlayer.stop();
	}, []);

	const onCreateLivestream = () => {
		if (roomName === '' || category === '' || note === '' || tags === '') {
			ToastHelper.showError('Dont leave us empty!');
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
		NavigationService.navigate(ScreenNames.VideoCallScreen,{
			data: {
				channelName: roomName,
				category,
				note,
				tags: tagSplited
			}
		});
	};

	const renderHeader = () => {
		return (
			<View>
				<View style={style.header}>
					<TouchableOpacity onPress={() => NavigationService.goBack()} style={{ flexDirection: 'row' }}>
						<Back props={props} onPress={() => NavigationService.goBack()} style={{ marginLeft: 20 }} />
					</TouchableOpacity>
					<TextNormal props={props} text={'Room information'} style={[containerStyle.textHeader, { color: colors.textBlue, textAlignVertical: 'center' }]} />
					<TouchableOpacity onPress={() => { }} style={{ flexDirection: 'row', marginEnd: 20 }}>
						<TextNormal props={props} text={'        '} style={[containerStyle.textContent, { color: colors.textBlue, textAlignVertical: 'center' }]} />
					</TouchableOpacity>
				</View>
			</View>
		);
	};

	return (
		<View style={[{ backgroundColor: colors.pinkBackground, flex: 1 }]}>
			<StatusBar barStyle={colorsApp.statusBar} />

			<SafeAreaView>
				{renderHeader()}
				<ScrollView
					showsVerticalScrollIndicator={false}>
					<View style={{ padding: 20, paddingBottom: 100 }}>
						<TextInputFlat
							onChangeText={(text) => { setRoomName(text); }}
							text={'Room name'}
							props={props}
							style={style.fieldItem}
						/>
						<TextInputFlat
							onChangeText={(text) => { setCategory(text); }}
							text={'Category (Sport, Education ...)'}
							props={props}
							style={style.fieldItem}
						/>
						<TextInputFlat
							onChangeText={(text) => { setNote(text); }}
							text={'Especially note (for individual, for my class, ...)'}
							props={props}
							style={style.fieldItem}
						/>
						<TextInputFlat
							onChangeText={(text) => { setTags(text); }}
							text={'Tags (#gamefortoday, #playwithme ...)'}
							props={props}
							style={style.fieldItem}
						/>
						<GradientButton text={'Create'} onPress={() => onCreateLivestream()} style={{ marginTop: 20 }} />
					</View>
				</ScrollView>
				{isLoading ? <Loading /> : null}
			</SafeAreaView>

		</View>
	);
};

export default withTheme(InformationRoom);
