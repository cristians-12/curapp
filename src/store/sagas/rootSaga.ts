import {all} from 'redux-saga/effects';

/**
 * Saga raíz. Registrar aquí los watchers de cada feature:
 *
 *   yield all([watchAuth(), watchProfile()]);
 */
export default function* rootSaga() {
  yield all([]);
}
