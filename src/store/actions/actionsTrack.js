import api from '../../api';
import { hideError, hideLoader, showError, showLoader } from './actionsApp';
import { GET_SEARCH_TRACK } from './actionTypes';

export function getSearchTracksSuccess(searchRezult) {
  return {
    type: GET_SEARCH_TRACK,
    track: searchRezult
  };
}

export function getSearchTracks(str) {
  return async (dispatch) => {
    dispatch(showLoader());
    dispatch(hideError());
    try {
      const res = await api.getSearchTracks(str);
      const searchRezult = res.data.results.trackmatches.track;
      dispatch(getSearchTracksSuccess(searchRezult));
      dispatch(hideLoader());
    } catch (error) {
      dispatch(showError(error.message));
    }
  };
}
