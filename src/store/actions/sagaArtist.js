/* eslint-disable no-return-await */
import { takeEvery, put, call } from 'redux-saga/effects';
import {
  REQUEST_ARTIST,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ERROR,
  HIDE_ERROR,
  GET_INFO_ARTIST
} from './actionTypes';
import api from '../../api';

export function fetchArtist(str) {
  return {
    type: REQUEST_ARTIST,
    str
  };
}

async function getInfoArtist(str) {
  return await api.getInfoArtist(str);
}

function* sagaWorker({ str }) {
  try {
    yield put({ type: SHOW_LOADER });
    yield put({ type: HIDE_ERROR });
    const { data } = yield call(getInfoArtist, str);
    yield put({
      type: GET_INFO_ARTIST,
      infoArtist: data
    });
    yield put({ type: HIDE_LOADER });
  } catch (e) {
    yield put({ type: SHOW_ERROR, payload: e.message });
    yield put({ type: HIDE_LOADER });
  }
}

export function* sagaArtist() {
  yield takeEvery(REQUEST_ARTIST, sagaWorker);
}
