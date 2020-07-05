import React, { PureComponent } from 'react';
import { Image as RNImage } from 'react-native';

class Image extends PureComponent {
  constructor(props) {
    super(props);
    this.placeholder = require('../../../assets/images/placeholder1.jpg');

    this.state = {
      isLoading: true,
      source: null,
      resizeMode: 'contain'
    };
  }

  componentDidMount() {
    const { source, resizeMode } = this.props;
    this.setState({ resizeMode });

    if (source.uri !== undefined) {
      // this is remote image
      if (source.uri === null) {
        this.setState({ source: this.placeholder, resizeMode: 'contain' });
      } else {
        this.setState({ source });
      }
    } else {
      // this is local image
      this.setState({ source: source || this.placeholder });
    }
  }

  render() {
    const {
      style, source, onLoad, ...otherProps 
    } = this.props;
    return (
      <RNImage
        style={style}
        source={this.state.source}
        defaultSource={this.placeholder}
        resizeMode={this.state.isLoading ? 'contain' : this.state.resizeMode}
        resizeMethod="resize"
        onLoad={() => this.setState({ isLoading: false })}
        onError={e => {
          this.setState({ source: this.placeholder, resizeMode: 'contain'});
        }}
        {...otherProps}
      />
    );
  }
}

export default Image;
