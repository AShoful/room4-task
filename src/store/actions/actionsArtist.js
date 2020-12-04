import api from '../../api';
import { FETCH_START, GET_INFO_ARTIST, FETCH_ERROR } from './actionTypes';

export function fetchStart() {
  return {
    type: FETCH_START
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
    type: FETCH_ERROR,
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
