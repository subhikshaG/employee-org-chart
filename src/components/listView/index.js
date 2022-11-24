import './ListView.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectEmployeeDetailsToDisplay } from '../../store/selectors';
import ListItem from './ListItem';

const ListView = () => {
  const employeeDetails = useSelector(state => selectEmployeeDetailsToDisplay(state));

  return (
    <div>
      {employeeDetails && employeeDetails.map(employee => (
        <div key={employee.id}>
          <ListItem
            employee={employee}
          />
        </div>
      ))}
    </div>
  );
};

export default ListView;
