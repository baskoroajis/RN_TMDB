import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MovieSectionList from './components/MovieSectionList';
import Container from '../../../views/components/commons/Container';
import {
  getNowPlayingMovie, getTopRatedMovie, getPopularMovie, getUpcomingMovie, getGenre,
} from './redux/actions/HomePageAction';
import {
  loadLocalStorageOnFirstLoad
} from '../../../redux/actions/LocalStorageAction';

class HomePage extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerShown: false
  })

  constructor(props) {
    super(props);
    props.getNowPlayingMovie();
    props.getPopularMovie();
    props.getTopRatedMovie();
    props.getUpcomingMovie();
    props.getGenre();
    props.loadLocalStorageOnFirstLoad();
  }

  render() {
    return (
      <Container headerTransparent>
        <ScrollView>
          <MovieSectionList title="Now Playing" navigation={this.props.navigation} listData={this.props.nowPlayingMovie} />
          <MovieSectionList title="Popular Movie" navigation={this.props.navigation} listData={this.props.popularMovie} />
          <MovieSectionList title="Top Rated" navigation={this.props.navigation} listData={this.props.topratedMovie} />
          <MovieSectionList title="Upcoming Movie" navigation={this.props.navigation} listData={this.props.upcomingMovie} />
        </ScrollView>
      </Container>
    );
  }
}

// export default HomePage;
const mapStateToProps = (state) => ({
  savedMovies: state.storage.movies,

  nowPlayingMovie: state.api.latest_movie.data,
  popularMovie: state.api.popular_movie.data,
  topratedMovie: state.api.toprated_movie.data,
  upcomingMovie: state.api.upcoming_movie.data,

  isLoadingNowPlayingMovie: state.api.latest_movie.loading,
  isLoadingPopularMovie: state.api.popular_movie.loading,
  isLoadingTopRatedMovie: state.api.toprated_movie.loading,
  isLoadingUpcomingMovie: state.api.upcoming_movie.loading,

  errorNowPlayingMovie: state.api.latest_movie.error_message,
  errorPopularMovie: state.api.popular_movie.error_message,
  errorTopRatedMovie: state.api.toprated_movie.error_message,
  errorUpcomingMovie: state.api.upcoming_movie.error_message,
});

const mapDispatchToProps = {
  getNowPlayingMovie,
  getTopRatedMovie,
  getPopularMovie,
  getUpcomingMovie,
  getGenre,
  loadLocalStorageOnFirstLoad
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
