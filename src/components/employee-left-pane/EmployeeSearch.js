import { useDispatch } from 'react-redux'
const EmployeeSearch = () => {

  const dispatch = useDispatch();

  const onSearchChange = (e) => {
    const searchVal = e?.target?.value;
    dispatch({ type: 'UPDATE_SEARCH', searchVal });
  };

  return (
    <input type='search' id='myInput' className='searchInput' onChange={onSearchChange} placeholder='Search for employees' />
  );
};

export default EmployeeSearch;
