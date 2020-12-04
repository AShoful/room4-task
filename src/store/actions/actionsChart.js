import api from '../../api';
import {
  FETCH_START_TOP_TRAKS,
  GET_TOP_TRACKS,
  FETCH_ERROR_TOP_TRAKS
} from './actionTypes';

function fetchStart() {
  return {
    type: FETCH_START_TOP_TRAKS
  };
}

function getTopTracksSuccess(topTracks) {
  return {
    type: GET_TOP_TRACKS,
    topTracks,
    loading: false
  };
}

function fetchError(error) {
  return {
    type: FETCH_ERROR_TOP_TRAKS,
    error
  };
}

export function getTopTracks() {
  return async (dispatch) => {
    dispatch(fetchStart());
    try {
      const res = await api.getTopTracks();
      const topTracks = res.data;
      dispatch(getTopTracksSuccess(topTracks));
    } catch (error) {
      dispatch(fetchError(error));
    }
  };
}
