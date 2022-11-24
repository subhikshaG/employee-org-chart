import './EmployeeLeftPane.css';
import EmployeeSearch from './EmployeeSearch';
import EmployeeFilter from './EmployeeFilter';
import EmployeeListView from './EmployeeListView';

const EmployeeLeftPane = () => {

  return (
    <>
			<EmployeeSearch />
			<EmployeeFilter />
			<EmployeeListView />
    </>
  );
};

export default EmployeeLeftPane;
