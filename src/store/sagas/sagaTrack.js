/* eslint-disable no-return-await */
import { takeEvery, put, call } from 'redux-saga/effects';
import {
  REQUEST_TRACKS,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ERROR,
  HIDE_ERROR,
  GET_SEARCH_TRACK
} from './actionTypes';
import api from '../../api';

export function fetchTracks(str) {
  return {
    type: REQUEST_TRACKS,
    str
  };
}

async function getTracks(str) {
  return await api.getSearchTracks(str);
}

function* sagaWorker({ str }) {
  try {
    yield put({ type: SHOW_LOADER });
    yield put({ type: HIDE_ERROR });
    const { data } = yield call(getTracks, str);
    yield put({
      type: GET_SEARCH_TRACK,
      track: data.results.trackmatches.track
    });
    yield put({ type: HIDE_LOADER });
  } catch (e) {
    yield put({ type: SHOW_ERROR, payload: e.message });
    yield put({ type: HIDE_LOADER });
  }
}

export function* sagaTrack() {
  yield takeEvery(REQUEST_TRACKS, sagaWorker);
}
