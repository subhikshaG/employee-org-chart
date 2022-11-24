import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from '../../components/header';

afterEach(cleanup);


describe('Header', () => {

  it('should have title', () => {
    const view = render(<Header />); 
    expect(view.getByTestId('organization-title')).toHaveTextContent('Organization Chart');
   })
});
