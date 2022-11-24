import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectEmployeeTree, selectFilterValue } from '../../@Redux/employee/selectors';
import OrganizationChart from '../organization-tree/ChartContainer';

const EmployeeTree = () => {
  const employeeDetails = useSelector(state => selectEmployeeTree(state));
  const isFilteredValue = useSelector(state => selectFilterValue(state));
  const dispatch = useDispatch();

  const updateEmployeeManager = (employeeId, managerId) => {
    const updateEmployeePayload = { managerId };
    dispatch({ type: 'UPDATE_EMPLOYEE_DETAILS', employeeId, updateEmployeePayload });
  }

  return <OrganizationChart
    datasource={employeeDetails}
    draggable={true}
    updateNodeParent={updateEmployeeManager}
    collapsible={false}
  />;
};

export default EmployeeTree;