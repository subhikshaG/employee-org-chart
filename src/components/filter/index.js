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

  const handleFilterChange = (e) => {
    const filterValue = e?.target?.value;
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
