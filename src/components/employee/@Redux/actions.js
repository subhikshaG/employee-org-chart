import { devEndPoints } from './../../../services/apiUrl'
import { HttpService } from '../../../services/HttpService';

export const getEmployeeDetails = (data) => {
  return HttpService.get(devEndPoints.getEmployeeApi, data);
}

export const updateEmployeeDetailsApi = (employeeId, data) => {
  return HttpService.patch(`${devEndPoints.updateEmployeeDetailsApi}/${employeeId}`, data);
}
