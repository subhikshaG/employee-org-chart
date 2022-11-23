import './employee.css';
import { useEffect } from 'react';
import EmployeeList from './EmployeeList';
import EmployeeTree from './EmployeeTree';
import { useDispatch } from 'react-redux';
import EmployeeSearch from './EmployeeSearch';

const Employee = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch({ type: 'GET_EMPLOYEE_DETAILS' });
  }, []);

  return (
    <div>
      <div className='organization-title'>Organization chart</div>
      <div className='flex-container'>
        <div className='flex-item-left'>
          <EmployeeSearch />
          <EmployeeList />
        </div>
        <div className='flex-item-right'>
          <EmployeeTree />
        </div>
      </div>
    </div>
  );
};

export default Employee;
