import { takeLatest, all, call, put } from 'redux-saga/effects';
import { getEmployeeDetails, updateEmployeeDetailsApi } from './actions';

// Get employee list from service
function* getEmployees() {
  try {
    const apiResponse = yield call(getEmployeeDetails);
    const employeeDetails = apiResponse?.data?.employees;
    if (apiResponse?.status === 200 && employeeDetails) {
      yield put({
        type: 'EMPLOYEE_DETAILS_SUCCESS',
        employeeDetails: employeeDetails,
      });
    } else {
      console.error('error in getting employee details');
    }
    
  } catch(ex) {
    console.error('error occured', ex);
  }
}

// Update manager id for employee
function* updateEmployeeDetails({ employeeId, updateEmployeePayload }) {
  try {
    const apiResponse = yield call(updateEmployeeDetailsApi, employeeId, updateEmployeePayload);
    if (apiResponse?.status === 200) {
      yield getEmployees();
    } else {
      console.error('error in updating employee information');
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
