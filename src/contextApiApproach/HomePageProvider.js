import React from 'react';
import Context from './HomepageContext';
import * as Api from '../utils/Api';

export default class HomePageProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latest_movie: null,
      popular_movie: null,
      toprated_movie: null,
      upcoming_movie: null,
      genre: null,
    };
  }

getNowPlaying = async () => {
  const moviesData = await Api.GetNowPlaying(10, 1);
  this.setState({ latest_movie: moviesData.data.results });
}

getPopularMovie = async () => {
  const moviesData = await Api.GetPopularMovie(10, 1);
  this.setState({ popular_movie: moviesData.data.results });
}

getTopRatedMovie = async () => {
  const moviesData = await Api.GetTopRatedMovie(10, 1);
  this.setState({ toprated_movie: moviesData.data.results });
}

getUpcomingMovie = async () => {
  const moviesData = await Api.GetUpcomingMovie(10, 1);
  this.setState({ upcoming_movie: moviesData.data.results });
}

render() {
  return (
    <Context.Provider
      value={{
        latest_movie: this.state.latest_movie,
        popular_movie: this.state.popular_movie,
        toprated_movie: this.state.toprated_movie,
        upcoming_movie: this.state.upcoming_movie,
        genre: this.state.genre,
        getNowPlaying: this.getNowPlaying
      }}
    >
      {this.props.children}
    </Context.Provider>
  );
}
}
