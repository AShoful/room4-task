import api from '../../api';
import {
  FETCH_START_SEARCH_TRACK,
  GET_SEARCH_TRACK,
  FETCH_ERROR_SEARCH_TRACK
} from './actionTypes';

export function fetchStart() {
  return {
    type: FETCH_START_SEARCH_TRACK
  };
}

export function getSearchTracksSuccess(searchRezult) {
  return {
    type: GET_SEARCH_TRACK,
    track: searchRezult
  };
}

export function fetchError(error) {
  return {
    type: FETCH_ERROR_SEARCH_TRACK,
    error
  };
}

export function getSearchTracks(str) {
  return async (dispatch) => {
    dispatch(fetchStart());
    try {
      const res = await api.getSearchTracks(str);
      const searchRezult = res.data.results.trackmatches.track;
      dispatch(getSearchTracksSuccess(searchRezult));
    } catch (error) {
      dispatch(fetchError(error));
    }
  };
}
