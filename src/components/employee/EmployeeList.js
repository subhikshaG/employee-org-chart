import { useSelector } from 'react-redux';
import { selectEmployeeDetailsToDisplay } from './@Redux/selectors';

const EmployeeList = () => {
  const employeeDetails = useSelector(state => selectEmployeeDetailsToDisplay(state));
  return (
    <div>
      {employeeDetails.map(employee => (
        <div className='flex-container-card'>
          <div className='flex-item-image'><img src={require(`../../assets/images/${employee.id}.jpg`)} alt={employee.name} className="list-image" /></div>
          <div className='flex-item-details'>
            {employee.name}
            <div className='card-information employee-designation'>{employee.designation}</div>
            <div className='card-information employee-team'>{employee.team}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
