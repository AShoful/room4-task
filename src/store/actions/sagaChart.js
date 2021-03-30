/* eslint-disable no-return-await */
import { takeEvery, put, call } from 'redux-saga/effects';
import {
  REQUEST_TRACK,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ERROR,
  HIDE_ERROR,
  GET_TOP_TRACKS
} from './actionTypes';
import api from '../../api';

async function getTracks() {
  return await api.getTopTracks();
}

function* sagaWorker() {
  try {
    yield put({ type: SHOW_LOADER });
    yield put({ type: HIDE_ERROR });
    const { data } = yield call(getTracks);
    yield put({ type: GET_TOP_TRACKS, topTracks: data });
    yield put({ type: HIDE_LOADER });
  } catch (e) {
    yield put({ type: SHOW_ERROR, payload: 'OOPS!!!!!' });
    yield put({ type: HIDE_LOADER });
  }
}

export function* sagaWatcher() {
  yield takeEvery(REQUEST_TRACK, sagaWorker);
}
