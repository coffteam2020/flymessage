import React, {useEffect, useState} from 'react';
import {StatusBar, View, SafeAreaView} from 'react-native';
import {styles as style} from './style';
import {withTheme} from 'react-native-paper';
import TextNormal from '../../../shared/components/Text/TextNormal';
import {containerStyle} from '../../../themes/styles';
import {useTranslation} from 'react-i18next';
import Loading from '../../../shared/components/Loading';
import {NavigationService} from '../../../navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ImageBackground} from 'react-native';
import {images} from '../../../../assets';
import Back from '../../../shared/components/Icons/Back';
import {colors} from '../../../shared/utils/colors/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import icons from '../../../shared/utils/icons/icons';
import {SPACINGS} from '../../../themes';
import IALocalStorage from '../../../shared/utils/storage/IALocalStorage';
import AxiosFetcher from '../../../api/AxiosFetch';
import {ToastHelper} from '../../../shared/components/ToastHelper';
import FastImage from 'react-native-fast-image';
import {ScreenWidth} from '../../../shared/utils/dimension/Divices';
import Constant from '../../../shared/utils/constant/Constant';
import {firebase} from '@react-native-firebase/database';
import {FirebaseService} from '../../../api/FirebaseService';
import TextInputFlat from '../../../shared/components/TextInput/TextInputFlat';
import GradientButton from '../../../shared/components/Buttons/GradientButton';
import {TimeHelper} from '../../../shared/utils/helper/timeHelper';
import {ScreenNames} from '../../../route/ScreenNames';

const PlayListConfig = (props) => {
	const {colorsApp} = props.theme;
	const [isLoading, setIsLoading] = useState(false);
	const [user, setUser] = useState([]);
	const [me, setMe] = useState([]);
	const [indexme, setIndex] = useState([]);
	const [playList, setPlaylist] = useState([]);
    const [newName, setNewName] = useState('');
    const [data, setData] = useState({});
	useEffect(() => {
		// getUsers();
		getPlayListMine();
	}, []);

	const getPlayListMine = async () => {
        let user = await IALocalStorage.getDetailUserInfo();
		firebase.database().ref(Constant.SCHEMA.PLAYLIST).on('value', snapshot => { 
			if (snapshot.val() != undefined) {
				let data = Object.values(snapshot.val()) || [];
                console.log(JSON.stringify(data));
                let a = [];
                for (let i = 0 ; i<data.length ; i++) {
                    if (data[i]?.user?.userId === user?.userId) {
                        a?.push(data[i]);
                    }
                }
				setPlaylist(a || []);
			} else {
				setPlaylist([]);
			}
		});
	};
	const createPlaylist = async () => {
		if (newName === '' || !newName) {
			ToastHelper.showError('Do not leave title empty')
			return;
		}
		let user = await IALocalStorage.getDetailUserInfo();
		let data = {
			name: newName,
            user: user,
            id: new Date().getTime(),
			createdOn: new Date().getTime()
        };
        setData(data);
        FirebaseService.pushNewItem(Constant.SCHEMA.PLAYLIST, data);
        NavigationService.navigate(ScreenNames.Recording, {playListInfo: data?.id});
	};
	return (
		<View style={[containerStyle.default, {backgroundColor: colors.pinkBackground, paddingBottom: 160}]}>
			<StatusBar barStyle={colorsApp.statusBar} />
			<SafeAreaView>
				<View style={{flexDirection: 'row'}}>
					<Back props={props} onPress={() => NavigationService.goBack()} style={{marginLeft: 20, marginTop: 20}} />
					<TextNormal numberOfLines={2} props={props} text={'Choose your playlist'} style={[containerStyle.textHeader, {marginLeft: 20, marginTop: 30, alignSelf: 'center'}]} />
				</View>
				<KeyboardAwareScrollView style={{marginTop: 20}} contentContainerStyle={{alignItems: 'center'}} showsVerticalScrollIndicator={false}>
					{playList?.length === 0 ?
						<View>
							<TextNormal numberOfLines={2} props={props} text={'You do not have any playlist.'} style={[containerStyle.textLink, {marginBottom: 20, width: '95%'}]} />
							<TextInputFlat
								onChangeText={(text) => { setNewName(text); }}
								text={'Your playlist`s name'}
								props={props}
								style={style.fieldItem}
							/>
							<GradientButton text={'Create'} onPress={() => {createPlaylist();}} style={{marginTop: 10}} />
						</View> : 
						<View>
                            <TextInputFlat
								onChangeText={(text) => { setNewName(text); }}
								text={'Create your new playlist`s name'}
								props={props}
								style={style.fieldItem}
							/>
							<GradientButton text={'Create'} onPress={() => {createPlaylist();}} style={{marginTop: 0}} />
                            <TextNormal numberOfLines={2} props={props} text={'Your old playlist.'} style={[containerStyle.textHeaderSmall, {marginTop: 20, marginBottom: 20, width: '95%'}]} />
							{(playList || [])?.map((item, index) => {
								return (
									<TouchableOpacity onPress={()=>{
										NavigationService.navigate(ScreenNames.Recording, {playListInfo: data?.id});
									}} style={[{borderColor: colors.gray, borderWidth: 0.5, borderRadius: 2}, containerStyle.shadow]}>
										{/* {index != 0 && <View style={{height: 2, backgroundColor: colors.gray_bg, width: '100%'}} />} */}
										<View style={{padding: 10, marginLeft: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, marginTop: 10}}>
											<TextNormal props={props} text={`${index + 1}. ${item?.name || 'No name'}`}  style={[containerStyle.textDefault, {flex: 1}]}/>
											<TextNormal numberOfLines={2} props={props} text={`${TimeHelper.convertTimeDDMMYY(item?.createdOn) || ''}`} style={[containerStyle.textDefault, {flex: 1}]} />
										</View>
									</TouchableOpacity>
								);
							})}
						</View>}
					
				</KeyboardAwareScrollView>
				
				{isLoading ? <Loading /> : null}
			</SafeAreaView>
			{/* <View style={{position: 'absolute', padding: 10, paddingLeft: 30, paddingBottom: 20, bottom: 0, left: 0, backgroundColor: '#1F253D', width: ScreenWidth, flexDirection: 'row', alignItems: 'center'}}>
				<TextNormal props={props} text={`${indexme + 1}`}  style={[containerStyle.textDefault, {color: 'white', marginEnd: 20,}]}/>
				<FastImage source={{uri: me?.avatar || Constant.MOCKING_DATA.PLACE_HOLDER}} style={{borderColor: 'white', borderWidth: 0.5, borderRadius: ScreenWidth / 14, width: ScreenWidth / 7, height: ScreenWidth / 7}} />
				<TextNormal numberOfLines={2} props={props} text={`${me?.name || 'No name'}`} style={[containerStyle.textDefault, {marginLeft: 20, width: '95%'}, {color: 'white', marginEnd: 20,}]} />
			</View> */}
		</View>
	);
};

export default withTheme(PlayListConfig);
