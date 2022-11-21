import { devEndPoints } from './../../../services/apiUrl'
import { HttpService } from '../../../services/HttpService';

export const getEmployeeDetailsApi = (data) => {
    return HttpService.get(devEndPoints.getEmployeeApi, data);
}
