import PropTypes from 'prop-types';

const EmployeeListItem = ({ employee }) => {
  return (
    <div className='flex-container-card'>
      <div className='flex-item-image'><img src={require(`../../assets/images/${employee.id}.jpg`)} alt={employee.name} className="list-image" /></div>
      <div className='flex-item-details'>
        {employee.name}
        <div className='card-information employee-designation'>{employee.designation}</div>
        <div className='card-information employee-team'>{employee.team}</div>
      </div>
    </div>
  );
};

EmployeeListItem.propTypes = {
  employee: PropTypes.array
};

EmployeeListItem.defaultProps = {
  employee: []
};

export default EmployeeListItem;
