import './Employee.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../header';
import EmployeeLeftPane from '../employee-left-pane';
import EmployeeRightPane from '../employee-right-pane';

const Employee = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch({ type: 'GET_EMPLOYEE_DETAILS' });
  }, []);

  return (
    <div>
      <Header />
      <div className='flex-container'>
        <div className='flex-item-left'>
          <EmployeeLeftPane/>
        </div>
        <div className='flex-item-right'>
          <EmployeeRightPane />
        </div>
      </div>
    </div>
  );
};

export default Employee;
