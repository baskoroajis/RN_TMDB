import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import Image from '../../../../views/components/commons/Image';
import { GetImageUrl300 } from '../../../../utils/Api';
import { MoveToScreens } from '../../../../utils/Helper';
import * as screens from '../../../../utils/Screens';

class MovieHorizontalCard extends PureComponent {
  render() {
    const imageUrl = this.props.movie.poster_path ? GetImageUrl300(this.props.movie.poster_path) : '';
    return (
      <TouchableScale onPress={() => MoveToScreens(this.props.navigation, screens.MovieDetail, { movie: this.props.movie })}>
        <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="cover" />
      </TouchableScale>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 150,
    margin: 3,
    borderRadius: 10,
    opacity: 0.8,
  }
});

export default MovieHorizontalCard;
