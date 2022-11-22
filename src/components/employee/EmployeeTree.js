import React from "react";
import { useSelector } from 'react-redux';
import { selectEmployeeTree } from './@Redux/selectors';
import OrganizationChart from '../employee-chart/ChartContainer';

const EmployeeTree = () => {
  const employeeDetails = useSelector(state => selectEmployeeTree(state));
  return <OrganizationChart datasource={employeeDetails} draggable={true} />;
};

export default EmployeeTree;
