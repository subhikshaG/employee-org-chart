import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/header';
import LeftPane from './components/leftPane';
import RightPane from './components/rightPane';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_EMPLOYEE_DETAILS' });
  }, []);

  return (
    <div>
      <Header />
      <div className='flex-container'>
        <div data-testid='left-pane' className='flex-item-left'>
          <LeftPane/>
        </div>
        <div data-testid='right-pane' className='flex-item-right'>
          <RightPane />
        </div>
      </div>
    </div>
  );
}

export default App;
