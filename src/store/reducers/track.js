import {
  FETCH_START_SEARCH_TRACK,
  GET_SEARCH_TRACK,
  FETCH_ERROR_SEARCH_TRACK
} from '../actions/actionTypes';

const initialState = {
  track: [],
  error: '',
  loading: false
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_START_SEARCH_TRACK:
      return {
        ...state,
        loading: true
      };
    case GET_SEARCH_TRACK:
      return {
        ...state,
        track: action.track,
        error: '',
        loading: false
      };
    case FETCH_ERROR_SEARCH_TRACK:
      return {
        ...state,
        error: action.error.response.data.message,
        loading: false
      };
    default:
      return state;
  }
}
