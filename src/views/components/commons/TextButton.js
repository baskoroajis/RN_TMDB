import React, { PureComponent } from 'react';
import {
  Text,
} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';

class TextButton extends PureComponent {

  render() {
    const { style } = this.props;
    const { text } = this.props;
    const { textStyle } = this.props;

    return (
      <TouchableScale style={style}>
        <Text style={textStyle}>
          {text}
        </Text>
      </TouchableScale>
    );
  }
}

export default TextButton;
