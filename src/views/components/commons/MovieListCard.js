import React, { PureComponent } from 'react';
import {
  TouchableHighlight, View, Text, StyleSheet
} from 'react-native';
import Image from './Image';
import theme from '../../../utils/AppTheme';
import { GetImageUrl300 } from '../../../utils/Api';
import { formatDate } from '../../../utils/Helper';
import * as screens from '../../../utils/Screens';
import { MoveToScreens } from '../../../utils/Helper';

class MovieListCard extends PureComponent {
  constructor(props) {
    super(props);
    this.movie = props.movie;
  }

  onPressMovieCard() {
    MoveToScreens(this.props.navigation, screens.BookmarkDetail, { movie: this.movie });
  }

  render() {
    const imageUrl = this.movie.poster_path ? GetImageUrl300(this.movie.poster_path) : '';
    const movieTitle = this.movie.title;
    const userRAting = `${this.movie.vote_average} user rating`;
    const releasedDate = `${formatDate(this.movie.release_date)}`;

    return (
      <TouchableHighlight
        onPress={() => this.onPressMovieCard()}
      >
        <View style={styles.container}>
          <Image style={styles.posterImage} source={{ uri: imageUrl }} />
          <View style={styles.textWrapper}>
            <Text numberOfLines={2} style={styles.title}>
              {movieTitle}
            </Text>
            <Text style={styles.textRating}>{userRAting}</Text>
            <Text style={styles.textRelease}>{releasedDate}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: theme.spacing.xTiny,
    height: 150,
  },
  posterImage: {
    width: 100,
    height: '100%',
    marginHorizontal: theme.spacing.tiny,
    backgroundColor: theme.colors.gradyDark,
    borderRadius: 2,
  },
  textWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.small,
  },
  title: {
    ...theme.typography.header,
    color: theme.colors.white,
    paddingRight: 100
  },
  textRating: {
    ...theme.typography.body,
    color: theme.colors.warning,
    fontWeight: 'bold',
    paddingVertical: theme.spacing.small,
  },
  textRelease: {
    ...theme.typography.body,
    color: theme.colors.white
  }

});

export default MovieListCard;
