import { NativeModules, Platform } from 'react-native';

const { RNDetectNavbarAndroid } = NativeModules;

function unSupportedError() {
  throw new Error('[react-native-detect-navbar-android-sync] does not support iOS');
}

export const DetectNavbar = () => {
  if (Platform.OS === 'android') {
    return {
      hasSoftKeys() {
        return RNDetectNavbarAndroid.hasSoftKeys();
      },
    };
  }
  return { hasSoftKeys: unSupportedError };
};

export default DetectNavbar;
