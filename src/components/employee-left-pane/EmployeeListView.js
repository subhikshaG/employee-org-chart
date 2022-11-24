import React from 'react';
import { useSelector } from 'react-redux';
import { selectEmployeeDetailsToDisplay } from '../../@Redux/employee/selectors';
import EmployeeListItem from './EmployeeListItem';

const EmployeeListView = () => {
  const employeeDetails = useSelector(state => selectEmployeeDetailsToDisplay(state));
  return (
    <div>
      {employeeDetails && employeeDetails.map(employee => (
        <EmployeeListItem
        employee={employee}
        />
      ))}
    </div>
  );
};

export default EmployeeListView;
