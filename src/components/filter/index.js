import './Filter.css';
import { useDispatch } from 'react-redux'

const Filter = () => {

  const dispatch = useDispatch();
  const options = [
    { value: '', text: 'All' },
    { value: 'engineering', text: 'Engineering' },
    { value: 'leadership', text: 'Leadership' },
    { value: 'sales', text: 'Sales' },
    { value: 'finance', text: 'Finance' }
  ];

  // Once a dropdown is selected, update store to show the list for selected team
  const handleFilterChange = (event) => {
    const filterValue = event?.target?.value;
    dispatch({ type: 'UPDATE_FILTER', filterValue });
  };

  return (
    <select className='filter-dropdown' onChange={handleFilterChange}>
      {options.map(option => (
        <option key={option.value} value={option.value} data-testid={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
};

export default Filter;
