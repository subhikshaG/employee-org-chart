import { takeLatest, all, call, put } from 'redux-saga/effects';
import { getEmployeeDetailsApi  } from './actions';

function* getEmployees() {
    try {
      const apiResponse = yield call(getEmployeeDetailsApi);
      let employeeDetails = apiResponse?.data?.employees;
      yield put({
          type: 'EMPLOYEE_DETAILS_SUCCESS',
          employeeDetails: employeeDetails || [],
      });
    } catch(ex) {
        console.error('error occured', ex);
    }
}

function* actionWatcher() {
  yield takeLatest('GET_EMPLOYEE_DETAILS', getEmployees);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
