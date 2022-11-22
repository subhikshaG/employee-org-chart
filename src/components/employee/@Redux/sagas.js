import { takeLatest, all, call, put } from 'redux-saga/effects';
import { getEmployeeDetails, updateEmployeeDetailsApi } from './actions';

function* getEmployees() {
  try {
    const apiResponse = yield call(getEmployeeDetails);
    let employeeDetails = apiResponse?.data?.employees;
    yield put({
      type: 'EMPLOYEE_DETAILS_SUCCESS',
      employeeDetails: employeeDetails || [],
    });
  } catch(ex) {
    console.error('error occured', ex);
  }
}

function* updateEmployeeDetails({ employeeId, updateEmployeePayload }) {
  try {
    const apiResponse = yield call(updateEmployeeDetailsApi, employeeId, updateEmployeePayload);
    if (apiResponse) {
      yield getEmployees();
    }
  } catch(ex) {
    console.error('error occured', ex);
  }
}

function* actionWatcher() {
  yield takeLatest('GET_EMPLOYEE_DETAILS', getEmployees);
  yield takeLatest('UPDATE_EMPLOYEE_DETAILS', updateEmployeeDetails);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
