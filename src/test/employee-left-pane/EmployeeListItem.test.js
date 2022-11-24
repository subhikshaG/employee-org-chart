import React from 'react';
import { render, cleanup } from '@testing-library/react';
import EmployeeListItem from '../../components/employee-left-pane/EmployeeListItem'

afterEach(cleanup);

const employee = {
  id: 'n16',
  name: 'Michael Palmer',
  designation: 'SDE 1',
  team: 'Engineering',
  managerId: 'n4'
};

describe('EmployeeListItem', () => {
  it('should equal to 0', () => {
    const view = render(<EmployeeListItem employee={employee} />); 
    expect(view.getByTestId('employee-designation')).toHaveTextContent('SDE 1');
   })
});
