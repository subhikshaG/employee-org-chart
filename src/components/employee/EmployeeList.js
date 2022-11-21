import logo from '../../logo.svg';
import { useSelector } from 'react-redux';
import { selectEmployeeDetailsToDisplay } from './@Redux/selectors';

const EmployeeList = () => {
  const employeeDetails = useSelector(state => selectEmployeeDetailsToDisplay(state));
  return (
    <div>
      {employeeDetails.map(employee => (
        <div className='flex-container-card'>
          <div className='flex-item-image'><img src={logo} alt={employee.name}  /></div>
          <div className='flex-item-details'>
            {employee.name}
            <p>{employee.designation}</p>
            <p>{employee.team}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
