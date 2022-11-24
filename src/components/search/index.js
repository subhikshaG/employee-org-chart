import './Search.css';
import { useDispatch } from 'react-redux'
const Search = () => {

  const dispatch = useDispatch();

  /**
   * On search, update store to view employees with search key
   * @param {object} e 
   */
  const onSearchChange = (e) => {
    const searchVal = e?.target?.value;
    dispatch({ type: 'UPDATE_SEARCH', searchVal });
  };

  return (
    <input type='search' id='searchInput' className='search-input' onChange={onSearchChange} placeholder='Search' />
  );
};

export default Search;
