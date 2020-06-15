/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import { PermissionsAndroid } from "react-native";
import { PERMISSIONS, checkMultiple, requestMultiple, RESULTS } from 'react-native-permissions';
/**
 * @name requestCameraAndAudioPermission
 * @description Function to request permission for Audio and Camera
 */
export default async function requestCameraAndAudioPermission(platform) {
	try {
		if (platform === 'android') {
			const granted = await PermissionsAndroid.requestMultiple([
				PermissionsAndroid.PERMISSIONS.CAMERA,
				PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
			]);
			if (
				granted["android.permission.RECORD_AUDIO"] ===
				PermissionsAndroid.RESULTS.GRANTED &&
				granted["android.permission.CAMERA"] ===
				PermissionsAndroid.RESULTS.GRANTED
			) {
				console.log("You can use the cameras & mic");
			} else {
				console.log("Permission denied");
			}
		}
		else if (platform === 'ios') {
			const res = await checkMultiple([PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.MICROPHONE]);
			if (res[PERMISSIONS.IOS.CAMERA] === RESULTS.GRANTED && res[PERMISSIONS.IOS.MICROPHONE] === RESULTS.GRANTED) {
				console.log("You can use the cameras & mic");
			} else if (res[PERMISSIONS.IOS.CAMERA] === RESULTS.DENIED || res[PERMISSIONS.IOS.MICROPHONE] === RESULTS.DENIED) {
				const res2 = await requestMultiple([PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.MICROPHONE]);
				console.log("You can use the cameras & mic");
			}
		}
	} catch (err) {
		console.warn(err);
	}
}
