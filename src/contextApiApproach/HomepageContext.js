import React from 'react';

export default React.createContext({
  latest_movie: null,
  popular_movie: null,
  toprated_movie: null,
  upcoming_movie: null,
  genre: {},
  getNowPlaying: (movies) => {},
  getPopularMovie: (movies) => {},
  getTopRatedMovie: (movies) => {},
  getGenre: (genres) => {}
});
