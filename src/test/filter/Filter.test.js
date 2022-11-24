import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Filter from '../../components/filter';
import * as reactRedux from 'react-redux';

afterEach(cleanup);

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('Filter', () => {
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
  })
  afterEach(() => {
    useDispatchMock.mockClear();
  })

  const useDispatchMock = reactRedux.useDispatch;

  it('should have designation leadership in dropdown', () => {
    const view = render(<Filter />); 
    expect(view.getByTestId('leadership')).toHaveTextContent('Leadership');
   })
});
