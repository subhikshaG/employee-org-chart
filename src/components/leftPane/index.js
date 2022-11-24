import './LeftPane.css';
import Search from '../search';
import Filter from '../filter';
import ListView from '../listView';

const LeftPane = () => {

  return (
    <>
			<Search />
			<Filter />
			<ListView />
    </>
  );
};

export default LeftPane;
