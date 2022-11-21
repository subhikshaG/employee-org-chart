import './employee.css';
import { useEffect } from 'react';
import { sagaMiddleware } from '../../store';
import EmployeeList from './EmployeeList';
import EmployeeTree from './EmployeeTree';
import sagas from './@Redux/sagas';
import { useDispatch } from 'react-redux';
import EmployeeSearch from './EmployeeSearch';

const Employee = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    sagaMiddleware.run(sagas);
    dispatch({ type: 'GET_EMPLOYEE_DETAILS' });
  }, []);

  return (
    <div>
      <h2>Employee organization chart</h2>
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
