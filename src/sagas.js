import { all, call, takeLatest } from 'redux-saga/effects';

function* noop() {
    // changes
}

export function* actionWatcher() {
  yield takeLatest('TEST_NOOP', noop);
}

const rootSagaGeneration = (pageWatcher) => (
	function* rootSaga() {
		const callArray = [
			call(actionWatcher),
		];
		if (pageWatcher) {
			callArray.push(call(pageWatcher));
		}
		yield all(callArray);
	}
);

export default rootSagaGeneration;
