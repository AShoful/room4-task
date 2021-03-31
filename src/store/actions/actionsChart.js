import api from '../../api';
import { hideError, hideLoader, showError, showLoader } from './actionsApp';
import { GET_TOP_TRACKS } from './actionTypes';

function getTopTracksSuccess(topTracks) {
  return {
    type: GET_TOP_TRACKS,
    topTracks,
    loading: false
  };
}

export function getTopTracks() {
  return async (dispatch) => {
    dispatch(hideError());
    dispatch(showLoader());
    try {
      const res = await api.getTopTracks();
      const topTracks = res.data;
      dispatch(getTopTracksSuccess(topTracks));
      dispatch(hideLoader());
    } catch (error) {
      dispatch(showError(error.message));
    }
  };
}
