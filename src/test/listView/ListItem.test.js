import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ListItem from '../../components/listView/ListItem'

afterEach(cleanup);

const employee = {
  id: 'n16',
  name: 'Michael Palmer',
  designation: 'SDE 1',
  team: 'Engineering',
  managerId: 'n4'
};

describe('EmployeeListItem', () => {
  it('should have designation displayed', () => {
    const view = render(<ListItem employee={employee} />); 
    expect(view.getByTestId('employee-designation')).toHaveTextContent('SDE 1');
   })
});
