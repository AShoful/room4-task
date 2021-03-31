/* eslint-disable no-return-await */
import { takeEvery, put, call } from 'redux-saga/effects';
import {
  REQUEST_GHARTS,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ERROR,
  HIDE_ERROR,
  GET_TOP_TRACKS
} from './actionTypes';
import api from '../../api';

export function fetchCharts() {
  return {
    type: REQUEST_GHARTS
  };
}

async function getCharts() {
  return await api.getTopTracks();
}

function* sagaWorker() {
  try {
    yield put({ type: SHOW_LOADER });
    yield put({ type: HIDE_ERROR });
    const { data } = yield call(getCharts);
    yield put({ type: GET_TOP_TRACKS, topTracks: data });
    yield put({ type: HIDE_LOADER });
  } catch (e) {
    yield put({ type: SHOW_ERROR, payload: e.message });
    yield put({ type: HIDE_LOADER });
  }
}

export function* sagaChart() {
  yield takeEvery(REQUEST_GHARTS, sagaWorker);
}
