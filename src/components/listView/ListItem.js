import PropTypes from 'prop-types';

const ListItem = ({ employee }) => {
  return (
    <div className='flex-container-card'>
      <div className='flex-item-image'><img src={require(`../../assets/images/${employee.id}.jpg`)} alt={employee.name} className="list-image" /></div>
      <div className='flex-item-details'>
        {employee.name}
        <div data-testid='employee-designation' className='card-information employee-designation'>{employee.designation}</div>
        <div data-testid='employee-team' className='card-information employee-team'>{employee.team}</div>
      </div>
    </div>
  );
};

ListItem.propTypes = {
  employee: PropTypes.object
};

ListItem.defaultProps = {
  employee: {}
};

export default ListItem;
