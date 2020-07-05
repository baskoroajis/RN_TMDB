import React from 'react';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import theme from './AppTheme';

const { smallIconSize, mediumIconSize, largeIconSize } = theme.specifications;
const { inactive, white } = theme.colors;

export const activeMovieTabIcon = () => (
  <IconMaterialIcons
    name="theaters"
    color={white}
    size={mediumIconSize}
  />
);

export const inactiveMovieTabIcon = () => (
  <IconMaterialIcons
    name="theaters"
    color={inactive}
    size={mediumIconSize}
  />
);

export const activeBookmarkTabIcon = () => (
  <IconMaterialIcons
    name="bookmark"
    color={white}
    size={mediumIconSize}
  />
);

export const inactiveBookmarkTabIcon = () => (
  <IconMaterialIcons
    name="bookmark"
    color={inactive}
    size={mediumIconSize}
  />
);

export const backNavigation = () => (
  <FontAwesome
    name="chevron-left"
    color={white}
    size={smallIconSize}
  />
);

export const filmIcon = () => (
  <FontAwesome
    name="film"
    color={white}
    size={largeIconSize}
  />
);
