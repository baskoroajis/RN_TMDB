import { Dimensions, Platform } from 'react-native';

export function isIPhone(model = null) {
  const dim = Dimensions.get('window');

  if (model === 'X') {
    return (
    // This has to be iOS
      Platform.OS === 'ios'
        // Check either, iPhone X or XR
        && (isIPhoneXSize(dim) || isIPhoneXrSize(dim))
    );
  }
  return Platform.OS === 'ios';
}

export function isIPhoneXSize(dim) {
  return dim.height === 812 || dim.width === 812;
}

export function isIPhoneXrSize(dim) {
  return dim.height === 896 || dim.width === 896;
}

export const hexToRgb = (hex) => {
  if (!hex) return null;

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    }
    : null;
};

export function MoveToScreens(navigation, screenName, params) {
  navigation.navigate(screenName, params);
}

export const getMonthName = (index) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'Desember'
  ];
  index = index >= 0 && index < 12 ? index : 0;
  return months[index];
};

export const formatDate = (
  dateString,
  showTime = false,
  dateTimeSeperator = null
) => {
  const date = new Date(dateString);
  let dateStr = `${date.getDate()
  } ${
    getMonthName(date.getMonth())
  } ${
    date.getFullYear()}`;
  if (showTime) {
    const minutes = date.getMinutes();
    const formattedMinutes = (`0${minutes}`).slice(-2);
    const timeStr = `${date.getHours()}:${formattedMinutes}`;
    dateStr = dateStr
      + (dateTimeSeperator ? ` ${dateTimeSeperator} ` : ' ')
      + timeStr;
  }
  return dateStr;
};

export function parseJsonStringToArray(jsonString) {
  try {
    const item = JSON.parse(jsonString);
    if (item === null || item === undefined) {
      return [];
    }
    return item;
  } catch (error) {
    return [];
  }
}

export function parseJsonStringToObject(jsonString) {
  try {
    const item = JSON.parse(jsonString);
    if (item === null || item === undefined) {
      return {};
    }
    return item;
  } catch (error) {
    return {};
  }
}
