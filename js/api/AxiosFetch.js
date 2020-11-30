/**
 * This is helpful for using instance of axios and do rest-api
 * Author: UraNashel - tan.nguyen@bigcosmt.com
 */

import Axios from 'axios';
// import * as api from "../shared/utils/constant/Constant";
import api from '../shared/utils/constant/Constant';
import LogManager from '../shared/utils/logging/LogManager';
import IALocalStorage from '../shared/utils/storage/IALocalStorage';
import { Alert } from 'react-native';
import { NavigationService } from '../navigation';
import { ScreenNames } from '../route/ScreenNames';

export const APP_URL = 'http://api.stayalone.net/';

const AxiosInstance = Axios.create({
	timeout: 200000,
});

function methodGet({ url, ...config }) {
	return AxiosInstance.get(url, { ...config });
}

function methodPost({ url, data, ...config }) {
	return AxiosInstance.post(url, data, { ...config });
}

function methodPut({ url, data, ...config }) {
	return AxiosInstance.put(url, data, { ...config });
}

function methodDelete({ url, ...config }) {
	return AxiosInstance.delete(url, { ...config });
}

function methodPatch({ url, data, ...config }) {
	return AxiosInstance.patch(url, data, { ...config });
}

const methodFunctions = {
	[api.METHOD.post]: methodPost,
	[api.METHOD.put]: methodPut,
	[api.METHOD.get]: methodGet,
	[api.METHOD.delete]: methodDelete,
	[api.METHOD.patch]: methodPatch,
};

export async function AxiosFetcher({ method,
	data = undefined,
	url,
	hasToken = false,
	token,
	contentType = 'application/json',
	customBaseUrl, // This is helpful if we want to customize url
	hasBaseURL = true,
	params = undefined, }) {
	// Set custom service url
	if (hasBaseURL) {
		AxiosInstance.defaults.baseURL =
			(customBaseUrl && customBaseUrl) || APP_URL;
	}
	console.log('========> DATA: ' + LogManager.parseJsonObjectToJsonString(data));
	console.log('========> METHOD: ' + method);
	// Get axios function by method
	let tokenUser = await IALocalStorage.getTokenUserInfo();
	console.log('========> Token: ' + LogManager.parseJsonObjectToJsonString(tokenUser));
	return new Promise(async (resolve, reject) => {
		methodFunctions[method]({
			url, data, params,
			headers: {
				Accept: 'application/json',
				'Content-Type': contentType ? contentType : 'application/x-www-form-urlencoded',
				Authorization: hasToken ? `${tokenUser}` : null,
				'Cache-Control': 'no-cache',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
				'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
			}
		}).then(res => {
			console.log('========> RES: ' + customBaseUrl && customBaseUrl || url + '_' + JSON.stringify(res?.data));
			if (res?.status === 401 || res?.data?.error?.includes('Unauthorized')) {
				Alert.alert('Session expired', 'You term has been closed. Please try to login again', [
					{
						text: 'OK',
						onPress: () => { NavigationService.navigate(ScreenNames.LoginScreen); }
					}
				]);
				return;
			}
			if (res?.status === 200 || res?.data || res?.errorMessage) {
				resolve(res?.data);
			} else {
				reject(res?.data || res);
			}
		}).catch(err => {
			console.log('========> ERR: ' + customBaseUrl && customBaseUrl || url + '_' + JSON.stringify(err));
			reject(err?.message)
		})
		
	})
}

export default AxiosFetcher;
