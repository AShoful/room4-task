import { all } from 'redux-saga/effects';
import { sagaChart } from './sagaChart';
import { sagaTrack } from './sagaTrack';
import { sagaArtist } from './sagaArtist';

export default function* rootSaga() {
  yield all([sagaChart(), sagaTrack(), sagaArtist()]);
}
