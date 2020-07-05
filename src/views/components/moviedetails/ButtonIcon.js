import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import theme from '../../../utils/AppTheme';

const { iconSize } = theme.specifications;
const { primary, lightest } = theme.colors;

const getSaveMovieIcon = ({ isSaved }) => (
  <IconMaterialIcons
    name={isSaved ? 'playlist-add-check' : 'playlist-add'}
    color={isSaved ? primary : lightest}
    size={iconSize}
  />
);

class ButtonIcon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSaved: props.isSaved
    };
  }

  onPress() {
    const isSaved = !this.state.isSaved;
    this.setState(
      { isSaved }
    );
    this.props.onPress(isSaved);
  }

  render() {
    const { isSaved } = this.state;
    const saveString = isSaved ? 'Saved' : 'Save';
    return (
      <TouchableOpacity style={this.props.style} onPress={() => this.onPress()}>
        <View style={styles.container}>
          {getSaveMovieIcon({ isSaved })}
          <Text style={isSaved ? styles.textTitleActive : styles.textTitle}>{saveString}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textTitle: {
    ...theme.typography.caption1,
    color: theme.colors.lightest,
  },
  textTitleActive: {
    ...theme.typography.caption1,
    color: theme.colors.primary,
  },
});

export default ButtonIcon;
