import {
  SET_MOVIE_REDUCER,
} from '../actions/LocalStorageAction';

const initialState = {
  movies: [],
};

function localStorageData(state = initialState, action) {
  switch (action.type) {
    case SET_MOVIE_REDUCER: {
      return { ...state, movies: action.movies };
    }
    default:
      return state;
  }
}

export default localStorageData;
