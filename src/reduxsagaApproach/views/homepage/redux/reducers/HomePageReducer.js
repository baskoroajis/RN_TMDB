/* eslint-disable prettier/prettier */
import {
  IS_LOADING,
  IS_FAILED,
  IS_SUCCESS,
  GET_NOWPLAYING_MOVIE,
  GET_POPULAR_MOVIE,
  GET_TOPRATED_MOVIE,
  GET_UPCOMING_MOVIE,
  GET_GENRE
} from '../actions/HomePageAction';

const initialState = {
  latest_movie: {},
  popular_movie: {},
  toprated_movie: {},
  upcoming_movie: {},
  genre: {}
};

function requestData(state = initialState, action) {
  switch (action.type) {
    case IS_LOADING: {
      switch (action.api_type) {
        case (GET_NOWPLAYING_MOVIE): {
          return { ...state, latest_movie: { loading: true } };
        }
        case (GET_POPULAR_MOVIE): {
          return { ...state, popular_movie: { loading: true } };
        }
        case (GET_TOPRATED_MOVIE): {
          return { ...state, toprated_movie: { loading: true } };
        }
        case (GET_UPCOMING_MOVIE): {
          return { ...state, upcoming_movie: { loading: true } };
        }
        case (GET_GENRE): {
          return { ...state, genre: { loading: true } };
        }
        default: {
          return { ...state };
        }
      }
    }
    case IS_SUCCESS: {
      switch (action.api_type) {
        case (GET_NOWPLAYING_MOVIE): {
          return { ...state, latest_movie: { data: action.data.results, loading: false } };
        }
        case (GET_POPULAR_MOVIE): {
          return { ...state, popular_movie: { data: action.data.results, loading: false } };
        }
        case (GET_TOPRATED_MOVIE): {
          return { ...state, toprated_movie: { data: action.data.results, loading: false } };
        }
        case (GET_UPCOMING_MOVIE): {
          return { ...state, upcoming_movie: { data: action.data.results, loading: false } };
        }
        case (GET_GENRE): {
          return { ...state, genre: { data: action.data.genres, loading: false } };
        }
        default: {
          return { ...state };
        }
      }
    }
    case IS_FAILED: {
      const { response } = action.error;
      switch (action.api_type) {
        case (GET_NOWPLAYING_MOVIE): {
          return {
            ...state,
            latest_movie: {
              http_error: action.error.message, error_message: action.error.response.data, status_code: action.error.response.status, loading: false
            }
          };
        }
        case (GET_POPULAR_MOVIE): {
          if (typeof response === 'undefined') {
            return { ...state, popular_movie: { http_error: action.error.message, error_message: action.error.message, loading: false } };
          }
          return {
            ...state,
            popular_movie: {
              http_error: action.error.message, error_message: action.error.response.data, status_code: action.error.response.status, loading: false
            }
          };
        }
        case (GET_TOPRATED_MOVIE): {
          if (typeof response === 'undefined') {
            return { ...state, toprated_movie: { http_error: action.error.message, error_message: action.error.message, loading: false } };
          }
          return {
            ...state,
            toprated_movie: {
              http_error: action.error.message, error_message: action.error.response.data, status_code: action.error.response.status, loading: false
            }
          };
        }
        case (GET_UPCOMING_MOVIE): {
          if (typeof response === 'undefined') {
            return { ...state, upcoming_movie: { http_error: action.error.message, error_message: action.error.message, loading: false } };
          }
          return {
            ...state,
            upcoming_movie: {
              http_error: action.error.message, error_message: action.error.response.data, status_code: action.error.response.status, loading: false
            }
          };
        }
        case (GET_GENRE): {
          if (typeof response === 'undefined') {
            return { ...state, genre: { http_error: action.error.message, error_message: action.error.message, loading: false } };
          }
          return {
            ...state,
            genre: {
              http_error: action.error.message, error_message: action.error.response.data, status_code: action.error.response.status, loading: false
            }
          };
        }
        default: {
          return { ...state };
        }
      }
    }
    default: {
      return state;
    }
  }
}
export default requestData;
