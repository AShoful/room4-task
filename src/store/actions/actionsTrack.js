import api from '../../api';
import { FETCH_START, GET_SEARCH_TRACK, FETCH_ERROR } from './actionTypes';

export function fetchStart() {
  return {
    type: FETCH_START
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
    type: FETCH_ERROR,
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
