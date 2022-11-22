import { useDispatch } from 'react-redux'
const EmployeeSearch = () => {

  const dispatch = useDispatch();
  const options = [
    { value: '', text: 'All' },
    { value: 'engineering', text: 'Engineering' },
    { value: 'leadership', text: 'Leadership' },
    { value: 'sales', text: 'Sales' },
    { value: 'finance', text: 'Finance' }
  ];

  const onSearchChange = (e) => {
    const searchVal = e?.target?.value;
    dispatch({ type: 'UPDATE_SEARCH', searchVal });
  };

  const handleFilterChange = (e) => {
    const filterValue = e?.target?.value;
    dispatch({ type: 'UPDATE_FILTER', filterValue });
  };

  return (
    <div>
      <input type='search' id='myInput' className='searchInput' onChange={onSearchChange} placeholder='Search for employees' />
      <select className='filterDropdown' onChange={handleFilterChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EmployeeSearch;