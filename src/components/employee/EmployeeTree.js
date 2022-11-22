import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectEmployeeTree } from './@Redux/selectors';
import OrganizationChart from '../employee-chart/ChartContainer';

const EmployeeTree = () => {
  const employeeDetails = useSelector(state => selectEmployeeTree(state));
  const dispatch = useDispatch();

  const updateEmployeeManager = (employeeId, managerId) => {
    const updateEmployeePayload = { managerId };
    dispatch({ type: 'UPDATE_EMPLOYEE_DETAILS', employeeId, updateEmployeePayload });
  }

  return <OrganizationChart datasource={employeeDetails} draggable={true} updateNodeParent={updateEmployeeManager} />;
};

export default EmployeeTree;
