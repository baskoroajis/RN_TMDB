import { Platform } from 'react-native';

const config = {
  isAndroid: Platform.OS === 'android',
  logGeneral: false,
  logNetworkMessages: false,
};

export default config;
