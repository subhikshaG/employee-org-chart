import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectEmployeeTree, selectFilterValue } from '../../store/selectors';
import OrganizationChart from '../organizationTree/ChartContainer';

const OrganizationTree = () => {
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

export default OrganizationTree;
