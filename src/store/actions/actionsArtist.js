import api from '../../api';
import { showError, showLoader, hideError, hideLoader } from './actionsApp';
import { GET_INFO_ARTIST, CLEAR_INFO_ARTIST } from './actionTypes';

export function clearArtist() {
  return {
    type: CLEAR_INFO_ARTIST
  };
}

export function getInfoArtistSuccess(infoArtist) {
  return {
    type: GET_INFO_ARTIST,
    infoArtist
  };
}

export function getInfoArtist(name) {
  return async (dispatch) => {
    dispatch(showLoader());
    dispatch(hideError());
    try {
      const res = await api.getInfoArtist(name);
      const infoArtist = res.data;
      dispatch(getInfoArtistSuccess(infoArtist));
      dispatch(hideLoader());
    } catch (error) {
      dispatch(showError(error.message));
    }
  };
}
