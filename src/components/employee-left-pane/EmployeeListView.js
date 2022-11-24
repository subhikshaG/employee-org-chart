import React from 'react';
import { useSelector } from 'react-redux';
import { selectEmployeeDetailsToDisplay } from '../../@Redux/employee/selectors';
import EmployeeListItem from './EmployeeListItem';

const EmployeeListView = () => {
  const employeeDetails = useSelector(state => selectEmployeeDetailsToDisplay(state));
  return (
    <div>
      {employeeDetails && employeeDetails.map(employee => (
        <div key={employee.id}>
          <EmployeeListItem
            employee={employee}
          />
        </div>
      ))}
    </div>
  );
};

export default EmployeeListView;
