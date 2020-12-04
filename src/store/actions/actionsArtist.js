import api from '../../api';
import {
  FETCH_START_INFO_ARTIST,
  GET_INFO_ARTIST,
  FETCH_ERROR_INFO_ARTIST
} from './actionTypes';

export function fetchStart() {
  return {
    type: FETCH_START_INFO_ARTIST
  };
}

export function getInfoArtistSuccess(infoArtist) {
  return {
    type: GET_INFO_ARTIST,
    infoArtist
  };
}

export function fetchError(error) {
  return {
    type: FETCH_ERROR_INFO_ARTIST,
    error
  };
}

export function getInfoArtist(name) {
  return async (dispatch) => {
    dispatch(fetchStart());
    try {
      const res = await api.getInfoArtist(name);
      const infoArtist = res.data;
      dispatch(getInfoArtistSuccess(infoArtist));
    } catch (error) {
      dispatch(fetchError(error));
    }
  };
}
