import React, { PureComponent } from 'react';
import {
  View, Text, StyleSheet, Dimensions
} from 'react-native';
import Image from '../commons/Image';
import InnerShadow from '../commons/InnerShadow';
import theme from '../../../utils/AppTheme';

const { width } = Dimensions.get('window');
export const movieBackdropWithTitleHeight = width / theme.specifications.backdropAspectRation;

class MovieDetailHeader extends PureComponent {
  render() {
    const { title, banner } = this.props;

    return (
      <View style={styles.container}>
        <Image resizeMode="cover" style={styles.image} source={banner} />
        <InnerShadow position="bottom" hexColor={theme.colors.background} startOpacity={1} size={120} />
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  image: {
    width,
    height: movieBackdropWithTitleHeight,
    backgroundColor: theme.colors.transparentBlack,
  },
  titleWrapper: {
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: theme.spacing.small,
    paddingVertical: theme.spacing.tiny,
  },
  titleText:{
    ...theme.typography.title1,
    color: theme.colors.primary
  }
});

export default MovieDetailHeader;