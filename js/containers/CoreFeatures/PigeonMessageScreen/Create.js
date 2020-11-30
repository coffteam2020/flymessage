import React, { useEffect, useState } from 'react';
import { StatusBar, View, SafeAreaView, TouchableOpacity, FlatList, RefreshControl } from 'react-native';
import { styles as style } from './style';
import { withTheme } from 'react-native-paper';
import TextNormal from '../../../shared/components/Text/TextNormal';
import { containerStyle } from '../../../themes/styles';
import { useTranslation } from 'react-i18next';
import Loading from '../../../shared/components/Loading';
import { NavigationService } from '../../../navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Back from '../../../shared/components/Icons/Back';
import { colors } from '../../../shared/utils/colors/colors';
import { ScreenNames } from '../../../route/ScreenNames';
import icons from '../../../shared/utils/icons/icons';
import AxiosFetcher from '../../../api/AxiosFetch';
import IALocalStorage from '../../../shared/utils/storage/IALocalStorage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ToastHelper } from '../../../shared/components/ToastHelper';
import Item from './Item';
import { ScreenWidth } from '../../../shared/utils/dimension/Divices';
import User from './User';
import TextInputFlatLeftIconTouchable from '../../../shared/components/TextInput/TextInputFlatLeftIconTouchable';
import TextInputFlatRightIconTouchable from '../../../shared/components/TextInput/TextInputFlatRightIconTouchable';
const Create = (props) => {
	const { colorsApp } = props.theme;
	const [isLoading, setIsLoading] = useState(false);
	const [users, setUsers] = useState([]);
	const [tempUser, setTempUser] = useState([]);
	const [currentUser, setCurrentUser] = useState({});
	const [search, setSearch] = useState(false);
	const [floatingRead] = useState([]);
	const { t } = useTranslation();

	useEffect(() => {
		IALocalStorage.getUserInfo().then(async val => {
			console.log(JSON.stringify(val));
			let res = val;
			setCurrentUser(res);
			getUsers();
		});

	}, []);

	async function getUsers() {
		setIsLoading(true);
		let userInfoId = await IALocalStorage.getUserInfo();
		AxiosFetcher({
			method: 'GET',
			url: `/api/useraction/${userInfoId.id}/friends`,
			data: undefined,
			hasToken: true,
		}).then(val => {
			if (val) {
				let res = val || [];
				console.log(userInfoId?.id);
				res = res.filter(item => item?.userId != userInfoId?.id);
				setUsers(res);
				setTempUser(res);
			} else {
				setUsers([]);
				setTempUser([]);
			}
			setIsLoading(false);
		}).catch(() => {
			setIsLoading(false);
			ToastHelper.showError('Could not get list users, please try again');
		});
	}

	const renderHeader = () => {
		return (
			<View>
				<View style={style.header}>
					<TouchableOpacity onPress={() => NavigationService.goBack()} style={{ flexDirection: 'row' }}>
						<Back props={props} onPress={() => NavigationService.goBack()} style={{ marginLeft: 20 }} />
					</TouchableOpacity>
					{search === true ?
						<TextInputFlatRightIconTouchable onChangeText={(text) => {
							if (!text || text.replace(' ', '') === '') {
								setUsers(tempUser);
							} else {
								let arr = tempUser || [];
								setUsers(arr.filter(item =>
									item?.name?.toLowerCase().includes(text?.toLowerCase()) ||
										`${item?.userId}`.includes(text?.toLowerCase())
										));
							}
						}} props={props} style={{ marginBottom: 15, marginLeft: 15, width: ScreenWidth * 0.6, }} textInputStyle={{ width: ScreenWidth * 0.6, marginBottom: 10 }} /> :
						<TextNormal props={props} text={'Create Messages'} style={[containerStyle.textHeader, { color: colors.textBlue, textAlignVertical: 'center' }]} />}
					<TouchableOpacity onPress={() => { setSearch(!search); setUsers(tempUser); }} style={{ flexDirection: 'row', marginEnd: 20 }}>
						{!search ? icons.IC_SEARCH_GRAY : <Ionicons name='ios-close-circle' color={'black'} size={20} />}
					</TouchableOpacity>
				</View>
			</View>
		);
	};
	const renderSeparator = () => {
		return (
			<View style={style.separatorView}
			/>
		);
	};
	const renderMessageItem = (item, index) => {
		return (
			<User
				onItemPress={async () => {
					NavigationService.navigate(ScreenNames.PinNewMessageScreen, { data: item, isDirectly: true });
				}}
				item={item}
				index={index}
				isRead={item?.read}
				currentUser={currentUser}
			/>
		);
	};
	return (
		<View style={[{ backgroundColor: colors.pinkBackground }]}>
			<StatusBar barStyle={colorsApp.statusBar} />
			<SafeAreaView>
				{renderHeader()}
				<View style={{ height: 50, width: ScreenWidth, backgroundColor: '#1F253D', justifyContent: 'center', marginTop: 0 }}>
					<TextNormal props={props} text={'Select a person you want to send Pigeon to'} style={[containerStyle.textContent, { color: colors.whiteBackground, textAlign: 'center' }]} />
				</View>
				<KeyboardAwareScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}
				>
					<FlatList
						refreshControl={
							<RefreshControl refreshing={false} onRefresh={() => getUsers()} />
						}
						showsVerticalScrollIndicator={false}
						data={users}
						ItemSeparatorComponent={() => renderSeparator()}
						renderItem={({ item, index }) => renderMessageItem(item, index)}
						keyExtractor={(item, index) => index + ''}
						style={{ paddingBottom: 200 }}
					/>
				</KeyboardAwareScrollView>
				{isLoading ? <Loading /> : null}
			</SafeAreaView>
		</View>
	);
};

export default withTheme(Create);
