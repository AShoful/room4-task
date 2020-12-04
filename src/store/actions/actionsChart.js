import api from '../../api';
import { FETCH_START, GET_TOP_TRACKS, FETCH_ERROR } from './actionTypes';

export function fetchStart() {
  return {
    type: FETCH_START
  };
}

export function getTopTracksSuccess(topTracks) {
  return {
    type: GET_TOP_TRACKS,
    topTracks
  };
}

export function fetchError(error) {
  return {
    type: FETCH_ERROR,
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
