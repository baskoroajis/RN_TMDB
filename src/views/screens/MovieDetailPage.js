import React, { Component, PureComponent } from 'react';
import {
  Text, StyleSheet, View, ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import MovieDetailHeader from '../components/moviedetails/MovieDetailHeader';
import { GetImageUrl300 } from '../../utils/Api';
import Container from '../components/commons/Container';
import theme from '../../utils/AppTheme';
import { formatDate } from '../../utils/Helper';
import ButtonIcon from '../components/moviedetails/ButtonIcon';
import {
  storeMovieToLocal,
  deleteMovieLocal
} from '../../redux/actions/LocalStorageAction';
import {backNavigation} from '../../utils/Icons';
import { TouchableHighlight } from 'react-native-gesture-handler';

class MovieDetailPage extends PureComponent {
  
  static navigationOptions = ({ navigation }) => ({
    headerTransparent: true,
    title: '',
    headerLeft: (
      <TouchableHighlight>
        {backNavigation()}
      </TouchableHighlight>
    )
  });

  constructor(props) {
    super(props);
    this.movie = this.props.navigation.getParam('movie');
    this.isSaved = false;
    const savedObject = this.props.savedMovies.find((item) => { return item.id === this.movie.id; });
    if (savedObject !== undefined) {
      this.isSaved = true;
    }
  }

  onPressSave(isSaved) {
    if (isSaved) {
      this.props.storeMovieToLocal(this.movie);
    } else {
      this.props.deleteMovieLocal(this.movie);
    }
  }

  render() {
    const imageUrl = this.movie.backdrop_path ? GetImageUrl300(this.movie.backdrop_path) : '';
    const movieTitle = this.movie.title;
    const userRAting = `${this.movie.vote_average} user rating`;
    const { overview } = this.movie;
    const releasedDate = `${formatDate(this.movie.release_date)}`;
    let genres = '';
    if (this.movie.genre_ids !== null && this.movie.genre_ids !== undefined) {
      this.movie.genre_ids.forEach((element) => {
        const genre = this.props.genre.find((x) => x.id === element).name;
        genres = genres.concat(`${genre} - `);
      });
    }

    genres = genres.substring(0, genres.length - 2);

    return (
      <Container headerTransparent>
        <ScrollView
          contentContainerStyle={styles.container}
        >
          <View>
            <MovieDetailHeader banner={{ uri: imageUrl }} title={movieTitle} />
            <Text style={styles.textRating}>{userRAting}</Text>
            <Text style={styles.textReleased}>{releasedDate}</Text>
            <View style={styles.genreContainer}>
              <Text style={styles.textGenres}>{genres}</Text>
              <ButtonIcon style={styles.savedIcon} isSaved={this.isSaved} onPress={(isSaved) => this.onPressSave(isSaved)} />
            </View>
            <Text style={styles.overviewTitle}>Overview</Text>
            <Text style={styles.overviewText}>{overview}</Text>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textRating: {
    ...theme.typography.title3,
    color: theme.colors.warning,
    paddingHorizontal: theme.spacing.small,
    fontWeight: 'bold'
  },
  textReleased: {
    ...theme.typography.caption1,
    color: theme.colors.primary,
    paddingVertical: theme.spacing.tiny,
    paddingHorizontal: theme.spacing.small,
  },
  textGenres: {
    ...theme.typography.caption1,
    color: theme.colors.white,
    paddingVertical: theme.spacing.tiny,
    paddingHorizontal: theme.spacing.small,
    flex: 1
  },
  overviewTitle: {
    ...theme.typography.title3,
    color: theme.colors.white,
    paddingVertical: theme.spacing.tiny,
    paddingHorizontal: theme.spacing.small,
  },
  overviewText: {
    ...theme.typography.body,
    color: theme.colors.white,
    paddingVertical: theme.spacing.tiny,
    paddingHorizontal: theme.spacing.small,
    textAlign: 'justify'
  },
  genreContainer: {
    flexDirection: 'row',
  },
  savedIcon: {
    paddingHorizontal: theme.spacing.small,
  }
});

const mapStateToProps = (state) => ({
  genre: state.api.genre.data,
  savedMovies: state.storage.movies,
});

const mapDispatchToProps = {
  storeMovieToLocal,
  deleteMovieLocal
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailPage);
